const firebaseConfig = {
  apiKey: "AIzaSyBAARdjzSUNEjs9_fSiDtnXu9LzOnVpLzQ",
  authDomain: "controle-vigilantes.firebaseapp.com",
  projectId: "controle-vigilantes"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function criarUsuario() {
  const email = document.getElementById("novoEmail").value;
  const tipo = document.getElementById("tipo").value;

  db.collection("usuarios").add({
    email: email,
    tipo: tipo
  })
  .then(() => {
    alert("Usuário cadastrado!");
  });
}
