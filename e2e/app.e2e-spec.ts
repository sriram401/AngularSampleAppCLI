import { AngularSampleAppCLIPage } from './app.po';

describe('angular-sample-app-cli App', () => {
  let page: AngularSampleAppCLIPage;

  beforeEach(() => {
    page = new AngularSampleAppCLIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
