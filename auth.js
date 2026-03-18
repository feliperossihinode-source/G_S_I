firebase.auth().signInWithEmailAndPassword(email, senha)
  .then(async (userCredential) => {

    const user = userCredential.user;

    const snapshot = await firebase.firestore()
      .collection("usuarios")
      .where("email", "==", user.email)
      .get();

    if (snapshot.empty) {
      alert("Usuário não autorizado");
      return;
    }

    const dados = snapshot.docs[0].data();

    if (dados.tipo === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "dashboard.html";
    }
  });
