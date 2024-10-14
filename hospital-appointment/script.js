const patient = {
  name: 'John Doe', 
  ic: '1234567890',
  age: 50,
  condition: 'normal',
  sickness: 'none',
  appointmentDate: 'none',
  drInCharge: 'Dr. Jekyll'
};

function PatientInfo(){
  document.getElementById('patientInfo').innerText = 
  `Patient Name: ${patient.name} \n
  IC/Passport: ${patient.ic}\n
  Age: ${patient.age}\n
  Condition: ${patient.condition}\n
  Sickness: ${patient.sickness}\n
  Appointment Date: ${patient.appointmentDate}\n
  Dr. in Charge: ${patient.drInCharge}\n`;
}

PatientInfo();