import { expect, } from '@playwright/test'
import { electronTest } from './electronTest';
import { saveScreenshotOnFailure } from './utils';

electronTest.afterEach(saveScreenshotOnFailure('basic'))

electronTest("Window has correct title", async ({
  page
}) => {
  const title = await page.title();
  expect(title).toBe("React + TS");
})