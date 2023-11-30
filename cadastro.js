

function cadastro(senha, senhac, email) {
  if (!(localStorage.getItem(email) === null)) {
    alert("Esse email já está em uso tente logar");
  } else {
    if (senha != senhac) {
      alert("As senhas não são iguais");
    } else {
      localStorage.setItem(email, senha);
      alert("Cadastro realizado com sucesso");
      let asd = "https://peraza.peraza.live/index.html"
      window.open(asd)
    }
  }
}

function login(senha, email){
    if (localStorage.getItem(email)) {
        if (localStorage.getItem(email) == senha) {
          let wsa = "https://peraza.peraza.live/home.html" 
        window.open(wsa)
        } else {
        alert("Senha incorreta");
        }
    } else {
        alert("Email não cadastrado");
    }
}
