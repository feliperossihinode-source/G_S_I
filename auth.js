const firebaseConfig = {
  apiKey: "AIzaSyBAARdjzSUNEjs9_fSiDtnXu9LzOnVpLzQ",
  authDomain: "controle-vigilantes.firebaseapp.com",
  projectId: "controle-vigilantes"
};

firebase.initializeApp(firebaseConfig);

function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(e => alert("Erro: " + e.message));
}
