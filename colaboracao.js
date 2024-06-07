const anotacoes = document.getElementById('anotacoes');
const inputAnotacao = document.getElementById('anotacao');
const listaAnotacoes = document.getElementById('lista-anotacoes');
const btnAdicionar = document.getElementById('adicionar');

let anotacoesArray = JSON.parse(localStorage.getItem('anotacoes')) || [];

btnAdicionar.addEventListener('click', () => {
  const anotacao = inputAnotacao.value.trim();
  if (anotacao !== '') {
    anotacoesArray.push(anotacao);
    localStorage.setItem('anotacoes', JSON.stringify(anotacoesArray));
    inputAnotacao.value = '';
    renderizarLista();
  }
});

function renderizarLista() {
  listaAnotacoes.innerHTML = '';
  anotacoesArray.forEach((anotacao, index) => {
    const li = document.createElement('li');
    li.textContent = anotacao;
    li.style.opacity = 0; 


    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.className = 'btn-remover';
    btnRemover.addEventListener('click', () => {
      removerAnotacao(index);
    });

    li.appendChild(btnRemover);
    listaAnotacoes.appendChild(li);

    setTimeout(() => {
      li.style.transition = 'opacity 0.5s';
      li.style.opacity = 1;
    }, 10);
  });
}

function removerAnotacao(index) {
  anotacoesArray.splice(index, 1);
  localStorage.setItem('anotacoes', JSON.stringify(anotacoesArray));
  renderizarLista();
}


document.addEventListener('DOMContentLoaded', renderizarLista);


const botaoNavegacao = (id, url) => {
  const button = document.getElementById(id);
  button.addEventListener('click', () => {
    window.location.href = url;
  });
};

botaoNavegacao('modelagem', 'nova_tela.html');
botaoNavegacao('simulacao', 'simulacao.html');
botaoNavegacao('analise', 'analise.html');
botaoNavegacao('colaboracao', 'colaboracao.html');
botaoNavegacao('sobre', 'sobre.html');
botaoNavegacao('integracao', 'integracao.html');
