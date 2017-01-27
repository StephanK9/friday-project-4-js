import { GroupChatPage } from './app.po';

describe('group-chat App', function() {
  let page: GroupChatPage;

  beforeEach(() => {
    page = new GroupChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
