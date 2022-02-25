const query = document.querySelector.bind(document);

function validaEmail() {
  const regex = /\S+@\S+\.\S+/;
  const email = query('#login').value;
  const senha = query('#senha').value;
  const validEmail = regex.test(email); // https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
  if (validEmail && senha.length >= 6) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
query('#entrar').addEventListener('click', validaEmail);
