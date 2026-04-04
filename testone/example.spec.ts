import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('Simple Get Request ', async ({ request }) => {
   const response = await request.get('https://conduit-api.bondaracademy.com/api/tags')
   const data = await response.json()
   console.log(data)
   expect(data.tags[0]).toEqual('Test')
});



