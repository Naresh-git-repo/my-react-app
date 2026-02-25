const { test, expect } = require('@playwright/test');

test('homepage loads and shows heading', async ({ page }) => {

  // Open local React app
  await page.goto('http://localhost:3000');

  // Verify heading text
  await expect(page.getByText('DevOps CI/CD Practice Project')).toBeVisible();

  // Verify second text
  await expect(page.getByText('Build Stage Testing')).toBeVisible();

});