const mockData = [
  {
    dni: '12345678',
    nombreCompleto: 'Juan Pérez',
    fechaNacimiento: '01/01/1980',
    numeroLegajo: '001',
  },
  {
    dni: '98765432',
    nombreCompleto: 'María Gómez',
    fechaNacimiento: '15/05/1990',
    numeroLegajo: '002',
  },
];

function buscarLegajo() {
  const dni = document.getElementById('dni').value;
  const empleado = mockData.find(emp => emp.dni === dni);
  if (empleado) {
    document.getElementById('nombreCompleto').innerText = empleado.nombreCompleto;
    document.getElementById('fechaNacimiento').innerText = empleado.fechaNacimiento;
    document.getElementById('numeroLegajo').innerText = empleado.numeroLegajo;
    document.getElementById('resultado').style.display = 'block';
  } else {
    alert('Empleado no encontrado.');
  }
}

function limpiar() {
  document.getElementById('dni').value = '';
  document.getElementById('resultado').style.display = 'none';
}
