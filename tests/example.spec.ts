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

test('C14104100: Should display the mega navigation @smoke @sanity', async ({ page }) => {
  await page.goto('https://stage.lululemon.com/team-canada');
  await expect(page.locator("[class*='mainNav']")).toBeVisible();
});

test('C14104101: Should display the team canada hero banner header @smoke @sanity', async ({ page }) => {
  await page.goto('https://stage.lululemon.com/team-canada');
  await expect(page.locator("[class*='team-canada-hero-banner_bannerContainer'] h1")).toBeVisible();
});

test('C14104102: Should display the team canada hero banner icon group @smoke @sanity', async ({ page }) => {
  await page.goto('https://stage.lululemon.com/team-canada');
  await expect(page.locator("[class*='team-canada-hero-banner_iconGroup']")).toBeVisible();
});

test('C14104103: Should have a footer section @smoke @sanity', async ({ page }) => {
  await page.goto('https://stage.lululemon.com/team-canada');
  await expect(page.locator("div#footer")).toBeVisible();
});

test('C14104104: Should have social media links in the footer @smoke @sanity', async ({ page }) => {
  await page.goto('https://stage.lululemon.com/team-canada');
  await expect(page.locator("[class*='socialMenu'] a")).toBeVisible();
});
