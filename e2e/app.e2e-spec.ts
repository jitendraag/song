import { SongPage } from './app.po';

describe('song App', function() {
  let page: SongPage;

  beforeEach(() => {
    page = new SongPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
