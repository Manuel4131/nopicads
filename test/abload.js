it('abload.de', 'http://abload.de/image.php?img=51_krss1111ikah3.jpg', function (test) {
  test.assertEquals(this.getCurrentUrl(), 'http://www.abload.de/img/51_krss1111ikah3.jpg');
});

// vim: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
