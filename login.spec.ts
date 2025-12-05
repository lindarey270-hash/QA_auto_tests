import { test, expect } from '@playwright/test';

test('Вход в УСПД с логином root/root', async ({ page }) => {
  // 1. Открываем страницу входа
  await page.goto('http://192.168.225.1');

  // 2. Ждём появления формы входа
  await expect(page.locator('#login')).toBeVisible();

  // 3. Вводим логин
  await page.fill('#login input', 'root');

  // 4. Вводим пароль
  await page.fill('#password input', 'root');

  // 5. Нажимаем кнопку "ОК"
  await page.click('//*[@id="main"]/div/div[1]/div/div[2]/button[2]');

  // 6. Ждём появления надписи "Меню" — это подтверждает успешный вход
  await expect(page.locator('div.header >> text=Меню')).toBeVisible({ timeout: 10_000 });

  // 7. Опционально: задержка на 2 секунды, чтобы увидеть главное меню (только для headed-режима)
  if (!process.env.CI) {
    await page.waitForTimeout(5000); // 2 секунды
  }
});