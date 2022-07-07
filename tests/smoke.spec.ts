import { test, expect } from '@playwright/test';

test('logo alt text test', async ({ page }) =>
{
    await page.goto('https://prodriver.com/');
    const alt = await page.getAttribute('#logo > img', 'alt');
    expect(alt).toBe('TVC Pro-Driver');
});    