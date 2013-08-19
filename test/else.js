it('funkyimg.com', 'http://funkyimg.com/viewer.php?img=/2/4886/128/91321351_krss1111.jpg', function (test) {
  test.assertEquals(this.getCurrentUrl(), 'http://funkyimg.com/i/C9wb.jpg');
});

it('imgbabes.com', 'http://www.imgbabes.com/34glnc0vftns', function (test) {
  var s = this.getElementAttribute('img', 'src');
  test.assertMatch(s, /oqt159pl\.jpg$/);
});

// vim: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
