import { HellovictorAppPage } from './app.po';

describe('hellovictor-app App', () => {
  let page: HellovictorAppPage;

  beforeEach(() => {
    page = new HellovictorAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hv works!');
  });
});
