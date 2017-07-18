import { LeePage } from './app.po';

describe('lee App', () => {
  let page: LeePage;

  beforeEach(() => {
    page = new LeePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
