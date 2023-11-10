document.addEventListener("DOMContentLoaded", function () {
  let typeform = ''
  let htmlTab = ''

  for (let i = 0; i < 2; i++) {
    i == 0 ? typeform = 'user' : typeform = 'atendente'
    htmlTab += `<div class="form-card">
<section class="header">
    <h2>Cadastro Cliente</h2>
</section>

<form id="form-${typeform}" class="form">
    <div class="form-content">
        <label for="username-${typeform}">Nome do usuário</label>
        <input type="text" id="username-${typeform}" placeholder="Digite o nome do usuario..." />
        <a>Aqui vai a mensagem de erro....</a>
    </div>

    <div class="form-content">
        <label for="email-${typeform}">Email</label>
        <input type="email" id="email-${typeform}" placeholder="Digite o seu email..." />
        <a>Aqui vai a mensagem de erro....</a>
    </div>

    <div class="form-content">
        <label for="password-${typeform}">Senha</label>
        <input type="password" id="password-${typeform}" placeholder="Digite sua senha..." />
        <a>Aqui vai a mensagem de erro....</a>
    </div>

    <div class="form-content">
        <label for="password-confirmation-${typeform}">Confirmação de senha</label>
        <input type="password" id="password-confirmation-${typeform}" placeholder="Digite sua senha novamente..." />
        <a>Aqui vai a mensagem de erro....</a>
    </div>

    <button type="submit" onclick="checkForm('${typeform}')">Cadastrar</button>

</form>

</div>`
  }

  typeform = ''

  document.getElementById(`container`).innerHTML = htmlTab
})

function checkInputUsername(username) {
  const usernameValue = username.value;

  if (usernameValue === "") {
    errorInput(username, "Usuário obrigatório!")
  } else {
    const formItem = username.parentElement;
    formItem.className = "form-content"
  }
}

function checkInputEmail(email) {
  const emailValue = email.value;

  if (emailValue === "") {
    errorInput(email, "O email é obrigatório.")
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content"
  }
}

function checkInputPassword(password) {
  const passwordValue = password.value;

  if (passwordValue === "") {
    errorInput(password, "A senha é obrigatória.")
  } else if (passwordValue.length < 8) {
    errorInput(password, "A senha precisa ter no mínimo 8 caracteres.")
  } else {
    const formItem = password.parentElement;
    formItem.className = "form-content"
  }
}

function checkInputPasswordConfirmation(password, passwordConfirmation) {
  const passwordValue = password.value;
  const confirmationPasswordValue = passwordConfirmation.value;

  if (confirmationPasswordValue === "") {
    errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.")
  } else if (confirmationPasswordValue !== passwordValue) {
    errorInput(passwordConfirmation, "As senhas não são iguais.")
  } else {
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-content"
  }
}

function checkForm(typecard) {
  console.log(typecard);
  const form = document.getElementById(`form-${typecard}`);
  const username = document.getElementById(`username-${typecard}`)
  const email = document.getElementById(`email-${typecard}`)
  const password = document.getElementById(`password-${typecard}`)
  const passwordConfirmation = document.getElementById(`password-confirmation-${typecard}`);

  checkInputUsername(username);
  checkInputEmail(email);
  checkInputPassword(password);
  checkInputPasswordConfirmation(password, passwordConfirmation);

  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every((item) => {
    return item.className === "form-content"
  });
  if (isValid) {
    alert("CADASTRADO COM SUCESSO!")
  } else {
    event.preventDefault()
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"
}