// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('E2E_APP', () => {
  test('First Load Snapshot', async ({ page }) => {
    await page.goto('localhost:3000');
    expect(await page.screenshot()).toMatchSnapshot('landing.png');
  });
});
