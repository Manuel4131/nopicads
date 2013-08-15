it('adf.ly', 'http://adf.ly/TnRQV', function (test) {
  test.assertEquals(this.getCurrentUrl(), 'http://userscripts.org/');
});

it('j.gs', 'http://j.gs/2Hoi', function (test) {
  test.assertUrlMatch(/^http:\/\/paperpenpolaroid\.blogspot\.\w+\/2011\/10\/all-hallows-eve\.html/);
});

it('q.gs', 'http://q.gs/4c61s', function (test) {
  test.assertEquals(this.getCurrentUrl(), 'http://www.sockshare.com/file/553451E2DF356BA8');
});

it('go.phpnulledscripts.com', 'http://go.phpnulledscripts.com/B', function (test) {
  test.assertEquals(this.getCurrentUrl(), 'http://advertisingg.com/');
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
