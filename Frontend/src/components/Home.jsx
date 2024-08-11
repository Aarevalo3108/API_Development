import Base from './BaseItems/Base'
import js from '../svg/mongodb.svg'
import nodejs from '../svg/nodejs.svg'
import react from '../svg/react.svg'
import server from '../svg/server.svg'

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <Base title="Bienvenido" content="Desde aquí puedes ver un pequeño resumen del proyecto."/>
      <div className='flex flex-col items-center lg:flex-row justify-center lg:items-start gap-6'>
        <div className="flex flex-col md:grid md:grid-cols-2 justify-center lg:justify-items-center lg:w-fit p-4 gap-6 shadow-md rounded-lg">
          <h2 className="text-2xl lg:text-4xl md:col-span-2 lg:order-1 tracking-wide font-bold ml-4 text-center">Información.</h2>
          <p className="text-md md:text-lg lg:w-64 text-justify lg:order-2">Este proyecto consiste en un ejercicio para practicar NodeJS. El ejercicio trata del manejo de personal de una empresa mediante API.</p>
          <p className="text-md md:text-lg lg:w-64 text-justify lg:order-4">La API se ejecuta de manera local y se encuentra en el repositorio. Fuera de la carpeta &quot;React-app&quot;.</p>
          <div className='flex lg:flex-col md:col-span-2 lg:col-span-1 lg:row-span-2 lg:order-3 gap-4 justify-center items-center'>
            <img className="w-24" src={js} alt="js"></img>
            <img className="w-24" src={nodejs} alt="nodejs"></img>
            <img className="w-24" src={react} alt="react"></img>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center  p-4 gap-6 shadow-md rounded-lg w-fit">
          <h2 className="text-center text-2xl lg:text-4xl tracking-wide font-bold">API.</h2>
          <div className='flex gap-6 flex-col md:flex-row lg:flex-col justify-center items-center'>
            <p className="text-md md:text-lg text-justify max-w-64">La API fue desarrollada con Express y se conecta con una base de datos de MongoDB local. siendo la direccion: http://localhost:3001.</p>
            <img className='w-32' src={server} alt="server" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-1 sm:p-4 gap-4 rounded-lg shadow-lg">
        <h2 className="text-xl sm:text-2xl tracking-wide font-bold">Rutas de departamentos.</h2>
        <div className='flex flex-col justify-center items-center lg:items-start lg:grid lg:grid-cols-2 lg:justify-items-center gap-6 shadow-md rounded-lg p-2 sm:p-4'>
          <p className='text-md md:text-lg text-justify max-w-72'>Este apartado solo contiene nombre y descripción. Se pueden buscar todos los departamentos o buscar por ID. Se pueden modificar y borrar, con el metodo de soft delete. Ademas de filtrar por diversos parámetros.</p>
          <div className=" bg-gray-900 text-white font-mono p-2 rounded-lg shadow-lg w-fit text-[0.6rem] sm:text-md mt-2">
              <pre><code>
                <p><span className="text-blue-400">router</span>.<span className="text-yellow-300">get</span>(<span className="text-orange-300">&#39;/departments&#39;</span>, <span className="text-blue-400">getDepartments</span>);</p>
                <p><span className="text-blue-400">router</span>.<span className="text-yellow-300">get</span>(<span className="text-orange-300">&#39;/departments/:id&#39;</span>, <span className="text-blue-400">getDepartmentById</span>);</p>
                <p><span className="text-blue-400">router</span>.<span className="text-yellow-300">get</span>(<span className="text-orange-300">&#39;/search/departments&#39;</span>, <span className="text-blue-400">searchDepartments</span>);</p>
                <p><span className="text-blue-400">router</span>.<span className="text-yellow-300">post</span>(<span className="text-orange-300">&#39;/departments&#39;</span>, <span className="text-blue-400">createDepartment</span>);</p>
                <p><span className="text-blue-400">router</span>.<span className="text-yellow-300">patch</span>(<span className="text-orange-300">&#39;/departments/:id&#39;</span>, <span className="text-blue-400">updateDepartment</span>);</p>
                <p><span className="text-blue-400">router</span>.<span className="text-yellow-300">delete</span>(<span className="text-orange-300">&#39;/departments/:id&#39;</span>, <span className="text-blue-400">deleteDepartment</span>);</p>
              </code></pre>
          </div>
          <p className='text-md md:text-lg text-justify max-w-72'>Las distintas rutas que maneja este apartado son la de GET, POST, PATCH y DELETE. dos de ellas (POST y PATCH) requieren un body en formato JSON. Este es un ejemplo de formato:</p>
          <div className="bg-gray-900 text-white font-mono p-4 rounded-lg shadow-lg w-fit max-w-64 text-[0.8rem] lg:place-self-start mt-2">
            <p>
                <span className='text-green-300'>&quot;name&quot;</span>: &quot;Electronica&quot;
            </p>
            <p>
                <span className='text-green-300'>&quot;description&quot;</span>: &quot;Departamento encargado en el mantenimiento y reparacion de equipos electronicos&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-1 sm:p-4 gap-4 shadow-md rounded-lg">
        <h3 className="text-xl sm:text-2xl font-bold">Rutas de empleados: </h3>
        <div className='flex flex-col justify-center items-center md:items-start md:grid md:grid-cols-2 lg:justify-items-center gap-6 md:gap-2 shadow-md rounded-lg p-4'>
          <p className='text-md md:text-lg text-justify max-w-72'>Este apartado contiene nombre, apellido, departamento, email, dirección, telefono, sueldo, fecha de entrada y fecha de salida. Se pueden buscar todos los empleados o buscar por ID. Se pueden modificar y borrar, con el metodo de soft delete.</p>
          <div className="bg-gray-900 text-white font-mono p-2 rounded-lg shadow-lg w-fit text-[0.6rem] md:text-[0.8rem] lg:text-sm mt-2">
              <pre><code>
                <p><span className="text-blue-400">router</span>.<span className="text-yellow-300">get</span>(<span className="text-orange-300">&#39;/&#39;</span>, <span className="text-blue-400">hello</span>);</p>
                <p><span className="text-blue-400">router</span>.<span className="text-yellow-300">get</span>(<span className="text-orange-300">&#39;/employees&#39;</span>, <span className="text-blue-400">getEmployees</span>);</p>
                <p><span className="text-blue-400">router</span>.<span className="text-yellow-300">get</span>(<span className="text-orange-300">&#39;/employees/:id&#39;</span>, <span className="text-blue-400">getEmployeesById</span>);</p>
                <p><span className="text-blue-400">router</span>.<span className="text-yellow-300">get</span>(<span className="text-orange-300">&#39;/search/employees&#39;</span>, <span className="text-blue-400">searchEmployees</span>);</p>
                <p><span className="text-blue-400">router</span>.<span className="text-yellow-300">post</span>(<span className="text-orange-300">&#39;/employees&#39;</span>, <span className="text-blue-400">createEmployees</span>);</p>
                <p><span className="text-blue-400">router</span>.<span className="text-yellow-300">patch</span>(<span className="text-orange-300">&#39;/employees/:id&#39;</span>, <span className="text-blue-400">updateEmployee</span>);</p>
                <p><span className="text-blue-400">router</span>.<span className="text-yellow-300">delete</span>(<span className="text-orange-300">&#39;/employees/:id&#39;</span>, <span className="text-blue-400">deleteEmployee</span>);</p>
              </code></pre>
          </div>
          <p className='text-md md:text-lg text-justify max-w-72'>Las distintas rutas que maneja este apartado, igual que departamentos, son la de GET, POST, PATCH y DELETE. dos de ellas (POST y PATCH) requieren un body en formato JSON, todos los datos son requeridos. Este es un ejemplo de formato:</p>
          <div className="bg-gray-900 text-white font-mono p-4 rounded-lg shadow-lg w-fit max-w-md text-[0.8rem] mt-2">
            <p>
                <span className='text-green-300'>&quot;name&quot;</span>: &quot;Pedrito&quot;
            </p>
            <p>
                <span className='text-green-300'>&quot;lastname&quot;</span>: &quot;Gonzales&quot;
            </p>
            <p>
                <span className='text-green-300'>&quot;office&quot;</span>: &quot;Ingenieria&quot;
            </p>
            <p>
                <span className='text-green-300'>&quot;salary&quot;</span>: &quot;1300&quot;
            </p>
            <p>
                <span className='text-green-300'>&quot;INdate&quot;</span>: &quot;08:00&quot;
            </p>
            <p>
                <span className='text-green-300'>&quot;OUTdate&quot;</span>: &quot;18:00&quot;
            </p>
            <p>
                <span className='text-green-300'>&quot;number&quot;</span>: &quot;584121231234&quot;
            </p>
            <p>
                <span className='text-green-300'>&quot;email&quot;</span>: &quot;ejemplo@ejemplo.com&quot;
            </p>
            <div>
              <span className='text-green-300'>&quot;address&quot;</span>: <span>&#123;</span>
              <div className="ml-4">
                  <p><span className='text-green-300'>&quot;street&quot;</span>: &quot;Calle 1&quot;</p>
                  <p><span className='text-green-300'>&quot;city&quot;</span>: &quot;Ciudad 2&quot;</p>
                  <p><span className='text-green-300'>&quot;cuntry&quot;</span>: &quot;Pais 3&quot;</p>
                  <p><span className='text-green-300'>&quot;postalCode&quot;</span>: &quot;1234&quot;</p>
              </div>
              <p>&#125;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home