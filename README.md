# API_Development
 Este repositorio consiste en un ejercicio para practicar NodeJS. El ejercicio trata del maneja de personal de una empresa mediante API. <br>
La API fue desarrollada con Express, de base de datos se uso MongoDB y para interactuar con la API se desarrollo una App en React.

## Instalación.

### App Express (API).

 Ubicarse en la carpeta raiz y escribir en la terminal:

```
npm install
```

se debe crear un archivo .env con el URL base de la API, el URL de la base de datos en MongoDB y el puerto.
por defecto se tiene este ejemplo:

```env
URL_BASE="http://localhost:3001"
PORT=3001
MONGODB_URL="mongodb://localhost:27017/EmployeesManager"
```

### App React (interfaz).

 En la terminal:

```
cd .\React-app\
npm install
```

## Uso.

 ### App Express (API).

```
npm run dev
```

 ### App React (Interfaz).

```
cd .\React-app\
npm run dev
npm run start // Para compilar Tailwind, si se desea editar el proyecto
```

 ## Rutas principales de la API y ejemplos de uso.

  Dependiendo de donde se ejecute la API el URL base puede cambiar, de manera local, se usara ```http://localhost:3001```.

### Departamentos.

#### ```GET```: http://localhost:3001/departments || http://localhost:3001/departments/:id || http://localhost:3001/search/departments/:name:description

##### Parametros: ```{pages,limit,id}```. Pages para definir la pagina actual, limit para definir el numero maximo de departamentos y id para mostrar un departamento especifico.

Para ```http://localhost:3001/search/departments``` requiere como parametros los elementos del apartamento (nombre y descripcion).

##### Ejemplos:
```javascript
const response = await axios.get(`/http://localhost:3001/departments?pages=1?limit=15`);
console.log(response.data.docs); // Muestra un Array de 15 elementos
```
```javascript
const response = await axios.get(`/http://localhost:3001/departments/12345678`);
console.log(response.data.docs); // Muestra un array de 1 elemento con el ID 12345678
```
```javascript
const response = await axios.get(`/http://localhost:3001/departments?name=Ing`);
console.log(response.data.docs); // Muestra un array de elementos variables dependiendo de cuando elementos coincidan con el nombre "Ing"
```

#### ```POST```: http://localhost:3001/departments

##### Parametros: recibe un objeto cuyos elementos son todos requeridos.

##### Ejemplo:

```javascript
const departamento = {
	name: "Electronica",
	description: "Departamento encargado en el mantenimiento y reparacion de equipos electronicos"
}

const response = await axios.post(`/http://localhost:3001/departments/`, departamento, {'Content-Type': 'application/json'});
console.log(response.data.docs); // por defecto, siempre se devuelve el elemento insertado como metodo de confirmacion de asignacion

```

#### ```PATCH```: http://localhost:3001/departments/:id
##### Parametros: ```{id}```. Recibe un ID y un objeto para definir cual y que elemento se debe actualizar en la base de datos 

##### Ejemplo:

```javascript
const departamento = {
	description: "Departamento encargado en el mantenimiento y reparacion de equipos medicos"
}

// No es necesario colocar todos los elementos del dato a actualizar

const response = await axios.patch(`/http://localhost:3001/departments/12345678`, departamento, {'Content-Type': 'application/json'});
console.log(response.data.docs); // por defecto, siempre se devuelve el elemento modificado como metodo de confirmacion de asignacion

```

#### ```DELETE```: http://localhost:3001/departments/:id

##### Parametros: ```{id}```. Recibe un ID para eliminar el elemento deseado.

Se utiliza la tecnica de "soft delete", por lo tanto, no se borra el elemento en la base de datos, solo se marca como inactivo.

##### Ejemplo:

```javascript
const response = await axios.delete(`/http://localhost:3001/departments/12345678`);
console.log(response.data.docs); // por defecto, siempre se devuelve el elemento modificado como metodo de confirmacion de eliminacion.
```

### Empleados.

#### ```GET```: http://localhost:3001/employees || http://localhost:3001/employees/:id || http://localhost:3001/search/employees/:name:lastname:office:salary:INdate:OUTdate:number:email:street:city:country:postalCode

##### Parametros: ```{pages,limit,id}```. Pages para definir la pagina actual, limit para definir el numero maximo de departamentos y id para mostrar un empleado especifico.

Para ```http://localhost:3001/search/employees``` requiere como parametros los elementos del apartamento (nombre, apellido, departamento, salario, hora de entrada, hora de salida, numero, email, calle, ciudad, pais, codigo postal).

##### Ejemplos:
```javascript
const response = await axios.get(`/http://localhost:3001/employees?pages=1?limit=15`);
console.log(response.data.docs); // Muestra un Array de 15 elementos
```
```javascript
const response = await axios.get(`/http://localhost:3001/employees/12345678`);
console.log(response.data.docs); // Muestra un array de 1 elemento con el ID 12345678
```
```javascript
const response = await axios.get(`/http://localhost:3001/employees?name=A`);
console.log(response.data.docs); // Muestra un array de elementos variables dependiendo de cuando elementos coincidan con el nombre "A"
```

#### ```POST```: http://localhost:3001/employees

##### Parametros: recibe un objeto cuyos elementos son todos requeridos.

##### Ejemplo:

```javascript
const empleado = {
	name: "Pedrito",
	lastname: "Gonzales",
	office: "Epic Books",
	salary: 1300,
	INdate: "08:00",
	OUTdate: "18:00",
	number: 334121231234,
	email: "ejempls@ejemplo.com",
	address: {
		street: "Calle 1",
		city: "Ciudad 2",
		country: "Pais 3",
		postalCode: "1234"
	}
}

const response = await axios.post(`/http://localhost:3001/employees/`, empleado, {'Content-Type': 'application/json'});
console.log(response.data.docs); // por defecto, siempre se devuelve el elemento insertado como metodo de confirmacion de asignacion

```

#### ```PATCH```: http://localhost:3001/employees/:id
##### Parametros: ```{id}```. Recibe un ID y un objeto para definir cual y que elemento se debe actualizar en la base de datos 

##### Ejemplo:

```javascript
const empleado = {
	salary: 3000,
 OUTdate: "16:00"
}

// No es necesario colocar todos los elementos del dato a actualizar

const response = await axios.patch(`/http://localhost:3001/employees/12345678`, empleado, {'Content-Type': 'application/json'});
console.log(response.data.docs); // por defecto, siempre se devuelve el elemento modificado como metodo de confirmacion de asignacion

```

#### ```DELETE```: http://localhost:3001/employees/:id

##### Parametros: ```{id}```. Recibe un ID para eliminar el elemento deseado.

Se utiliza la tecnica de "soft delete", por lo tanto, no se borra el elemento en la base de datos, solo se marca como inactivo.

##### Ejemplo:

```javascript
const response = await axios.delete(`/http://localhost:3001/employees/12345678`);
console.log(response.data.docs); // por defecto, siempre se devuelve el elemento modificado como metodo de confirmacion de eliminacion.
```
