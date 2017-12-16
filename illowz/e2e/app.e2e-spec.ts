import { IllowzPage } from './app.po';

describe('illowz App', () => {
  let page: IllowzPage;

  beforeEach(() => {
    page = new IllowzPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
