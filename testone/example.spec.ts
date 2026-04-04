import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('has title and basic navigation', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link clicks and navigates', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});



test.describe('To-Do Application Tests', () => {
  test('should add a new item to the list', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');

    // Select the input field
    const todoInput = page.getByPlaceholder('What needs to be done?');

    // Type a new task and press Enter
    await todoInput.fill('Buy almond milk');
    await todoInput.press('Enter');

    // Verify the item was added
    const firstTodo = page.getByTestId('todo-item');
    await expect(firstTodo).toHaveText('Buy almond milk');
    
    // Check it off
    await firstTodo.getByRole('checkbox').check();
    await expect(firstTodo).toHaveClass(/completed/);
  });
});