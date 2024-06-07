const formularioProduto = document.getElementById('formularioProduto');
const registrosLocalStorage = document.getElementById('registrosLocalStorage');
let produtos = [];

formularioProduto.addEventListener('submit', (e) => {
  e.preventDefault();

  const nomeProduto = document.getElementById('nomeProduto').value;
  const descricaoProduto = document.getElementById('descricaoProduto').value;
  const loteProduto = document.getElementById('loteProduto').value;
  const quantidadeProduto = document.getElementById('quantidadeProduto').value;
  const statusProduto = document.getElementById('statusProduto').value;

  const produto = {
    nome: nomeProduto,
    descricao: descricaoProduto,
    lote: loteProduto,
    quantidade: quantidadeProduto,
    status: statusProduto
  };

  produtos.push(produto);

  localStorage.setItem('produtos', JSON.stringify(produtos));

  formularioProduto.reset();
  alert('Controle adicionado com sucesso!');
});
