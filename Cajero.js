var accounts = [
  { nombre: "Mali", saldo: 200,contraseña: "contraseña1" },
  { nombre: "Gera", saldo: 290, contraseña: "contraseña2" },
  { nombre: "Maui", saldo: 67, contraseña: "contraseña3" }
];

var selectedAccount;
var passwordInput = document.getElementById('passwordInput');
var operationsDiv = document.getElementById('operations');
var resultDiv = document.getElementById('result');

function login() {
  var selectedAccountIndex = document.getElementById('accounts').value;
  selectedAccount = accounts[selectedAccountIndex];

  var password = passwordInput.value;

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
  var amount = parseFloat(prompt("Ingresa el monto a ingresar:"));

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