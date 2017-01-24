import { TutorialSPAPage } from './app.po';

describe('tutorial-spa App', function() {
  let page: TutorialSPAPage;

  beforeEach(() => {
    page = new TutorialSPAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
