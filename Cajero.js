let accounts = [
  { nombre: "Mali", saldo: 200,contraseña: "contraseña1" },
  { nombre: "Gera", saldo: 290, contraseña: "contraseña2" },
  { nombre: "Maui", saldo: 67, contraseña: "contraseña3" }
];

let selectedAccount;
let passwordInput = document.getElementById('passwordInput');
let operationsDiv = document.getElementById('operations');
let resultDiv = document.getElementById('result');

function login() {
  let selectedAccountIndex = document.getElementById('accounts').value;
  selectedAccount = accounts[selectedAccountIndex];

  let password = passwordInput.value;

  if (password === selectedAccount.contraseña) { 
    operationsDiv.style.display = 'block';
  } else {
    alert("Contraseña incorrecta. Intenta nuevamente.");
  }
}

function checkBalance() {
  resultDiv.innerHTML = "Saldo actual: $" + selectedAccount.saldo;
}

function deposit() {
  let amount = parseFloat(prompt("Ingresa el monto a ingresar:"));

  if (amount > 0 && selectedAccount.saldo + amount <= 990) {
    selectedAccount.saldo += amount;
    resultDiv.innerHTML = "Monto ingresado: $" + amount + "<br>Saldo actual: $" + selectedAccount.saldo;
  } else {
    alert("Ingresa un monto válido.");
  }
}

function withdraw() {
  var amount = parseFloat(prompt("Ingresa el monto a retirar:"));

  if (amount > 0 && amount <= selectedAccount.saldo && selectedAccount.saldo - amount >= 10 && selectedAccount.saldo - amount <= 990) {
    selectedAccount.saldo -= amount;
    resultDiv.innerHTML = "Monto retirado: $" + amount + "<br>Saldo actual: $" + selectedAccount.saldo;
  } else {
    alert("Monto no válido o excede los límites permitidos.");
  }
}