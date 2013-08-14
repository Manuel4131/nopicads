// ==UserScript==
// @name           NoPicAds
// @namespace      FoolproofProject
// @description    No Picture Advertisements
// @copyright      2012+, legnaleurc (https://github.com/legnaleurc/nopicads)
// @version        2.24.1
// @license        BSD
// @updateURL      https://userscripts.org/scripts/source/154858.meta.js
// @downloadURL    https://userscripts.org/scripts/source/154858.user.js
// @grant          unsafeWindow
// @grant          GM_xmlhttpRequest
// @run-at         document-start
// ==adfly==
// @match          http://9.bb/*
// @match          http://adf.ly/*
// @match          http://go.phpnulledscripts.com/*
// @match          http://j.gs/*
// @match          http://q.gs/*
// @match          http://u.bb/*
// @exclude        http://adf.ly/*market.php?*
// @exclude        http://adf.ly/?default_ad*
// ==/adfly==
// ==linkbucks==
// @match          http://*.allanalpass.com/*
// @match          http://*.amy.gs/*
// @match          http://*.any.gs/*
// @match          http://*.baberepublic.com/*
// @match          http://*.deb.gs/*
// @match          http://*.drstickyfingers.com/*
// @match          http://*.dyo.gs/*
// @match          http://*.fapoff.com/*
// @match          http://*.filesonthe.net/*
// @match          http://*.freean.us/*
// @match          http://*.galleries.bz/*
// @match          http://*.hornywood.tv/*
// @match          http://*.linkbabes.com/*
// @match          http://*.linkbucks.com/*
// @match          http://*.linkgalleries.net/*
// @match          http://*.linkseer.net/*
// @match          http://*.megaline.co/*
// @match          http://*.miniurls.co/*
// @match          http://*.picbucks.com/*
// @match          http://*.picturesetc.net/*
// @match          http://*.poontown.net/*
// @match          http://*.qqc.co/*
// @match          http://*.qvvo.com/*
// @match          http://*.realfiles.net/*
// @match          http://*.rqq.co/*
// @match          http://*.seriousdeals.net/*
// @match          http://*.seriousfiles.com/*
// @match          http://*.seriousurls.com/*
// @match          http://*.sexpalace.gs/*
// @match          http://*.theseblogs.com/*
// @match          http://*.thesefiles.com/*
// @match          http://*.theseforums.com/*
// @match          http://*.thesegalleries.com/*
// @match          http://*.thosegalleries.com/*
// @match          http://*.tinybucks.net/*
// @match          http://*.tinylinks.co/*
// @match          http://*.tnabucks.com/*
// @match          http://*.tubeviral.com/*
// @match          http://*.uberpicz.com/*
// @match          http://*.ubervidz.com/*
// @match          http://*.ubucks.net/*
// @match          http://*.ugalleries.net/*
// @match          http://*.ultrafiles.net/*
// @match          http://*.urlbeat.net/*
// @match          http://*.urlpulse.net/*
// @match          http://*.whackyvidz.com/*
// @match          http://*.youfap.com/*
// @match          http://*.youfap.me/*
// @match          http://*.yyv.co/*
// @match          http://*.zff.co/*
// @match          http://*.zxxo.net/*
// ==/linkbucks==
// ==Mihalism Multi Host v1==
// @match          http://freeuploadimages.org/viewer.php?file=*
// @match          http://gallery.jpavgod.com/viewer.php?file=*
// @match          http://hentai-hosting.com/viewer.php?file=*
// @match          http://imagepremium.com/viewer.php?file=*
// @match          http://pornpicuploader.com/viewer.php?file=*
// @match          http://shareimage.ro/viewer.php?file=*
// ==/Mihalism Multi Host v1==
// ==Mihalism Multi Host v2==
// @match          http://image69.us/x/viewer.php?file=*
// @match          http://jpdown.info/viewer.php?file=*
// ==/Mihalism Multi Host v2==
// ==Mihalism Multi Host v3==
// @match          http://gzvd.info/viewer.php?file=*
// @match          http://hentaita.com/viewer.php?file=*
// @match          http://howtohemorrhoidscure.com/viewer.php?file=*
// ==/Mihalism Multi Host v3==
// ==Mihalism Multi Host==
// @match          http://image69.us/viewer.php?file=*
// @match          http://preview.jpavgod.com/*.html
// ==/Mihalism Multi Host==
// ==CF Image Host==
// @match          http://*.imgjav.tk/?pm=*
// @match          http://imgurban.info/?pm=*
// ==/CF Image Host==
// ==imgonion==
// @match          http://imagecorn.com/img-*.html
// @match          http://imagepicsa.com/img-*.html
// @match          http://imgcandy.net/img-*.html
// @match          http://imgcloud.co/img-*.html
// @match          http://imgcorn.com/img-*.html
// @match          http://imgmoney.com/img-*.html
// @match          http://imgonion.com/img-*.html
// @match          http://imgrill.com/img-*.html
// @match          http://imgtube.net/img-*.html
// @match          http://imgwoot.com/img-*.html
// @match          http://pixup.us/img-*.html
// @match          http://www.imagefolks.com/img-*.html
// ==/imgonion==
// ==imageporter==
// @match          http://*.imagecarry.com/*
// @match          http://*.imagedunk.com/*
// @match          http://*.imageporter.com/*
// @match          http://*.imageswitch.com/*
// @match          http://*.piclambo.net/*
// @match          http://*.picleet.com/*
// @match          http://*.picturedip.com/*
// @match          http://*.pictureturn.com/*
// @match          http://*.pixroute.com/*
// @match          http://*.yankoimages.net/*
// ==/imageporter==
// ==reklama==
// @match          http://comicalpic.net/img-*.html
// @match          http://croftimage.com/img-*.html
// @match          http://hosterbin.com/img-*.html
// @match          http://image.torrentjav.net/img-*.html
// @match          http://imagedecode.com/img-*.html
// @match          http://imgserve.net/img-*.html
// @match          http://ligasampiona.com/img-*.html
// @match          http://zeljeimage.com/img-*.html
// @match          http://zonezeedimage.com/img-*.html
// ==/reklama==
// ==picfox==
// @match          http://amateurfreak.org/share-*.html
// @match          http://picfox.org/*
// ==/picfox==
// ==imagecherry==
// @match          http://imagecherry.com/*
// @match          http://imagejumbo.com/*
// @match          http://imgpo.st/*
// ==/imagecherry==
// ==imgdino==
// @match          http://imgdino.com/viewer.php?file=*
// @match          http://imgtiger.com/viewer.php?file=*
// ==/imgdino==
// ==imgpony==
// @match          http://imgpony.com/viewer3.php?img=*
// @match          http://imgtrick.com/viewer3.php?img=*
// ==imgpony==
// ==imgchili==
// @match          http://imgchili.com/show/*
// @match          http://imgchili.net/show/*
// ==/imgchili==
// ==hanimes==
// @match          http://www.adultmove.info/*/*/*.html
// @match          http://www.h-animes.info/*/*/*.html
// ==hanimes==
// ==imageback==
// @match          http://imageback.info/view-image/*
// @match          http://imagepong.info/view-image/*
// ==/imageback==
// ==abload==
// @match          http://*.abload.de/image.php?img=*
// @match          http://abload.de/image.php?img=*
// @match          http://fastpic.ru/view/*.html
// @match          http://funkyimg.com/viewer.php?img=*
// ==/abload==
// ==adcrun==
// @match          http://4ks.net/*
// @match          http://adcrun.ch/*
// @match          http://biaiai.com/*
// @match          http://bih.cc/*
// @match          http://www.budurl.ru/*
// @match          http://fly2url.com/*
// @match          http://link.tl/*
// @match          http://mhz.me/*
// @match          http://raksoyun.com/*
// @match          http://short.pk/*
// @match          http://ssl.gs/*
// @match          http://tr5.in/*
// @match          http://urlsir.com/*
// @match          http://urlvisa.com/*
// @match          http://wwy.me/*
// @match          http://youlinking.com/*
// @match          http://zpoz.net/*
// @exclude        http://4ks.net/
// @exclude        http://adcrun.ch/
// @exclude        http://biaiai.com/
// @exclude        http://bih.cc/
// @exclude        http://www.budurl.ru/
// @exclude        http://fly2url.com/
// @exclude        http://link.tl/
// @exclude        http://mhz.me/
// @exclude        http://raksoyun.com/
// @exclude        http://short.pk/
// @exclude        http://short.pk/*.php
// @exclude        http://ssl.gs/
// @exclude        http://tr5.in/
// @exclude        http://urlsir.com/
// @exclude        http://urlvisa.com/
// @exclude        http://wwy.me/
// @exclude        http://youlinking.com/
// @exclude        http://zpoz.net/
// ==/adcrun==
// ==lnxlu==
// @match          http://lnx.lu/*
// @match          http://url.fm/*
// @match          http://z.gs/*
// ==/lnxlu==
// ==coinurl==
// @match          http://coinurl.com/*
// @match          http://cur.lv/*
// ==/coinurl==
// ==adfmyid==
// @match          http://adf.my.id/*
// @match          http://riurl.com/*
// ==/adfmyid==
// ==lnkco==
// @match          http://lnk.co/*
// @match          http://rdlnk.co/*
// @exclude        http://lnk.co/
// ==/lnkco==
// ==urlcash==
// @match          http://*.bat5.com/*
// @match          http://*.celebclk.com/*
// @match          http://*.detonating.com/*
// @match          http://*.eightteen.com/*
// @match          http://*.looble.net/*
// @match          http://*.smilinglinks.com/*
// @match          http://*.urlcash.net/*
// @match          http://*.urlcash.org/*
// @match          http://*.xxxs.org/*
// @match          http://celebclk.com/*
// ==/urlcash==
// ==imagesnake==
// @match          http://www.freebunker.com/show/*
// @match          http://www.imagesnake.com/index.php?*
// @match          http://www.imagesnake.com/show/*
// ==/imagesnake==
// ==else==
// @match          http://*.4owl.info/*
// @match          http://*.alabout.com/*
// @match          http://*.adv.li/*
// @match          http://*.alafs.com/*
// @match          http://*.directupload.net/file/*.htm
// @match          http://*.imagebam.com/image/*
// @match          http://*.imagevenue.com/img.php?*
// @match          http://*.yfrog.com/*
// @match          http://1be.biz/s.php?*
// @match          http://3ra.be/*
// @match          http://4fun.tw/*
// @match          http://adfoc.us/*
// @match          http://adfoc.us/serve/?id=*
// @match          http://adlock.in/*
// @match          http://adv.li/*
// @match          http://bayimg.com/*
// @match          http://bc.vc/*
// @match          http://bildr.no/view/*
// @match          http://bilurl.com/*
// @match          http://cf.ly/*
// @match          http://cl.my/*
// @match          http://goimagehost.com/xxx/*
// @match          http://ibunker.us/*
// @match          http://ichan.org/*
// @match          http://imagearn.com/image.php?id=*
// @match          http://imagescream.com/img/soft/*
// @match          http://imagetwist.com/*
// @match          http://imgah.com/*
// @match          http://imgbar.net/*
// @match          http://imgfantasy.com/?p=*
// @match          http://imgwiev.tk/?pm=*
// @match          http://javelite.tk/viewer.php?id=*
// @match          http://madlink.sk/*
// @match          http://p.pw/*
// @match          http://pics-money.ru/*
// @match          http://picshare.geenza.com/pics/*
// @match          http://pixhub.eu/*
// @match          http://pushba.com/*
// @match          http://qrrro.com/images/*.html
// @match          http://ref.so/*
// @match          http://screenlist.ru/details.php?image_id=*
// @match          http://seomafia.net/*
// @match          http://stash-coins.com/*
// @match          http://tinypic.com/view.php?pic=*
// @match          http://ulmt.in/*
// @match          http://www.bild.me/bild.php?file=*
// @match          http://www.bilder-hochladen.net/files/*.html
// @match          http://www.bilder-upload.eu/show.php?file=*
// @match          http://www.dumppix.com/viewer.php?*
// @match          http://www.freeporndumpster.com/show.php?*
// @match          http://www.hostpics.info/view.php?filename=*
// @match          http://www.hotimg.com/image/*
// @match          http://www.imgbabes.com/*.html
// @match          http://www.imgnip.com/viewerr*.php?file=*
// @match          http://www.lienscash.com/l/*
// @match          http://www.pic-upload.de/view-*.html
// @match          http://www.pics-money.ru/*
// @match          http://www.pixhost.org/show/*
// @match          http://www.sexyimg.com/*
// @match          http://www.subirimagenes.com/*.html
// @match          http://www.turboimagehost.com/*
// @match          http://www.viidii.com/*
// @match          http://www.x45x.info/?pt=*
// @match          http://xip.ir/*
// @match          http://zpag.es/*
// @exclude        http://javelite.tk/
// @exclude        http://madlink.sk/
// @exclude        http://madlink.sk/*.html
// @exclude        http://pics-money.ru/allpicfree/*
// @exclude        http://www.linkbucks.com/
// @exclude        http://www.pics-money.ru/allimage/*
// ==/else==
// ==/UserScript==


function NoPicAdsError (message) {
  this.message = message;
  this._setupStack();
}

NoPicAdsError.prototype = Object.create(Error.prototype);
NoPicAdsError.prototype.constructor = NoPicAdsError;
NoPicAdsError.prototype.name = 'NoPicAdsError';
NoPicAdsError.prototype._setupStack = function () {
  if (Error.captureStackTrace) {
    // V8-like
    Error.captureStackTrace(this, this.constructor);
  } else {
    // fallback to Mozilla-like
    this._stack = this._stack ? this._stack.slice(1) : Error().stack.split('\n').slice(2);
    var e = this._stack[0].match(/^.*@(.*):(\d*)$/);
    this.fileName = e[1];
    this.lineNumber = e[2];
    this.stack = this._stack.join('\n');
  }
};

function DomNotFoundError (selector) {
  NoPicAdsError.call(this, $T('`{0}` not found', selector));
  this._setupStack();
}

DomNotFoundError.prototype = Object.create(NoPicAdsError.prototype);
DomNotFoundError.prototype.constructor = DomNotFoundError;
DomNotFoundError.prototype.name = 'DomNotFoundError';


function any (c, fn) {
  if (c.some) {
    return c.some(fn);
  }
  if (c.length && c.length === +c.length) {
    Array.prototype.some.call(c, fn);
  }
  return Object.keys(c).some(function (k) {
    return fn(c[k], k, c);
  });
}

function all (c, fn) {
  if (c.every) {
    return c.every(fn);
  }
  if (c.length && c.length === +c.length) {
    Array.prototype.every.call(c, fn);
  }
  return Object.keys(c).every(function (k) {
    return fn(c[k], k, c);
  });
}

function each (c, fn) {
  if (c.forEach) {
    c.forEach(fn);
  } else if (c.length && c.length === +c.length) {
    Array.prototype.forEach.call(c, fn);
  } else {
    Object.keys(c).forEach(function (k) {
      fn(c[k], k, c);
    });
  }
}

function map (c, fn) {
  if (c.map) {
    return c.map(fn);
  }
  if (c.length && c.length === +c.length) {
    Array.prototype.map.call(c, fn);
  }
  return Object.keys(c).map(function (k) {
    return fn(c[k], k, c);
  });
}

function CollectionProxy (collection) {
  this._c = collection;
}

CollectionProxy.prototype.each = function (fn) {
  each(this._c, fn);
  return this;
};

CollectionProxy.prototype.find = function (fn) {
  var result;
  any(this._c, function (value, index, self) {
    if (fn(value, index, self)) {
      result = value;
      return true;
    }
  });
  return result;
};

CollectionProxy.prototype.all = function (fn) {
  return all(this._c, fn);
};

CollectionProxy.prototype.map = function (fn) {
  return map(this._c, fn);
};

function $C (collection) {
  return new CollectionProxy(collection);
}


function $P (fn) {
  var args = Array.prototype.slice(arguments, 1);
  return function () {
    return fn.apply(this, args.concat(Array.prototype.slice(arguments)));
  };
}


function $nop () {
}


function wrap (window, unsafeWindow, go) {
  'use strict';


  function $ (selector, context) {
    if (!context || !context.querySelector) {
      context = window.document;
    }
    var n = context.querySelector(selector);
    if (!n) {
      throw new DomNotFoundError(selector);
    }
    return n;
  }

  function $_ (selector, context) {
    try {
      return $(selector, context);
    } catch (e) {
      $info(e.message);
      return null;
    }
  }

  function $$ (selector, context) {
    if (!context || !context.querySelectorAll) {
      context = window.document;
    }
    var ns = context.querySelectorAll(selector);
    return $C(ns);
  }

  function $T (s) {
    if (!s || arguments.length < 2) {
      return s;
    }

    var T = {
      '{{': '{',
      '}}': '}',
    };
    var args = Array.prototype.slice.call(arguments, 1);
    var kwargs = args[args.length-1];

    return s.replace(/\{\{|\}\}|\{([^\}]+)\}/g, function (m, key) {
      if (T.hasOwnProperty(m)) {
        return T[m];
      }
      if (args.hasOwnProperty(key)) {
        return args[key];
      }
      if (kwargs.hasOwnProperty(key)) {
        return kwargs[key];
      }
      return m;
    });
  }


  function log (method, args) {
    args = Array.prototype.slice.call(args);
    args.unshift('NoPicAds:');
    console[method].apply(console, args);
  }

  function $info () {
    log('info', arguments);
  }

  function $warn () {
    log('warn', arguments);
  }


  function toQuery (data) {
    if (typeof data === 'string') {
      return data;
    }
    if (data instanceof String) {
      return data.toString();
    }
    return $C(data).map(function (v, k) {
      return $T('{0}={1}', k, v);
    }).join('&');
  }

  function ajax (method, url, data, callback) {
    var controller = GM_xmlhttpRequest({
      method: method,
      url: url,
      data: encodeURI(toQuery(data)),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      onload: function (response) {
        callback(response.responseText);
      }
    });

    return controller;
  }

  function goByForm (path, params, method) {
    // Set method to post by default, if not specified.
    method = method || 'post';

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = window.document.createElement('form');
    form.method = method;
    form.action = path;

    $C(params).each(function (value, key) {
        var input = window.document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
    });

    window.document.body.appendChild(form);
    form.submit();
  }

  function $post (url, data, callback) {
    return ajax('POST', url, data, callback);
  }

  function $postAndGo (url, data) {
    goByForm(url, data, 'post');
  }


  function $removeAllTimer () {
    var intervalID = window.setInterval($nop, 10);
    while (intervalID > 0) {
      window.clearInterval(intervalID--);
    }
  }

  function $disableWindowOpen () {
    unsafeWindow.open = $nop;
    window.open = $nop;
  }

  function $enableScrolling () {
    var o = window.document.compatMode === 'CSS1Compat' ? window.document.documentElement : window.document.body;
    o.style.overflow = '';
  }

  function $replaceBody (imgSrc) {
    $removeAllTimer();
    var i = window.document.createElement('img');
    i.setAttribute('src', imgSrc);
    window.document.body = window.document.createElement('body');
    window.document.body.style.textAlign = 'center';
    window.document.body.style.background = 'black';
    window.document.body.appendChild(i);
  }

  function $removeNodes (selector) {
    $$(selector).each(function (e) {
      e.parentNode.removeChild(e);
    });
  }

  var patterns = [

    // picshare
    {
      rules: [
        {
          host: /^picshare\.geenza\.com$/,
        },
      ],
      run: function () {
        var i = $('#picShare_image_container');
        go(i.src);
      },
    },

    // linkbucks
    {
      rules: [
        {
          host: /^[\w]{8}\..*\.(com?|net|gs|me|tv|bz|us)/,
        },
      ],
      run: function () {
        $removeAllTimer();

        if (unsafeWindow.document.body.onbeforeunload) {
          unsafeWindow.document.body.onbeforeunload = null;
        }

        var matches = window.location.pathname.match(/^\/verify/);
        if (matches) {
          window.location.reload();
        }

        if (unsafeWindow && unsafeWindow.Lbjs && unsafeWindow.Lbjs.TargetUrl) {
          go(unsafeWindow.Lbjs.TargetUrl);
          return;
        }

        matches = window.document.body.innerHTML.match(/TargetUrl\s*=\s*['"]([^'"]+)['"]/);
        if (matches) {
          go(matches[1]);
        }
      },
    },

    // alabout
    {
      rules: [
        {
          host: /(alabout|alafs)\.com/,
        },
      ],
      run: function () {
        $$('a').each(function (a) {
          if (/http:\/\/(www\.)?(alabout|alafs)\.com\/j\.phtml\?url=/.test(a.href)) {
            a.href = a.textContent;
          }
        });
      },
    },

    // imageporter
    {
      rules: [
        {
          host: /(imagecarry|imagedunk|imageporter|imageswitch|picleet|picturedip|pictureturn|pixroute)\.com|(piclambo|yankoimages)\.net/,
        },
      ],
      run: function () {
        var o = $('center img[id]');
        go(o.src);
      },
    },

    // adf.ly
    {
      rules: [
        {
          host: /adf\.ly|[u9]\.bb|[jq]\.gs|go\.phpnulledscripts\.com/,
        },
      ],
      run: function () {
        $removeNodes('iframe');

        var h = unsafeWindow.eu;
        if (!h) {
          h = $('#adfly_bar');
          unsafeWindow.close_bar();
          return;
        }
        var a = h.indexOf('!HiTommy'), b = '';
        if (a >= 0) {
          h = h.substring(0, a);
        }
        a = '';
        for (var i = 0; i < h.length; ++i) {
          if (i % 2 === 0) {
            a = a + h.charAt(i);
          } else {
            b = h.charAt(i) + b;
          }
        }
        h = window.atob(a + b);
        h = h.substr(2);
        if (window.location.hash) {
          h += window.location.hash;
        }
        go(h);
      },
    },

    // turboimagehost
    {
      rules: [
        {
          host: /turboimagehost\.com$/,
        },
      ],
      run: function () {
        var i = $('#imageid');
        go(i.src);
      },
    },

    // imagevenue
    {
      rules: [
        {
          host: /imagevenue\.com/,
        },
      ],
      run: function () {
        var o = window.document.querySelector('#interContainer');
        if (o) {
          o.style.display = 'none';
        }
        o = window.document.querySelector('#interVeil');
        if (o) {
          o.style.display = 'none';
        }
      },
    },

    // lnkco
    {
      rules: [
        {
          host: /^(rd?)lnk\.co$/,
        },
      ],
      run: function () {
        $removeNodes('iframe');

        var o = $_('#urlholder');
        if (o) {
          go(o.value);
          return;
        }

        o = $_('#skipBtn');
        if (o) {
          o = o.querySelector('a');
          go(o.href);
          return;
        }

        o = window.document.title.replace(/(LNK.co|Linkbee)\s*:\s*/, '');
        go(o);
      },
    },

    // zpag
    {
      rules: [
        {
          host: /zpag\.es/,
        },
      ],
      run: function () {
        var matches = window.document.querySelector('head').innerHTML;
        matches = matches.match(/window\.location\s*=\s*(['"])((?:\\\1|[^\1])*?)\1/);
        if (matches) {
          go(matches[2]);
        }
      },
    },

    // ichan
    {
      rules: [
        {
          host: /ichan\.org/,
        },
      ],
      run: function () {
        $$('a').each(function (a) {
          if (a.href.indexOf('/url/http://') > -1) {
            a.href = a.href.replace(/http:\/\/.+\/url\/(?=http:\/\/)/, '');
          }
        });
      },
    },

    // urlcash
    {
      rules: [
        {
          host: /urlcash\.(net|org)|(bat5|detonating|celebclk|eightteen|smilinglinks)\.com|looble\.net|xxxs\.org$/,
        },
      ],
      run: function () {
        if (unsafeWindow && unsafeWindow.linkDestUrl) {
          go(unsafeWindow.linkDestUrl);
          return;
        }

        var matches = window.document.body.innerHTML.match(/linkDestUrl = '(.+)'/);
        if (matches) {
          go(matches[1]);
        }
      },
    },

    // pushba
    {
      rules: [
        {
          host: /pushba\.com/,
        },
      ],
      run: function () {
        var o = $('#urlTextBox');
        go(o.value);
      },
    },

    // imgchili
    {
      rules: [
        {
          host: /imgchili\.(com|net)|www\.pixhost\.org/,
        },
      ],
      run: function () {
        var o = $('#show_image');
        go(o.src);
      },
    },

    // viidii
    {
      rules: [
        {
          host: /www\.viidii\.com/,
        },
      ],
      run: function () {
        var o = $('#directlink');
        go(o.href);
      },
    },

    // adfoc
    {
      rules: [
        {
          host: /adfoc\.us/,
        },
      ],
      run: function () {
        // FIXME mutation events has been deprecated, consider rewrite with
        // mutation observer
        window.document.addEventListener('DOMNodeInserted', function () {
          var o = window.document.querySelector('#showSkip');
          if (o) {
            o = o.querySelector('a');
            go(o.href);
          }
        }, null);
      },
    },

    // imagetwist
    {
      rules: [
        {
          host: /imagetwist\.com/,
        },
      ],
      run: function () {
        var o = $('img.pic');
        go(o.src);
      },
    },

    // imagecherry
    {
      rules: [
        {
          host: /imagecherry\.com|imgpo\.st|imagejumbo\.com/,
        },
      ],
      run: function () {
        var o = $('img.pic');
        // somehow the server send image as an attachment
        // so I replace whole document.body with single img
        $replaceBody(o.src);
      },
    },

    // madlink
    {
      rules: [
        {
          host: /madlink\.sk/,
          path: /\/(.+)/,
        },
      ],
      run: function (m) {
        $removeNodes('iframe');
        $post('/ajax/check_redirect.php', {
          link: m.path[1],
        }, function (text) {
          go(text);
        });
      },
    },

    // lnxlu
    {
      rules: [
        {
          host: /^lnx\.lu|url\.fm|z\.gs$/,
        },
      ],
      run: function () {
        var a = $('#clickbtn a');
        go(a.href);
      },
    },

    // adcrun
    {
      rules: [
        {
          host: /^adcrun\.ch|(youlinking|fly2url|urlsir|urlvisa|biaiai|raksoyun)\.com|(4ks|zpoz)\.net|tr5\.in|(wwy|mhz)\.me|ssl\.gs|link\.tl|bih\.cc|short\.pk|xip\.ir|www\.budurl\.ru$/,
        },
      ],
      run: function () {
        // prevent redirection by iframe
        $removeNodes('iframe');

        var content = $$('script').find(function (script) {
          return script.innerHTML.indexOf('make_log') >= 0;
        });
        var matches = content.innerHTML.match(/eval(.*)/);
        matches = matches[1];
        content = eval(matches);

        // inject AJAX into body
        matches = content.match(/\$.post\('([^']*)'[^{]+(\{opt:'make_log'[^}]+\}\}),/i);
        var url = matches[1];
        var opts = eval('(' + matches[2] + ')');
        function bc () {
          unsafeWindow.$.post(url, opts, function (text) {
            var jj = JSON.parse(text);
            if (jj.message) {
              go(jj.message.url);
            }
          });
        }
        unsafeWindow.bc = bc;
        content = 'setInterval(bc,1000);';
        matches = window.document.createElement('script');
        matches.textContent = content;
        window.document.body.appendChild(matches);
      },
    },

    // stash-coins.com
    {
      rules: [
        {
          host: /stash-coins\.com/,
        },
      ],
      run: function () {
        var url = window.location.toString();
        var i = url.lastIndexOf('http');
        url = url.substr(i);
        return url;
      },
    },

    // bc.vc, shortcut, dirty hack
    {
      rules: [
        {
          host: /bc\.vc/,
          query: /^.+(https?:\/\/.+)/,
        },
      ],
      run: function (m) {
        go(m.query[1]);
      },
    },

    // bc.vc, shortcut
    // FIXME may cut hash or query string
    {
      rules: [
        {
          host: /^bc\.vc$/,
          path: /^.+(https?:\/\/.+)$/,
        },
      ],
      run: function (m) {
        go(m.path[1]);
      },
    },

    // bc.vc
    {
      rules: [
        {
          host: /^bc\.vc$/,
        },
      ],
      run: function () {
        $removeNodes('iframe');

        var content = $$('script').find(function (script) {
          return script.innerHTML.indexOf('make_log') >= 0;
        });
        content = content.innerHTML;

        // inject AJAX into body
        var matches = content.match(/\$.post\('([^']*)'[^{]+(\{opt:'make_log'[^}]+\}\}),/i);
        var url = matches[1];
        var opts = eval('(' + matches[2] + ')');
        function bc () {
          unsafeWindow.$.post(url, opts, function (text) {
            var jj = JSON.parse(text);
            if (jj.message) {
              go(jj.message.url);
            }
          });
        }
        unsafeWindow.bc = bc;
        content = 'setInterval(bc,1000);';
        matches = window.document.createElement('script');
        matches.textContent = content;
        window.document.body.appendChild(matches);
      },
    },

    // mihalism v1
    {
      rules: [
        {
          host: /(pornpicuploader|imagepremium|hentai-hosting|gallery\.jpavgod)\.com|freeuploadimages\.org|shareimage\.ro/,
        },
      ],
      run: function () {
        var uri = window.location.href.toString();
        uri = uri.replace('viewer.php?file=', 'images/');
        go(uri);
      },
    },

    // mihalism v2
    {
      rules: [
        {
          host: /jpdown\.info/,
        },
        {
          host: /image69\.us/,
          path: /\/x\/.+/,
        },

      ],
      run: function () {
        // for jpdown.info
        $removeNodes('#divExoLayerWrapper, #fadeinbox');

        var a = $('#page_body a');
        go(a.href);
      },
    },

    // mihalism v3
    {
      rules: [
        {
          host: /gzvd\.info|hentaita\.com|howtohemorrhoidscure\.com/,
        },
      ],
      run: function () {
        var a = $('#page_body a');
        var s = a.href;
        // the real link is diffirent from original host
        a = s.lastIndexOf('http://');
        if (a >= 0) {
          go(s.substr(a));
        }
      },
    },

    // image69
    {
      rules: [
        {
          host: /image69\.us/,
        },
      ],
      run: function (m) {
        var a = $('#page_body .text_align_center a');
        var s = a.href;
        // the real link does not immediately appears after http://
        a = s.lastIndexOf(m.host[0]);
        go('http://' + s.substr(a));
      },
    },

    // preview.jpavgod.com
    {
      rules: [
        {
          host: /preview\.jpavgod\.com/,
        },
      ],
      run: function () {
        var i = $('#page_body div.text_align_center img');
        go(i.src);
      },
    },

    // imgonion
    // FEATURE: continue to image link, POST same URL
    {
      rules: [
        {
          host: /(img(onion|rill|money|woot|corn)|image(corn|picsa)|www\.imagefolks)\.com|img(candy|tube)\.net|imgcloud\.co|pixup\.us/,
        },
      ],
      run: function () {
        var node = window.document.querySelector('#continuetoimage > form input');
        if (node) {
          // first pass
          node.click();
          return;
        }

        // second pass
        var o = $('#container img[alt="image"]');
        go(o.src);
      },
    },

    // adf.my.id
    {
      rules: [
        {
          host: /adf\.my\.id|riurl\.com/,
        },
      ],
      run: function () {
        var s = $_('body script');
        if (s) {
          s = s.innerHTML.indexOf('window.location.replace');
          if (s >= 0) {
            // let inline script redirect
            return;
          }
        }
        $postAndGo('', {
          hidden: '1',
          image: ' ',
        });
      },
    },

    // chevereto
    {
      rules: [
        {
          host: /www\.4owl\.info|javelite\.tk/,
        },
      ],
      run: function () {
        var i = $('table img');
        go(i.src);
      },
    },

    // imgdino.com
    {
      rules: [
        {
          host: /img(dino|tiger)\.com/,
        },
      ],
      run: function () {
        var o = $('#cursor_lupa');
        go(o.src);
      },
    },

    // CF Image Host
    {
      rules: [
        {
          host: /www\.imgjav\.tk|imgurban\.info/,
        },
      ],
      run: function () {
        var a = $('div.img_box a');
        go(a.href);
      },
    },

    // directupload.net
    {
      rules: [
        {
          host: /.+\.directupload\.net/,
        },
      ],
      run: function () {
        var i = $('#showimage');
        go(i.src);
      },
    },

    // picfox.org
    {
      rules: [
        {
          host: /(picfox|amateurfreak)\.org/,
        },
      ],
      run: function () {
        var o = $('#iimg');
        go(o.src);
      },
    },

    // pixhub.eu
    {
      rules: [
        {
          host: /pixhub\.eu/,
        },
      ],
      run: function () {
        $removeNodes('.adultpage, #FFN_Banner_Holder');
        $enableScrolling();
      },
    },

    // reklama
    {
      rules: [
        {
          host: /(imagedecode|zonezeedimage|zeljeimage|ligasampiona|hosterbin|croftimage)\.com|(comicalpic|image\.torrentjav|imgserve)\.net/,
        },
      ],
      run: function () {
        var o = $('#container img[class^=centred]');
        go(o.src);
      },
    },

    // imgah.com
    {
      rules: [
        {
          host: /imgah\.com/,
        },
      ],
      run: function () {
        // first stage
        var o = window.document.querySelector('input[type=submit]');
        if (o) {
          o.click();
          return;
        }

        // second stage
        o = $('img.pic');
        $replaceBody(o.src);
      },
    },

    // imagebam.com
    {
      rules: [
        {
          host: /www\.imagebam\.com/,
        },
      ],
      run: function () {
        var o = $('#imageContainer img[id]');
        // somehow the server send image as an attachment
        // so I replace whole document.body with single img
        $replaceBody(o.src);
      },
    },

    // imgbar.net
    // second stage
    {
      rules: [
        {
          host: /imgbar\.net/,
          path: /\/img_show\.php/,
        },
      ],
      run: function () {
        var i = $('a.pic1 img');
        go(i.src);
      },
    },

    // imgbar.net
    // first stage
    {
      rules: [
        {
          host: /imgbar\.net/,
        },
      ],
      run: function () {
        var i = $('div.panel.top form input[name=sid]');
        go('/img_show.php?view_id=' + i.value);
      },
    },

    // abload.de
    {
      rules: [
        {
          host: /^(.+\.)?abload\.de|fastpic\.ru|funkyimg\.com$/,
        },
      ],
      run: function () {
        var i = $('#image');
        go(i.src);
      },
    },

    // www.sexyimg.com
    {
      rules: [
        {
          host: /www\.sexyimg\.com/,
          path: /\/s\/.*\.html/,
        },
      ],
      run: function () {
        var a = $('#imgbox a.divclick');
        go(a.href);
      },
    },

    // www.sexyimg.com
    {
      rules: [
        {
          host: /www\.sexyimg\.com/,
          path: /\/b\/.*\.html/,
        },
      ],
      run: function () {
        var i = $('#imgbox img.bigimg');
        $replaceBody(i.src);
      },
    },

    // pics-money.ru
    {
      rules: [
        {
          host: /pics-money\.ru$/,
          path: /^\/v\.php/,
        },
      ],
      run: function () {
        $removeNodes('iframe');

        var i = $('center img:not([id])');
        go(i.src);
      },
    },

    // www.pics-money.ru
    {
      rules: [
        {
          host: /\.pics-money\.ru$/,
        },
      ],
      run: function () {
        $removeNodes('iframe');

        var i = $('#d1 img');
        i = i.onclick.toString();
        i = i.match(/mshow\('(.+)'\)/);
        i = i[1];
        go(i);
      },
    },

    // imgwiev.tk
    {
      rules: [
        {
          host: /imgwiev\.tk/,
          query: /\?pm=(.+)/,
        },
      ],
      run: function (m) {
        go('/image.php?di=' + m.query[1]);
      },
    },

    // goimagehost.com
    {
      rules: [
        {
          host: /goimagehost\.com/,
          path: /\/xxx\/(.+)/,
        },
      ],
      run: function (m) {
        go('/xxx/images/' + m.path[1]);
      },
    },

    // www.hostpics.info
    {
      rules: [
        {
          host: /www\.hostpics\.info/,
          query: /\?filename=(.+)/,
        },
      ],
      run: function (m) {
        go('/images/' + m.query[1]);
      },
    },

    // imagescream.com
    {
      rules: [
        {
          host: /imagescream\.com/,
        },
      ],
      run: function () {
        var i = $('#shortURL-content img');
        go(i.src);
      },
    },

    // imgfantasy.com
    {
      rules: [
        {
          host: /imgfantasy\.com/,
        },
      ],
      run: function () {
        var i = $('#container-home img');
        go(i.src);
      },
    },

    // www.imgnip.com
    {
      rules: [
        {
          host: /www\.imgnip\.com/,
        },
      ],
      run: function () {
        var i = $('#main_image');
        go(i.src);
      },
    },

    // www.x45x.info
    {
      rules: [
        {
          host: /www\.x45x\.info/,
        },
      ],
      run: function () {
        var a = $('#content a.lightbox');
        go(a.href);
      },
    },

    // www.h-animes.info
    {
      rules: [
        {
          host: /www\.(h-animes|adultmove)\.info/,
        },
      ],
      run: function () {
        var a = $('.dlbutton2 > a');
        go(a.href);
      },
    },

    // imgpony.com
    {
      rules: [
        {
          host: /img(pony|trick)\.com/,
          query: /\?img=(.+)/,
        },
      ],
      run: function (m) {
        go('/images/' + m.query[1]);
      },
    },

    // 1be.biz
    {
      rules: [
        {
          host: /1be\.biz/,
          query: /\?(.+)/,
        },
      ],
      run: function (m) {
        go(m.query[1]);
      },
    },

    // qrrro.com
    {
      rules: [
        {
          host: /qrrro\.com/,
          path: /^(\/images\/.+)\.html$/,
        },
      ],
      run: function (m) {
        go(m.path[1]);
      },
    },

    // pic-upload.de
    {
      rules: [
        {
          host: /www\.pic-upload\.de/,
        },
      ],
      run: function () {
        var i = $('#content + img');
        go(i.src);
      },
    },

    // bilder-hochladen.net
    {
      rules: [
        {
          host: /www\.bilder-hochladen\.net/,
        },
      ],
      run: function () {
        var i = $('td > img');
        go(i.src);
      },
    },

    // imageback.info
    {
      rules: [
        {
          host: /image(back|pong)\.info/,
        },
      ],
      run: function () {
        $removeNodes('#popupOverlay, #divExoLayerWrapper');
        var a = $('div.span7 a');
        go(a.href);
      },
    },

    // bayimg.com
    {
      rules: [
        {
          host: /^bayimg\.com$/,
        },
      ],
      run: function () {
        var i = $('#mainImage');
        go(i.src);
      },
    },

    // www.bild.me
    {
      rules: [
        {
          host: /^www\.bild\.me$/,
        },
      ],
      run: function () {
        var i = $('#Bild');
        go(i.src);
      },
    },

    // www.bilder-upload.eu
    {
      rules: [
        {
          host: /^www\.bilder-upload\.eu$/,
        },
      ],
      run: function () {
        var i = $('input[type=image]');
        go(i.src);
      },
    },

    // bildr.no
    {
      rules: [
        {
          host: /^bildr\.no$/,
        },
      ],
      run: function () {
        var i = $('img.bilde');
        go(i.src);
      },
    },

    // imagearn.com
    {
      rules: [
        {
          host: /^imagearn\.com$/,
        },
      ],
      run: function () {
        var i = $('#img');
        go(i.src);
      },
    },

    // tinypic.com
    {
      rules: [
        {
          host: /^tinypic\.com$/,
        },
      ],
      run: function () {
        var i = $('#imgElement');
        go(i.src);
      },
    },

    // coinurl
    {
      rules: [
        {
          host: /^coinurl\.com|cur\.lv$/,
        },
      ],
      run: function () {
        var a = $('#skip-ad');
        go(a.href);
      },
    },

    // adlock
    {
      rules: [
        {
          host: /^adlock\.in$/,
        },
      ],
      run: function () {
        var a = $_('#xre a.xxr');
        if (a) {
          go(a.href);
          return;
        }

        a = unsafeWindow.fileLocation;
        if (a) {
          go(a);
        }
      },
    },

    // p.pw
    {
      rules: [
        {
          host: /^p\.pw$/,
        },
      ],
      run: function () {
        $removeNodes('iframe');

        var url = null;
        $$('script').find(function (script) {
          var m = script.innerHTML.match(/window\.location = "(.*)";/);
          if (m) {
            url = m[1];
            return true;
          }
        });

        go(url);
      },
    },

    // 3ra.be
    {
      rules: [
        {
          host: /^3ra\.be$/,
        },
      ],
      run: function () {
        $removeNodes('iframe');

        var f = unsafeWindow.fc;
        if (!f) {
          throw new NoPicAdsError('window.fc is undefined');
        }
        f = f.toString();
        f = f.match(/href="([^"]*)/);
        if (!f) {
          throw new NoPicAdsError('url pattern outdated');
        }
        go(f[1]);
      },
    },

    // bilurl
    {
      rules: [
        {
          host: /^bilurl\.com$/,
        },
      ],
      run: function () {
        var d = $('#event');
        go(d.getAttribute('rel'));
      },
    },

    // ref.so
    {
      rules: [
        {
          host: /^ref\.so$/,
        },
      ],
      run: function () {
        $removeNodes('iframe');
        var a = $('#btn_open a');
        go(a.href);
      },
    },

    // adv.li
    {
      rules: [
        {
          host: /adv\.li$/,
        },
      ],
      run: function () {
        $removeNodes('iframe');
        go(unsafeWindow._url);
      },
    },

    // cf.ly
    {
      rules: [
        {
          host: /^cf\.ly$/,
          path: /^\/[^\/]+$/,
        },
      ],
      run: function (m) {
        $removeNodes('iframe');
        go('/skip' + m.path[0]);
      },
    },

    // seomafia.net
    {
      rules: [
        {
          host: /^seomafia\.net$/,
        },
      ],
      run: function () {
        $removeNodes('iframe');
        var a = $('table a');
        go(a.href);
      },
    },

    // 4fun.tw
    {
      rules: [
        {
          host: /^4fun\.tw$/,
        },
      ],
      run: function () {
        var i = $('#original_url');
        go(i.value);
      },
    },

    // imagesnake.com, first stage
    {
      rules: [
        {
          host: /\.imagesnake\.com$/,
          path: /^\/index\.php$/,
          query: /^\?/,
        },
      ],
      run: function () {
        var a = $('#tablewraper a:nth-child(2)');
        go(a.href);
      },
    },

    // imagesnake.com, second stage
    {
      rules: [
        {
          host: /\.(imagesnake|freebunker)\.com$/,
          path: /^\/show/,
        },
      ],
      run: function () {
        unsafeWindow.onbeforeunload = null;
        var i = $('#img_obj');
        go(i.src);
      },
    },

    // imgbabes.com
    {
      rules: [
        {
          host: /\.imgbabes\.com$/,
        },
      ],
      run: function () {
        var i = $('#this_image');
        $replaceBody(i.src);
        $enableScrolling();
      },
    },

    // ulmt.in
    {
      rules: [
        {
          host: /^ulmt\.in$/,
        },
      ],
      run: function () {
        var s = unsafeWindow.CountdownTimer.toString();
        s = s.match(/href="([^"]+)"/);
        if (!s) {
          throw new NoPicAdsError('function changed');
        }
        go(s[1]);
      },
    },

    // cl.my
    {
      rules: [
        {
          host: /^cl\.my$/,
        },
      ],
      run: function () {
        unsafeWindow.document.body.onload = null;
        unsafeWindow.document.body.onunload = null;

        var content = $$('script').find(function (script) {
          return script.innerHTML.indexOf('callAjax') >= 0;
        });
        var matches = content.innerHTML.match(/'id': '([^']+)'/);
        content = matches[1];

        unsafeWindow.$.post('get_security_status.html', {
          context: 'url',
          cmd: 'chk',
          id: content,
        }, function (data) {
          go(data.data.u);
        }, 'json');
      },
    },

    // yfrog
    {
      rules: [
        {
          host: /\.yfrog\.com$/,
        },
      ],
      run: function () {
        if (/^\/z/.test(window.location.pathname)) {
          var i = $('#the-image img');
          go(i.src);
        }
        var a = $_('#continue-link a, #main_image');
        if (a) {
          go('/z' + window.location.pathname);
        }
      },
    },

    // dumppix
    {
      rules: [
        {
          host: /^www\.dumppix\.com$/,
        },
      ],
      run: function () {
        var i = $_('#boring');
        if (i) {
          go(i.src);
          return;
        }
        i = $('table td:nth-child(1) a');
        go(i.href);
      },
    },

    // subirimagenes
    {
      rules: [
        {
          host: /^www\.subirimagenes\.com$/,
        },
      ],
      run: function () {
        var i = $('#ImagenVisualizada');
        go(i.src);
      },
    },

    // screenlist
    {
      rules: [
        {
          host: /^screenlist\.ru$/,
        },
      ],
      run: function () {
        var i = $('#picture');
        go(i.src);
      },
    },

    // ibunker
    {
      rules: [
        {
          host: /^ibunker\.us$/,
        },
      ],
      run: function () {
        var i = $('#picture');
        // FIXME somehow the mime type is text/html
        $replaceBody(i.src);
      },
    },

    // freeporndumpster
    {
      rules: [
        {
          host: /^www\.freeporndumpster\.com$/,
        },
      ],
      run: function () {
        var i = $('#thepic');
        go(i.src);
      },
    },

    // hotimg
    {
      rules: [
        {
          host: /^www\.hotimg\.com$/,
          path: /\/image(\/.*)/,
        },
      ],
      run: function (m) {
        go('/direct' + m.path[1]);
      },
    },

    // lienscash
    {
      rules: [
        {
          host: /^www\.lienscash\.com$/,
        },
      ],
      run: function () {
        $removeNodes('iframe');

        var a = $('#time a');
        go(a.id);
      },
    },

  ];


  function find (uri) {
    var matched = {};
    var pattern = $C(patterns).find(function (pattern) {
      var rule = $C(pattern.rules).find(function (rule) {
        var tmp = $C(rule).all(function (pattern, part) {
          matched[part] = uri[part].match(pattern);
          return !!matched[part];
        });
        if (!tmp) {
          matched = {};
        }
        return tmp;
      });
      return !!rule;
    });
    if (!pattern) {
      return null;
    }
    return $P(pattern.run, matched);
  }


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
    $disableWindowOpen();
    window.document.addEventListener('DOMContentLoaded', handler);
  }

}


if (typeof window === 'undefined') {
  module.exports = function (window, unsafeWindow) {
    return function (go) {
      wrap(window, unsafeWindow, go);
    };
  };
} else {
  var NoPicAds = $P(wrap, window, unsafeWindow);
  NoPicAds(function (to) {
    if (!to) {
      $warn('false URL');
      return;
    }
    var from = window.location.toString();
    $info($T('{0} -> {1}', from, to));
    window.top.location.replace(to);
  });
}

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
