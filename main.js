const email = document.getElementById("InputEmail1");
const senha = document.querySelector(".senha");
const formulario = document.querySelector(".botao");
const registro = document.getElementById("registro");
const mostrarErro = document.querySelector(".erro");
const esqueceuSenha = document.getElementById("esqueceu-senha");
const usuario = document.querySelector(".usuario p")

formulario.addEventListener("click", (e) => {
  e.preventDefault();
  usuario.innerHTML = "ola"
  
});

esqueceuSenha.addEventListener("click", (e) => {
  e.preventDefault();
  recoverPassword();
});

registro.addEventListener("click", (e) => {
    e.preventDefault();
});







function recoverPassword() {
  if (!email.value.trim()) {
    alert("Por favor, digite seu e-mail antes de recuperar a senha.");
    return;
  }

  firebase
    .auth()
    .sendPasswordResetEmail(email.value)
    .then(() => {
      alert("E-mail de recuperação enviado com sucesso!");
    })
    .catch((error) => {
      alert(error.message);
    });
}





function register() {
  if (!email.value.trim() || !senha.value.trim()) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, senha.value)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("Conta criada com sucesso!");
      console.log(error);
    });
}




function login() {  
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, senha.value)
    .then(() => {
      window.location.href = "paginaInicial.html";
      
    })
    .catch((error) => {
      alert("Credenciais inválidas ou conta não existe");
      console.log(error);
    });
    
}


