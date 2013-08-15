function Matcher (filePath) {
  var include = [];
  var exclude = [];

  var fs = require('fs');
  var a = fs.read(filePath);
  var b = a.split('\n');
  b.forEach(function (c) {
    var d = c.match(/^\/\/\s*@(match|exclude)\s+(.+)$/);
    if (!d) {
      return;
    }
    var T = {
      '.': '\\.',
      '?': '\\?',
      '*': '.*',
    };
    var re = d[2].replace(/[.?*]/g, function (m) {
      return T[m];
    });
    re = new RegExp(re);
    if (d[1] === 'match') {
      include.push(re);
    } else if (d[1] === 'exclude') {
      exclude.push(re);
    } else {
      ;
    }
  });

  this._include = include;
  this._exclude = exclude;
}

Matcher.prototype.isExcluded = function (url) {
  return this._exclude.some(function (re) {
    return re.test(url);
  });
};

Matcher.prototype.isIncluded = function (url) {
  return this._include.some(function (re) {
    return re.test(url);
  });
};

Matcher.prototype.match = function (url) {
  return !this.isExcluded(url) && this.isIncluded(url);
};

var matcher = new Matcher('NoPicAds.user.js');

casper.options.onPageInitialized = function () {
  if (matcher.match(this.getCurrentUrl())) {
    this.evaluate(function () {
      this.unsafeWindow = window;
    });
    var s = this.page.injectJs('NoPicAds.user.js');
  }
};

var it = function (label, url, check) {
  casper.test.begin(label, function (test) {
    casper.start(url, function () {
      check.call(casper, test);
    }).run(function () {
      test.done();
    });
  });
};

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;