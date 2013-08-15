it('croftimage.com', 'http://croftimage.com/img-52097c35ccef4.html', function (test) {
  test.assertEquals(this.getCurrentUrl(), 'http://croftimage.com/upload/big/2013/08/13/52097c35cceb4.jpg');
});

it('imagedecode.com', 'http://imagedecode.com/img-52097cf165da1.html', function (test) {
  test.assertEquals(this.getCurrentUrl(), 'http://imagedecode.com/upload/big/2013/08/13/52097cf165d64.jpg');
});

it('imgserve.net', 'http://imgserve.net/img-52097d330e05a.html', function (test) {
  test.assertEquals(this.getCurrentUrl(), 'http://s4.imgserve.net/images/big/2013/08/13/52097d330e012.jpg');
});

it('zeljeimage.com', 'http://zeljeimage.com/img-52097d593d017.html', function (test) {
  test.assertEquals(this.getCurrentUrl(), 'http://zeljeimage.com/upload/big/2013/08/13/52097d593cfdc.jpg');
});

it('zonezeedimage.com', 'http://zonezeedimage.com/img-52097d5eefdb3.html', function (test) {
  test.assertEquals(this.getCurrentUrl(), 'http://zonezeedimage.com/upload/big/2013/08/13/52097d5eefd77.jpg');
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
