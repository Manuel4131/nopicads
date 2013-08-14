var Browser = require('zombie');
var NoPicAds = require('../NoPicAds.user.js');
var assert = require('assert');


function browse (url, check, done) {
  var browser = new Browser({
    silent: true,
  });

  var chain = [url];

  browser.on('redirect', function (request, response) {
    if (request.url !== chain[chain.length-1]) {
      return;
    }
    chain.push(response.url);
  });

  var p = browser.visit(url);
  var tmp = NoPicAds(browser.window, browser.window);
  var lastError = null;

  function tryAndCatch (to) {
    try {
      check(browser, to);
    } catch (e) {
      lastError = e;
    }
  }
  function checkRedirect () {
    if (chain.length <= 1) {
      return;
    }
    tryAndCatch(chain[chain.length-1]);
  }
  function report () {
    if (lastError) {
      done(lastError);
    } else {
      done();
    }
  }

  tmp(function (to) {
    tryAndCatch(to);
  });
  p.then(checkRedirect, checkRedirect).done(report, report);
}


describe('NoPicAds', function () {
  this.timeout(10 * 1000);

  describe('adfly', function () {
    it('adf.ly', function (done) {
      browse('http://adf.ly/TnRQV', function (browser, to) {
        assert.strictEqual(to, 'http://www.userscript.org');
      }, done);
    });

    it('j.gs', function (done) {
      browse('http://j.gs/2Hoi', function (browser, to) {
        assert.strictEqual(to, 'http://paperpenpolaroid.blogspot.com/2011/10/all-hallows-eve.html#comment-form');
      }, done);
    });

    it('q.gs', function (done) {
      browse('http://q.gs/4c61s', function (browser, to) {
        assert.strictEqual(to, 'http://www.sockshare.com/file/553451E2DF356BA8');
      }, done);
    });

    it('go.phpnulledscripts.com', function (done) {
      browse('http://go.phpnulledscripts.com/B', function (browser, to) {
        assert.strictEqual(to, 'http://advertisingg.com/');
      }, done);
    });
  });

  describe('linksbuck', function () {
    it('allanalpass.com', function (done) {
      browse('http://427790d9.allanalpass.com/', function (browser, to) {
        assert.strictEqual(to, 'http://picstwist.com/img-50c5688106489.html');
      }, done);
    });

    it('amy.gs', function (done) {
      browse('http://a9a125f8.amy.gs/', function (browser, to) {
        assert.strictEqual(to, 'http://fleshasiadaily.com/category/2-korea-babes/');
      }, done);
    });

    it('any.gs', function (done) {
      browse('http://b744a794.any.gs/', function (browser, to) {
        assert.strictEqual(to, 'http://hlat.us/client');
      }, done);
    });

    it('deb.gs', function (done) {
      browse('http://9017f315.deb.gs/', function (browser, to) {
        assert.strictEqual(to, 'http://imgserve.net/img-519cc7afec42f.html');
      }, done);
    });

    it('drstickyfingers.com', function (done) {
      browse('http://8c767565.drstickyfingers.com/', function (browser, to) {
        assert.strictEqual(to, 'http://scriptkeys.com/set/?file=r23sy');
      }, done);
    });

    it('dyo.gs', function (done) {
      browse('http://2164a7b8.dyo.gs/', function (browser, to) {
        assert.strictEqual(to, 'http://adf.ly/DrppH');
      }, done);
    });

    it('fapoff.com', function (done) {
      browse('http://43ac87b6.fapoff.com/', function (browser, to) {
        assert.strictEqual(to, 'http://www.epicbate.biz/');
      }, done);
    });

    it('filesonthe.net', function (done) {
      browse('http://1364d624.filesonthe.net/', function (browser, to) {
        assert.strictEqual(to, 'http://cleanfiles.net/?sklBkGA');
      }, done);
    });

    it('freean.us', function (done) {
      browse('http://eef5411b.freean.us/', function (browser, to) {
        assert.strictEqual(to, 'http://pruebita4:prueba123@www.onepassforall.com/members/');
      }, done);
    });

    it('galleries.bz', function (done) {
      browse('http://32a570d5.galleries.bz/', function (browser, to) {
        assert.strictEqual(to, 'http://rapidgator.net/file/28403789/A2807-2.rar.html');
      }, done);
    });

    it('hornywood.tv', function (done) {
      browse('http://8d0efcb8.hornywood.tv/', function (browser, to) {
        assert.strictEqual(to, 'http://tny.cz/1515f7b7');
      }, done);
    });

    it('linkbabes.com', function (done) {
      browse('http://cf551d31.linkbabes.com/', function (browser, to) {
        assert.strictEqual(to, 'http://www.pass.gleemii.com/2013/03/qU3Ta.html');
      }, done);
    });

    it('linkbucks.com', function (done) {
      browse('http://9c148a77.linkbucks.com/', function (browser, to) {
        assert.strictEqual(to, 'http://filepost.com/files/acd85bec/');
      }, done);
    });

    it('linkgalleries.net', function (done) {
      browse('http://bfb3c7df.linkgalleries.net/', function (browser, to) {
        assert.strictEqual(to, 'http://rapidshare.com/files/185026374/Teenybopperclub-Lexi.Belle.rar');
      }, done);
    });

    it('linkseer.net', function (done) {
      browse('http://e7604231.linkseer.net/', function (browser, to) {
        assert.strictEqual(to, 'http://utorrent.com');
      }, done);
    });

    it('megaline.co', function (done) {
      browse('http://33b1ad22.megaline.co/url/http://go4up.com', function (browser, to) {
        assert.strictEqual(to, 'http://go4up.com');
      }, done);
    });

    it('miniurls.co', function (done) {
      browse('http://f35f9eaf.miniurls.co/', function (browser, to) {
        assert.strictEqual(to, 'http://filesdld.com/tools.html');
      }, done);
    });

    it('picbucks.com', function (done) {
      browse('http://2b987247.picbucks.com/', function (browser, to) {
        assert.strictEqual(to, 'http://data.whicdn.com/images/23791102/J3FDA_large.jpg');
      }, done);
    });

    it('picturesetc.net', function (done) {
      browse('http://d0630060.picturesetc.net/', function (browser, to) {
        assert.strictEqual(to, 'http://i27.tinypic.com/6puerk.jpg');
      }, done);
    });

    it('poontown.net', function (done) {
      browse('http://982eb0ff.poontown.net/', function (browser, to) {
        assert.strictEqual(to, 'http://pastebin.com/cw8KcsJy');
      }, done);
    });

    it('qqc.co', function (done) {
      browse('http://2d05eb2e.qqc.co/', function (browser, to) {
        assert.strictEqual(to, 'http://google.com');
      }, done);
    });

    it('qvvo.com', function (done) {
      browse('http://9dbcac58.qvvo.com/', function (browser, to) {
        assert.strictEqual(to, 'http://www.mediafire.com/download.php?44qzitlyiw1');
      }, done);
    });

    it('realfiles.net', function (done) {
      browse('http://751b1212.realfiles.net/', function (browser, to) {
        assert.strictEqual(to, 'http://uploading.com/files/I0SAMR89/GD-H.zip.html');
      }, done);
    });

    it('rqq.co', function (done) {
      browse('http://6acb81d4.rqq.co/', function (browser, to) {
        assert.strictEqual(to, 'http://tny.cz/f56c1d3b');
      }, done);
    });

    it('seriousdeals.net', function (done) {
      browse('http://43e0a002.seriousdeals.net/', function (browser, to) {
        assert.strictEqual(to, 'http://www.womanmenadore.net/?hop=mattract');
      }, done);
    });

    it('seriousurls.com', function (done) {
      browse('http://f42eeb05.seriousurls.com/', function (browser, to) {
        assert.strictEqual(to, 'http://tor-proxy.net');
      }, done);
    });

    it('sexpalace.gs', function (done) {
      browse('http://9d127e82.sexpalace.gs/', function (browser, to) {
        assert.strictEqual(to, 'http://www.freeones.ca');
      }, done);
    });

    it('theseblogs.com', function (done) {
      browse('http://c845da7e.theseblogs.com/', function (browser, to) {
        assert.strictEqual(to, 'http://ld.rtify.com/1322');
      }, done);
    });

    it('thesefiles.com', function (done) {
      browse('http://aba1057a.thesefiles.com/', function (browser, to) {
        assert.strictEqual(to, 'http://uploading.com/files/9ffb5b25/Betratr.part01.rar/');
      }, done);
    });

    it('theseforums.com', function (done) {
      browse('http://11d6b21a.theseforums.com/', function (browser, to) {
        assert.strictEqual(to, 'http://www.mediafire.com/?ngivbzb5buo5zzb');
      }, done);
    });

    it('thesegalleries.com', function (done) {
      browse('http://cb5688c5.thesegalleries.com/', function (browser, to) {
        assert.strictEqual(to, 'http://bbs.avadd.com/');
      }, done);
    });

    it('thosegalleries.com', function (done) {
      browse('http://68771fed.thosegalleries.com/', function (browser, to) {
        assert.strictEqual(to, 'http://linkturtle.com/l/10988');
      }, done);
    });

    it('tinybucks.net', function (done) {
      browse('http://ad1e52b5.tinybucks.net/', function (browser, to) {
        assert.strictEqual(to, 'http://www.google.com');
      }, done);
    });

    it('tinylinks.co', function (done) {
      browse('http://34c4598b.tinylinks.co/', function (browser, to) {
        assert.strictEqual(to, 'http://uploading.com/files/989f3392/MidCluLosAngPS3.part1.rar/');
      }, done);
    });

    it('tnabucks.com', function (done) {
      browse('http://1635104c.tnabucks.com/', function (browser, to) {
        assert.strictEqual(to, 'http://qip.ru/');
      }, done);
    });

    it('tubeviral.com', function (done) {
      browse('http://3ee8a8c0.tubeviral.com/', function (browser, to) {
        assert.strictEqual(to, 'http://www.points2shop.com/?ref=uin1364251416');
      }, done);
    });

    it('uberpicz.com', function (done) {
      browse('http://54075d12.uberpicz.com/', function (browser, to) {
        assert.strictEqual(to, 'http://www.easy-share.com/1903513601/GIANT_KILLING_Vol05_JP.zip');
      }, done);
    });

    it('ubervidz.com', function (done) {
      browse('http://ae8e6e3b.ubervidz.com/', function (browser, to) {
        assert.strictEqual(to, 'http://animoto.com/?ref=tolawbex');
      }, done);
    });

    it('ubucks.net', function (done) {
      browse('http://492aa39b.ubucks.net/', function (browser, to) {
        assert.strictEqual(to, 'http://www.mediafire.com/?yls4prsc5c3kt');
      }, done);
    });

    it('ugalleries.net', function (done) {
      browse('http://d0d8dfde.ugalleries.net/', function (browser, to) {
        assert.strictEqual(to, 'http://apps.facebook.com/amebapico/giftAccept?code=k8Ju7GBeH2fjB7P88tRV-uX2wD3GQuaLldlgDNt9KG0bhrl2q8HhkabFgHNecUq-11wBQ3859r9ITtvYBisgC3lTg5SrMfNpygVYeNofithwu3BQgzobWlDGgg-LjA0JccaP6QkC9eHMekXOG6t8X_Olmt3wduOpRFQXwytVHDb1To4F4Y2vk_tgxi05wF2Z&uid=100001445664490&kt_ut=55863954cdc44c0cadfa22948b6ea0dc&kt_type=ins');
      }, done);
    });

    it('ultrafiles.net', function (done) {
      browse('http://fdb6010f.ultrafiles.net/', function (browser, to) {
        assert.strictEqual(to, 'http://cleanfiles.net/?lZEk3KI');
      }, done);
    });

    it('urlbeat.net', function (done) {
      browse('http://61bc2b35.urlbeat.net/', function (browser, to) {
        assert.strictEqual(to, 'http://extabit.com/file/2dudcpvbjki6v/Alias.Janaki');
      }, done);
    });

    it('urlpulse.net', function (done) {
      browse('http://86495f68.urlpulse.net/', function (browser, to) {
        assert.strictEqual(to, 'http://www.youtube.com/watch?v=SOI4OF7iIr4');
      }, done);
    });

    it('whackyvidz.com', function (done) {
      browse('http://102ec597.whackyvidz.com/', function (browser, to) {
        assert.strictEqual(to, 'http://ld.rtify.com/1310');
      }, done);
    });

    it('youfap.me', function (done) {
      browse('http://8dcc56ee.youfap.me/', function (browser, to) {
        assert.strictEqual(to, 'http://image.swagirl.com/nsfw/gal.php?tag=self&disclamer=1');
      }, done);
    });

    it('yyv.co', function (done) {
      browse('http://5425e908.yyv.co/', function (browser, to) {
        assert.strictEqual(to, 'http://www.jobboy.com');
      }, done);
    });

    it('zff.co', function (done) {
      browse('http://f34a8022.zff.co/', function (browser, to) {
        assert.strictEqual(to, 'http://bit.ly/10F1yTf');
      }, done);
    });

    it('zxxo.net', function (done) {
      browse('http://a3d36855.zxxo.net/', function (browser, to) {
        assert.strictEqual(to, 'http://d5034362.zxxo.net');
      }, done);
    });
  });

  it('gallery.jpavgod.com', function (done) {
    browse('http://gallery.jpavgod.com/viewer.php?file=10313279045761679674.jpg', function (browser, to) {
      assert.strictEqual(to, 'http://gallery.jpavgod.com/images/10313279045761679674.jpg');
    }, done);
  });
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
