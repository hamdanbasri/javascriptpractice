const patient = {
  name: 'John Doe',
  ic: '1234567890',
  age: 50,
  condition: 'normal',
  ilness: 'none',
  appointmentDate: 'none',
  drInCharge: 'Dr. Jekyll',
  insurance: 'none'
};

let treatmentAmount = 100;
let currentNumber = 80;
const patientNumber = 87;

const registerButton = document.getElementById('registerButton');
const pendingPaymentButton = document.getElementById('pendingPayment');
const receiptButton = document.getElementById('receipt');

function PatientInfo() {
  document.getElementById('patientInfo').innerText =
    `Patient Name: ${patient.name} \n
  IC/Passport: ${patient.ic}\n
  Age: ${patient.age}\n
  Condition: ${patient.condition}\n
  Ilness: ${patient.illness}\n
  Appointment Date: ${patient.appointmentDate}\n
  Dr. in Charge: ${patient.drInCharge}\n
  Insurance: ${patient.insurance}\n`;
}

function Register(){
  registerButton.disabled = true;
  pendingPaymentButton.disabled = false;
}

function PaymentInfo(){
  alert(`Your amount is: RM ${treatmentAmount}`);
  pendingPaymentButton.disabled = true;
  receiptButton.disabled = false;

  PatientNumber();
}

function Receipt(){
  alert(`You paid:RM ${treatmentAmount} `)
}



function PatientNumber() {
  const button = document.getElementById('waitingNumberButton');
  document.getElementById('waitingNumber').innerText = patientNumber;
  button.innerText = `Wait for number: ${patientNumber}`;
}

function CallForNextPatient() {
  currentNumber += 1;
  document.getElementById('currentNumber').innerText = currentNumber;
  CheckForRoomNumber();
}

function CheckForRoomNumber() {

  let roomNumber = Math.floor(Math.random() * 20) + 1;

  if (patientNumber === currentNumber) {
    document.getElementById('roomNumber').innerText = `Proceed to room number: ${roomNumber}`;
    document.getElementById('checkupInSession').style.color = 'green';
    alert(`Proceed to room number: ${roomNumber}`);
  }

  console.log(roomNumber);
}

function CheckupCompleted(){
  document.getElementById('checkupCompleted').style.color = 'green';
  alert('Checkup Completed.');
  CallForNextPatient();
}

PatientInfo();