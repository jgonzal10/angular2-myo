import { MyoPage } from './app.po';

describe('myo App', () => {
  let page: MyoPage;

  beforeEach(() => {
    page = new MyoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
