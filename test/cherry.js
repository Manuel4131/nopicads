it('imagecherry.com', 'http://imagecherry.com/8lkv7216tcqb', function (test) {
  var s = this.getElementAttribute('img', 'src');
  test.assertMatch(s, /51_krss1111\.jpg$/);
});

it('imgpo.st', 'http://imgpo.st/w2a30jh17r1f', function (test) {
  var s = this.getElementAttribute('img', 'src');
  test.assertMatch(s, /51_krss1111\.jpg$/);
});

// vim: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
