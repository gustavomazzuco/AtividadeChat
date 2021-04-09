function gotoBottom(id) {
    var element = document.getElementById(id);
    element.scrollTop = element.scrollHeight - element.clientHeight;
}

window.addEventListener("load", function (event) {
    gotoBottom("chat");
});

function enviarMensagem() {
    const inputMensagem = document.getElementById("mensagem");

    const div = document.createElement("div");

    const titulo = document.createElement("div");
    titulo.className = "tit2";
    titulo.innerText = "Você diz:"
    const mensagem = document.createElement("div");
    mensagem.className = "msg2";
    mensagem.innerHTML = inputMensagem.value;

    div.appendChild(titulo);
    div.appendChild(mensagem);

    const listaChat = document.getElementById("chat");
    listaChat.appendChild(div);

    inputMensagem.value = "";
    gotoBottom("chat");
};

const formAdd = document.getElementById("formAdd");
formAdd.addEventListener("submit", function (event) {
    event.preventDefault();
    enviarMensagem();
});