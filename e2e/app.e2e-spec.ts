import { MycomponentTestPage } from './app.po';

describe('mycomponent-test App', () => {
  let page: MycomponentTestPage;

  beforeEach(() => {
    page = new MycomponentTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
