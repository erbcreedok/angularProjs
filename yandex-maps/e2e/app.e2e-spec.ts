import { YandexMapsPage } from './app.po';

describe('yandex-maps App', () => {
  let page: YandexMapsPage;

  beforeEach(() => {
    page = new YandexMapsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
