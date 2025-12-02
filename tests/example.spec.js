// @ts-check
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // await page.pause();

  await page.getByRole("img", { name: "Browsers (Chromium, Firefox," }).click();
  await page.getByRole("link", { name: "Python" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Discord server" }).click();
  const page1 = await page1Promise;
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();

  // await page.pause();
});
