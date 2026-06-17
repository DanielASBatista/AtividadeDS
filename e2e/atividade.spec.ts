import { test, expect } from '@playwright/test';

const MEU_RM   = '251376'
const BASE_URL = 'https://prova.carvalho.cc';

test('submissão completa da prova', async ({ browser }) => {
  const context = await browser.newContext({
    extraHTTPHeaders: { 'x-exam-student-id': MEU_RM },
  });
  const page = await context.newPage();

  await page.goto(BASE_URL);

  // Dry-run banner should NOT appear
  await expect(page.locator('#dry-run-banner')).not.toBeVisible();

  // escreva o teste a partir daqui

await page.getByLabel("Número de Matrícula").click();

await page.fill("#student-id","251376")

await page.getByLabel("Nome Completo").click();

await page.fill("#student-name", "Daniel Alves dos Santos Batista")

await page.getByLabel("URL do Repositório").click();

await page.fill("#repo-url", "https://github.com/DanielASBatista/AtividadeDS")

await page.getByRole('button', { name: 'Iniciar Prova' }).click();

await page.getByRole('radio', { name: 'Don\'t Repeat Yourself — evite' }).click();

await page.getByRole('button', { name: 'Próxima' }).click();

await page.getByRole('radio', { name: 'Testa um único'}).click();

await page.getByRole('button', { name: 'Próxima' }).click();

await page.getByRole('radio', { name: 'Testes unitários'}).click();

await page.getByRole('button', { name: 'Próxima' }).click();

await page.getByRole('radio', { name: 'A porcentagem'}).click();

await page.getByRole('button', { name: 'Próxima' }).click();

await page.getByRole('radio', { name: 'Quantas vezes'}).click();

await page.getByRole('button', { name: 'Próxima' }).click();

await page.getByRole('radio', { name: 'Teste de integração'}).click();

await page.getByRole('button', { name: 'Próxima' }).click();

await page.getByRole('radio', { name: 'Executa uma fun'}).click();

await page.getByRole('button', { name: 'Próxima' }).click();

await page.getByRole('radio', { name: 'Uma t'}).click();

await page.getByRole('button', { name: 'Próxima' }).click();

await page.getByRole('radio', { name: 'Uma função q'}).click();

await page.getByRole('button', { name: 'Próxima' }).click();

await page.getByRole('radio', { name: 'Executar'}).click();

await page.getByRole('button', { name: 'Próxima' }).click();

await page.getByRole('radio', { name: 'Para manter o teste'}).click();

await page.getByRole('button', { name: 'Próxima' }).click();

await page.getByRole('radio', { name: 'Porque são os mais caros'}).click();

await page.getByRole('button', { name: 'Próxima' }).click();

await page.getByRole('radio', { name: 'Incluir na lista'}).click();

await page.getByRole('button', { name: 'Próxima' }).click();

await page.getByRole('radio', { name: 'Os serviços podem'}).click();

await page.getByRole('button', { name: 'Próxima' }).click();

await page.getByRole('radio', { name: 'Um conjunto de'}).click();

await page.getByRole('button', { name: 'Próxima' }).click();

await page.getByRole('radio', { name: 'Os testes devem ser simples'}).click();

await page.getByRole('button', {name: 'Enviar'}).click();
});