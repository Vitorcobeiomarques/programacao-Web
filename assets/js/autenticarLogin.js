document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        handleLogin();
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            handleLogin();
        }
    });

    function handleLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === "Cliente" && password === "ClientePassword") {
            window.location.href = "../paginas/telaCliente.html";
            return; // Saia da função após o redirecionamento
        }

        if (username === "Atendente" && password === "AtendentePassword") {
            window.location.href = "../paginas/telaAtendente.html";
            return; // Saia da função após o redirecionamento
        }

        alert("Credenciais inválidas. Tente novamente.");
        document.getElementById("password").value = "";
        document.getElementById("username").value = "";
    }
});
