const formulario = document.getElementById('formulario');
const ctx = document.getElementById('grafico1');
const tabelaDados = document.getElementById('tabela-dados');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const rotulos = [];
    const valores = [];

    for (let i = 1; i <= 6; i++) {
        const rotuloInput = document.getElementById(`rotulo${i}`);
        const valorInput = document.getElementById(`valor${i}`);

        if (rotuloInput.value && valorInput.value) {
            rotulos.push(rotuloInput.value);
            valores.push(parseInt(valorInput.value));
        }
    }

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: rotulos,
            datasets: [{
                label: '# of Votes',
                data: valores,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

tabelaDados.addEventListener('input', () => {
    const rotulos = [];
    const valores = [];

    for (let i = 1; i <= 6; i++) {
        const rotuloInput = document.getElementById(`rotulo${i}`);
        const valorInput = document.getElementById(`valor${i}`);

        if (rotuloInput.value && valorInput.value) {
            rotulos.push(rotuloInput.value);
            valores.push(parseInt(valorInput.value));
        }
    }

    ctx.chart.data.labels = rotulos;
    ctx.chart.data.datasets[0].data = valores;
    ctx.chart.update();
});