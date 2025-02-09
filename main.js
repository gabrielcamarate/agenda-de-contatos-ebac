const form = document.getElementById('form-contato');
const nomeContatos = []
const telefoneContatos = []
let linhas = ""

form.addEventListener('submit', function(e){
    e.preventDefault();
    if (validarCampos()) {
        addRow();
        update();
    }
})

function addRow() {
    const nomeContato = document.getElementById('nome');
    const telefoneContato = document.getElementById('telefone');
    
    if (telefoneContatos.includes(telefoneContato.value)){
        alert(`O número ${telefoneContato.value} já existe na sua agenda.`);
    } else {
        nomeContatos.push(nomeContato.value);
        telefoneContatos.push(telefoneContato.value);

        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${telefoneContato.value}</td>`;
        linha += `</tr>`;
        linhas += linha;
    }

    nomeContato.value = "";
    telefoneContato.value = "";
}

function update() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function validarCampos() {
    const nomeContato = document.getElementById('nome');
    const telefoneContato = document.getElementById('telefone');

    if (nomeContato.value.trim() === "") {
        alert("Por favor, insira um nome.");
        return false;
    }

    if (telefoneContato.value.trim() === "") {
        alert("Por favor, insira um número de telefone.");
        return false;
    }

    if (!validarNumero(telefoneContato.value)) {
        alert("Número de telefone inválido. Por favor, insira um número válido.");
        return false;
    }

    return true;
}

function validarNumero(numero) {
    // Validação simples de número (verifica se o número tem ao menos 10 dígitos)
    const regex = /^[0-9]{10,11}$/;
    return regex.test(numero);
}
