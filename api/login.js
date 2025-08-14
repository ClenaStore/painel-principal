// login.js
const popup = document.getElementById("popupLogin");

function abrirLogin() {
  popup.style.display = "flex";
}

function togglePassword() {
  const pass = document.getElementById("senha");
  pass.type = pass.type === "password" ? "text" : "password";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && popup.style.display === "flex") {
    login();
  }
});

async function login() {
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  errorMsg.textContent = "";

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, senha })
    });

    if (!res.ok) throw new Error("Falha na conexão");

    const data = await res.json();

    if (data.sucesso) {
      // Redireciona para painel específico do usuário
      if (usuario.toLowerCase() === "mercatto") {
        window.location.href = "painel-mercatto.html";
      } else if (usuario.toLowerCase() === "villa") {
        window.location.href = "painel-villa.html";
      } else if (usuario.toLowerCase() === "padaria") {
        window.location.href = "painel-padaria.html";
      } else {
        window.location.href = "painel.html";
      }
    } else {
      errorMsg.textContent = "Usuário ou senha inválidos!";
    }
  } catch (err) {
    errorMsg.textContent = "Erro ao conectar ao servidor!";
  }
}
