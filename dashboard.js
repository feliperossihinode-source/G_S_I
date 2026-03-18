const url = "https://docs.google.com/spreadsheets/d/1R6384x8by46nUVnpYwGIomjmt5zPIG1dDPJCE-4RERw/export?format=csv";

fetch(url)
  .then(res => res.text())
  .then(csv => {

    if (csv.includes("<html")) {
      alert("Erro: planilha não pública");
      return;
    }

    const linhas = csv.trim().split("\n").map(l => l.split(","));

    montarTabela(linhas);
    montarGrafico(linhas);
  });

function montarTabela(dados) {
  let html = "";

  dados.forEach(l => {
    html += "<tr>";
    l.forEach(c => html += `<td>${c}</td>`);
    html += "</tr>";
  });

  document.getElementById("tabela").innerHTML = html;
}

function montarGrafico(dados) {
  const empresas = {};

  dados.slice(1).forEach(l => {
    const emp = l[1];
    empresas[emp] = (empresas[emp] || 0) + 1;
  });

  new Chart(document.getElementById("grafico"), {
    type: "pie",
    data: {
      labels: Object.keys(empresas),
      datasets: [{
        data: Object.values(empresas)
      }]
    }
  });
}
