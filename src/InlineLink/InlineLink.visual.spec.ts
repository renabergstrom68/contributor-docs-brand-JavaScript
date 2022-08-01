/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: InlineLink', () => {
  test('Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-inlinelink--default&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Scale', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-inlinelink--scale&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Example', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-inlinelink--example&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Size Inheritence', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-inlinelink--size-inheritence&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })
})