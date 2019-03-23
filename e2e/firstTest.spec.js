/* eslint-disable no-undef */
describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toNotExist();
    await element(by.id('btn_show')).tap();
    await expect(element(by.id('welcome'))).toBeVisible();
    await element(by.id('btn_show')).tap();
    await expect(element(by.id('welcome'))).toNotExist();
  });
});
