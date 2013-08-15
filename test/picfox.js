it('amateurfreak.org', 'http://amateurfreak.org/share-95E1_520F148E.html', function (test) {
  test.assertEquals(this.getCurrentUrl(), 'http://amateurfreak.org/image-95E1_520F148E.jpg');
});

it('picfox.org', 'http://picfox.org/share-56FE_520EF80E.html', function (test) {
  test.assertEquals(this.getCurrentUrl(), 'http://picfox.org/image-56FE_520EF80E.jpg');
});

// vim: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
