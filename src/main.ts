import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

type TemaPagina = 'light' | 'dark';

const botaoTema = document.querySelector<HTMLButtonElement>('#btnTema');
const elementoDataAtual = document.querySelector<HTMLParagraphElement>('#dataAtual');

function aplicarTema(tema: TemaPagina): void {
  document.documentElement.setAttribute('data-bs-theme', tema);

  if (botaoTema !== null) {
    botaoTema.textContent = tema === 'dark' ? 'Tema claro' : 'Tema escuro';
  }
}

function obterTemaAtual(): TemaPagina {
  const temaAtual = document.documentElement.getAttribute('data-bs-theme');

  if (temaAtual === 'dark') {
    return 'dark';
  }

  return 'light';
}

function alternarTema(): void {
  const temaAtual = obterTemaAtual();
  const novoTema: TemaPagina = temaAtual === 'dark' ? 'light' : 'dark';

  aplicarTema(novoTema);
}

function formatarDataAtual(data: Date): string {
  return data.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

function exibirDataAtual(): void {
  if (elementoDataAtual === null) {
    return;
  }

  const dataAtual = new Date();
  elementoDataAtual.textContent = `Hoje é ${formatarDataAtual(dataAtual)}.`;
}

botaoTema?.addEventListener('click', alternarTema);

aplicarTema('light');
exibirDataAtual();