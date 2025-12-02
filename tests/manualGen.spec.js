import { test, expect } from "@playwright/test";

test("Verify login feature", async ({ page }) => {
  await page.pause();
  await page.goto("https://the-internet.herokuapp.com/login");
  //   await page.locator("input#username").click;
  //   await page.locator("//input[#'username']").click;
  await page.locator("input#username").click();
  await page.locator("input#username").fill("tomsmith");

  await page.locator("input#password").click();
  await page.locator("input#password").fill("SuperSecretPassword!");

  await page.getByRole("button", { type: "submit" }).click();

  await expect(
    page.getByText(
      "Welcome to the Secure Area. When you are done click logout below."
    )
  ).toBeVisible();

  await expect(
    page.locator("//div[@id='content']//a[@href='/logout']")
  ).toBeVisible();

  await page.pause();
});
