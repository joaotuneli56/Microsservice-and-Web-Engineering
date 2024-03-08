function formatarNumero(input) {
    input.value = input.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
    var regexCelular = /^(\d{2})(\d{5})(\d{4})$/; // Formato para celular: (DD) 9XXXX-XXXX
    var regexFixo = /^(\d{2})(\d{4})(\d{4})$/; // Formato para telefone fixo: (DD) XXXX-XXXX
    if (input.value.length == 11) {
        input.value = input.value.replace(regexCelular, '($1) $2-$3');
    }
    else {
        input.value = input.value.replace(regexFixo, '($1) $2-$3');
    }
}
function buscarMunicipios() {
    var uf = document.getElementById("estado");
    if (uf.value == "") {
        return;
    }
    var url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/".concat(uf.value, "/municipios");
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (data) { return adicionarMunicipio(data); })
        .catch(function (error) { return alert(error); });
}
function adicionarMunicipio(data) {
    var municipioSelect = document.getElementById("municipio");
    municipioSelect.innerHTML = "";
    data.forEach(function (municipio) {
        var option = document.createElement("option");
        option.value = municipio.id;
        option.text = municipio.nome;
        municipioSelect.appendChild(option);
    });
}
function upgrade(select) {
    var containerUpgrade = document.getElementById("veiculosUpgrade");
    var containerPadrao = document.getElementById("veiculosPadrao");
    if (select) {
        containerUpgrade.classList.add("esconderElemento");
        containerPadrao.classList.remove("esconderElemento");
    }
    else {
        containerUpgrade.classList.remove("esconderElemento");
        containerPadrao.classList.add("esconderElemento");
    }
}
var cadastros = [];
function save() {
    var matriculaInput = document.getElementById("idMatricula");
    var telefoneInput = document.getElementById("idTelefone");
    var estadoInput = document.getElementById("estado");
    var municipioInput = document.getElementById("municipio");
    var upgradeInput = document.getElementById("veiculosUpgrade");
    var padraoInput = document.getElementById("veiculosPadrao");
    var cadastro = {
        matricula: matriculaInput.value,
        telefone: telefoneInput.value,
        estado: estadoInput.value,
        municipio: municipioInput.value,
        upgrade: upgradeInput.value,
        padrao: padraoInput.value
    };
    cadastros.push(cadastro);
    console.log(cadastro);
    localStorage.setItem('produtos', JSON.stringify(cadastro));
}
