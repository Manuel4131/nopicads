it('imgjav.tk', 'http://www.imgjav.tk/?pm=FFHJ', function (test) {
  test.assertEquals(this.getCurrentUrl(), 'http://www.imgjav.tk/image.php?di=FFHJ');
});

it('imgurban.info', 'http://imgurban.info/?pm=A3XH', function (test) {
  test.assertEquals(this.getCurrentUrl(), 'http://imgurban.info/?di=A3XH');
});

// vim: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
