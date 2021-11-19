const btnCalcular = document.getElementById('calcular');

function calcularPoupanca() {
  const nome = document.getElementById('nome').value;
  const valorAplicado = document.getElementById('valorAplicado').value;
  const taxaJuros = document.getElementById('taxaJuros').value;
  const numParcelas = document.getElementById('numParcelas').value;

  const result = document.getElementById('resultado');
  const resultName = document.getElementById('resultName');
  const resultText = document.getElementById('resultText');

  if (
    nome !== '' &&
    valorAplicado !== '' &&
    taxaJuros !== '' &&
    numParcelas !== ''
  ) {
    const valorPoupado = (
      valorAplicado *
      (((1 + taxaJuros / 100) ** numParcelas - 1) / (taxaJuros / 100))
    ).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    resultadoName.textContent = `${nome},`;
    resultadoText.textContent = `Se você aplicar R$ ${valorAplicado}
    , à taxa de juros de ${taxaJuros}% ao mês, durante ${numParcelas} meses, acumulará uma poupança de R$ ${valorPoupado}`;
  } else {
    resultado.textContent =
      'Para o seu valor poupado, favor preencher todos os campos.';

    resultadoName.textContent = '';
    resultadoText.textContent = '';
  }
}

btnCalcular.addEventListener('click', calcularPoupanca);
