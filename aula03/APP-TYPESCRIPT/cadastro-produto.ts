let cores = ["vermelho", "azul", "verde"]
var produtos : {id:string, nome:string, cor:string, tamanho:string, preco:string}[] = []
let corSelect = document.getElementById("cor") as HTMLSelectElement;

cores.forEach(cor => {
    let option = document.createElement("option");
    option.text=cor;
    option.value=cor;
    corSelect.appendChild(option);
})

let tamanho = ["P", "M", "G", "GG"]

let tamanhoSelect = document.getElementById("tamanho") as HTMLSelectElement;

tamanho.forEach(tamanho=>{
    let option = document.createElement("option")
    option.text = tamanho;
    option.value = tamanho;
    tamanhoSelect.appendChild(option);
})
function save(){
    const produtoInput = document.getElementById("produto") as HTMLInputElement
    const corInput = document.getElementById("cor") as HTMLInputElement
    const tamanhoInput = document.getElementById("tamanho") as HTMLInputElement
    const precoInput = document.getElementById("preco") as HTMLInputElement

    const produto = {
        id: crypto.randomUUID(),
        nome: produtoInput.value,
        cor: corInput.value,
        tamanho: tamanhoInput.value,
        preco: precoInput.value
    }

    produtos.push(produto)
    localStorage.setItem('produtos', JSON.stringify(produtos))
}