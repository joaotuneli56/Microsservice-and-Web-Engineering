

function formatarNumero(input : HTMLInputElement):void{
    input.value = input.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
    const regexCelular = /^(\d{2})(\d{5})(\d{4})$/; // Formato para celular: (DD) 9XXXX-XXXX
    const regexFixo = /^(\d{2})(\d{4})(\d{4})$/; // Formato para telefone fixo: (DD) XXXX-XXXX

    if(input.value.length == 11){
        input.value = input.value.replace(regexCelular, '($1) $2-$3')
    }else{
        input.value = input.value.replace(regexFixo, '($1) $2-$3')
    }

}

function buscarMunicipios(){
    const uf = document.getElementById("estado") as HTMLSelectElement
    
    if(uf.value == ""){
        return;
    }
    
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf.value}/municipios`

    fetch(url)
        .then(response => response.json())
        .then(data => adicionarMunicipio(data))
        .catch(error => alert(error))


}

function adicionarMunicipio(data: any) {
    let municipioSelect = document.getElementById("municipio") as HTMLSelectElement
    municipioSelect.innerHTML = "";
    data.forEach(function (municipio:any){
        let option = document.createElement("option")
        option.value = municipio.id;
        option.text = municipio.nome;
        municipioSelect.appendChild(option);
    })
}

function upgrade(select:boolean){
    const containerUpgrade = document.getElementById("veiculosUpgrade") as HTMLDivElement
    const containerPadrao = document.getElementById("veiculosPadrao") as HTMLDivElement
    
    if(select){
        containerUpgrade.classList.add("esconderElemento")
        containerPadrao.classList.remove("esconderElemento")
    }else {
        containerUpgrade.classList.remove("esconderElemento")
        containerPadrao.classList.add("esconderElemento")
    }
    
}

var cadastros : {matricula:string, telefone:string, estado:string, municipio:string, upgrade:string, padrao:string}[] = []

function save(){
    const matriculaInput = document.getElementById("idMatricula") as HTMLInputElement;
    const telefoneInput = document.getElementById("idTelefone") as HTMLSelectElement;
    const estadoInput = document.getElementById("estado") as HTMLSelectElement;
    const municipioInput = document.getElementById("municipio") as HTMLInputElement;
    const upgradeInput = document.getElementById("veiculosUpgrade") as HTMLInputElement;
    const padraoInput = document.getElementById("veiculosPadrao") as HTMLInputElement;

    const cadastro = {
        matricula: matriculaInput.value, 
        telefone : telefoneInput.value,
        estado: estadoInput.value,
        municipio: municipioInput.value,
        upgrade: upgradeInput.value,
        padrao: padraoInput.value 

    }

    cadastros.push(cadastro)
    console.log(cadastro)
    localStorage.setItem('produtos', JSON.stringify(cadastro))
}

