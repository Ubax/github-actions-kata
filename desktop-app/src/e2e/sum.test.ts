import { expect } from '@playwright/test'
import { electronTest } from './electronTest';
import { saveScreenshotOnFailure } from './utils';

electronTest.afterEach(saveScreenshotOnFailure('sum'))

electronTest("With no numbers the result is 0", async ({ page }) => {
    const result = await page.getByTestId("result")
    expect(await result.innerText()).toBe("1")
})

electronTest("With only first number changed returns first number", async ({ page }) => {
    const aInput = await (await page.getByTestId("number-a")).locator("input");
    await aInput.fill("3")
    const result = await page.getByTestId("result")
    expect(await result.innerText()).toBe("3")
});

electronTest("With both numbers changed returns sum", async ({ page }) => {
    const aInput = await (await page.getByTestId("number-a")).locator("input");
    const bInput = await (await page.getByTestId("number-b")).locator("input");
    const a = 2.541, b = -0.45;
    await aInput.fill(String(a))
    await bInput.fill(String(b))
    const result = await page.getByTestId("result")
    expect(await result.innerText()).toBe(String(a + b))
})