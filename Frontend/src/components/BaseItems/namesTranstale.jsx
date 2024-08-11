


const namesTranstale = (name) => {
  switch (name) {
    case 'name':
      return 'Nombre';
    case 'lastname':
      return 'Apellido';
    case 'office':
      return 'Area';
    case 'number':
      return 'Teléfono';
    case 'email':
      return 'Correo';
    case 'salary':
      return 'Salario';
    case 'INdate':
      return 'Hora de entrada';
    case 'OUTdate':
      return 'Hora de salida';
    case 'address':
      return 'Dirección';
    case 'street':
      return 'Calle';
    case 'city':
      return 'Ciudad';
    case 'country':
      return 'País';
    case 'postalCode':
      return 'Código postal';
    case 'description':
      return 'Descripción';
    case 'isActive':
      return 'Actividad';
    default:
      return name;
  }
}


export default namesTranstale