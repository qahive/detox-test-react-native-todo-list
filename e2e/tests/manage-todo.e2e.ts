it('Add new todo item', async () => {
  await element(by.type('RCTUITextField')).typeText('My todo item');
  await element(by.id('add-new-task-button')).tap();
});
