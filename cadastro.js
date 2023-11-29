

function cadastro(senha, senhac, email) {
  if (!(localStorage.getItem(email) === null)) {
    alert("Esse email já está em uso tente logar");
  } else {
    if (senha != senhac) {
      alert("As senhas não são iguais");
    } else {
      localStorage.setItem(email, senha);
      alert("Cadastro realizado com sucesso");
      window.location.href = "index.html"
    }
  }
}

function login(senha, email){
    if (localStorage.getItem(email)) {
        if (localStorage.getItem(email) == senha) {
        alert("Login realizado com sucesso");
        localStorage.setItem("isloged", "true");
        window.location.href = "home.html";
        } else {
        alert("Senha incorreta");
        }
    } else {
        alert("Email não cadastrado");
    }
}
