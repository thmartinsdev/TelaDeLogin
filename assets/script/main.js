const button = document.getElementById('submit');
const username = document.getElementsByName('username');
const password = document.getElementsByName('password');
const status = document.getElementById('status');

button.addEventListener('click', () => {
    if (username[0].value.length < 1 || password[0].value.length < 1) {
        status.style.display = "flex";
        status.innerHTML = "E-mail ou senha são obriagatórios!"
        return;
    }

    status.innerHTML = "";
    status.style.display = "none";
    button.innerHTML = "<span class='spinner-border'></span>";
});