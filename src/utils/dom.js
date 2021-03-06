var $;
(function () {
  'use strict';


  function DomNotFoundError (selector) {
    _.NoPicAdsError.call(this, _.T('`{0}` not found')(selector));
    this._setupStack();
  }
  DomNotFoundError.prototype = Object.create(_.NoPicAdsError.prototype);
  DomNotFoundError.prototype.constructor = DomNotFoundError;
  DomNotFoundError.prototype.name = 'DomNotFoundError';


  $ = function (selector, context) {
    if (!context || !context.querySelector) {
      context = document;
    }
    var n = context.querySelector(selector);
    if (!n) {
      throw new DomNotFoundError(selector);
    }
    return n;
  };

  $.$ = function (selector, context) {
    try {
      return $(selector, context);
    } catch (e) {
      $.info(e.message);
      return null;
    }
  };

  $.$$ = function (selector, context) {
    if (!context || !context.querySelectorAll) {
      context = document;
    }
    var ns = context.querySelectorAll(selector);
    return _.C(ns);
  };


  function log (method, args) {
    args = Array.prototype.slice.call(args);
    args.unshift('NoPicAds:');
    console[method].apply(console, args);
  }

  $.info = function () {
    log('info', arguments);
  };

  $.warn = function () {
    log('warn', arguments);
  };


  function toQuery (data) {
    if (typeof data === 'string') {
      return data;
    }
    if (data instanceof String) {
      return data.toString();
    }
    return _.C(data).map(function (v, k) {
      return _.T('{0}={1}')(encodeURIComponent(k), encodeURIComponent(v));
    }).join('&');
  }

  function ajax (method, url, data, callback) {
    var controller = GM_xmlhttpRequest({
      method: method,
      url: url,
      data: toQuery(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      onload: function (response) {
        callback(response.responseText);
      }
    });

    return controller;
  }

  function go (path, params, method) {
    // Set method to post by default, if not specified.
    method = method || 'post';

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement('form');
    form.method = method;
    form.action = path;

    _.C(params).each(function (value, key) {
        var input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  }

  $.post = function (url, data, callback) {
    return ajax('POST', url, data, callback);
  };

  $.postAndGo = function (url, data) {
    go(url, data, 'post');
  };


  $.redirect = function (to) {
    if (!to) {
      $.warn('false URL');
      return;
    }
    var from = window.location.toString();
    $.info(_.T('{0} -> {1}')(from, to));
    window.top.location.replace(to);
  };

  $.removeAllTimer = function () {
    var intervalID = window.setInterval(_.nop, 10);
    while (intervalID > 0) {
      window.clearInterval(intervalID--);
    }
  };

  function disableWindowOpen () {
    if (unsafeWindow) {
      unsafeWindow.open = _.nop;
    }
    if (window) {
      window.open = _.nop;
    }
  }

  $.enableScrolling = function () {
    var o = document.compatMode === 'CSS1Compat' ? document.documentElement : document.body;
    o.style.overflow = '';
  };

  $.replaceBody = function (imgSrc) {
    $.removeAllTimer();
    $.removeNodes('style, link[rel=stylesheet]');

    var imageStyle = GM_getResourceText('imageStyle');
    var bgImage = GM_getResourceURL('bgImage');
    imageStyle = _.T(imageStyle)({
      url: bgImage,
    });

    GM_addStyle(imageStyle);

    document.body = document.createElement('body');
    var d = document.createElement('div');
    d.id = 'nopicads-wrapper';
    document.body.appendChild(d);

    var i = document.createElement('img');
    i.id = 'nopicads-image';
    i.src = imgSrc;
    d.appendChild(i);

    if (i.naturalWidth > document.documentElement.clientWidth || i.naturalHeight > document.documentElement.clientHeight) {
      var scaleStyle = GM_getResourceText('scaleStyle');
      GM_addStyle(scaleStyle);

      i.classList.add('nopicads-shrink');

      i.addEventListener('click', function () {
        this.classList.toggle('nopicads-shrink');
      });
    }
  };

  $.removeNodes = function (selector) {
    $.$$(selector).each(function (e) {
      e.parentNode.removeChild(e);
    });
  };

  $.captcha = function (imgSrc, cb) {
    var a = document.createElement('canvas');
    var b = a.getContext('2d');
    var c = new Image();
    c.src = imgSrc;
    c.onload = function () {
      a.width = c.width;
      a.height = c.height;
      b.drawImage(c, 0, 0);
      var d = a.toDataURL();
      var e = d.substr(d.indexOf(',') + 1);
      $.post('http://www.wcpan.info/cgi-bin/captcha.cgi', {
        i: e,
      }, cb);
    };
  };


  var patterns = [];

  $.register = function (pattern) {
    patterns.push(pattern);
  };

  function find (uri) {
    var matched = {};
    var pattern = _.C(patterns).find(function (pattern) {
      var tmp = _.C(pattern.rule).all(function (pattern, part) {
        matched[part] = uri[part].match(pattern);
        return !!matched[part];
      });
      if (!tmp) {
        matched = {};
      }
      return tmp;
    });
    if (!pattern) {
      return null;
    }
    return {
      runner: pattern.run,
      matched: matched,
    };
  }

  disableWindowOpen();
  document.addEventListener('DOMContentLoaded', function () {
    // <scheme>//<host>:<port><path><query><hash>
    var handler = find({
      scheme: window.location.protocol,
      host: window.location.hostname,
      port: window.location.port,
      path: window.location.pathname,
      query: window.location.search,
      hash: window.location.hash,
    });

    if (handler) {
      handler.runner(handler.matched);
    }
  });


})();


// vim: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
