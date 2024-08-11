import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import axios from 'axios';
import validateData from './validateData';
import Button from "./Button";
import Initial from "../../../constants/InitialFormData";
import handleChange from './handleChange';

const CreationPanel = ({ formData, setFormData, setOptions,setPanel,update,setUpdate,Criteria = "employees"}) => {

  const [departments, setDepartments] = useState([]);

  const sendData = () => {
    console.log(formData);
    if(validateData(formData,Criteria)) {
      setOptions({choice: 2});
      setPanel(0);
      setUpdate(false);
      console.log("enviando");
    }
  }

  const getDepartments = async () => {
    const response = await axios.get(`https://kk441pzp-3001.use2.devtunnels.ms/departments?limit=1000`);
    return setDepartments(response.data);
  }

  useEffect(() => {
    getDepartments();
  }, []);

  if(Criteria == "employees"){

    return (<div className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 bg-white rounded-lg p-4 flex flex-col gap-4 m-2 opacity-70 focus:opacity-100 hover:opacity-100 transition ease-in-out duration-300">
    <h3 className="text-xl text-center tracking-wide font-bold col-span-2">Datos personales</h3>
    <form className="flex flex-col gap-4 justify-center items-center" action="" onSubmit={(e) => {e.preventDefault();sendData()}}>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="w-fit">Nombre:</label>
          <input name="name" type="text" pattern='^[a-zA-Z\s]{1,30}$' required title='Solo letras y espacios' className="text-sm w-18 h-6 border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.name} onChange={(e) => handleChange('name', e.target.value, setFormData)}></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Apellido:</label>
          <input name="lastName" type="text" pattern='^[a-zA-Z\s]{1,30}$' required title='Solo letras y espacios' className="w-18 h-6 border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.lastname} onChange={(e) => handleChange('lastname', e.target.value, setFormData)}></input>
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="salary">Salario:</label>
          <input name="salary" type="number" pattern='^\d{1,5}$' required title='Solo numeros' className="w-16 h-6 border-b-4 border-gray-300 rounded  focus:outline-none focus:border-blue-500" value={formData.salary} onChange={(e) => handleChange('salary', e.target.value, setFormData)}></input>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-2 flex flex-col justify-center">
          <label htmlFor="office">Departamento:</label>
          <select name="office" required className="w-18 h-6 border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" id='office' size={1} value={formData.office} onChange={(e) => handleChange('office', e.target.value, setFormData)}>
            <option value="">Seleccionar</option>
            {departments.docs && departments.docs.map((department) => (
              <option key={department.name} value={department.name}>{department.name}</option>
            ))}
          </select>
        </div>
        <div className="col-span-4 flex flex-col">
          <div className="flex">
            <label htmlFor="INdate" className="w-full">Hora de entrada:</label>
            <input name="INdate" type="time" pattern='^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$' required title='Formato HH:MM' className="col-span-2 w-48 border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.INdate} onChange={(e) => handleChange('INdate', e.target.value, setFormData)}></input>
          </div>
          <div className="flex">
            <label htmlFor="OUTdate" className="w-full">Hora de salida:</label>
            <input name="OUTdate" type="time" pattern='^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$' required title='Formato HH:MM' className="col-span-2 w-48 border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.OUTdate} onChange={(e) => handleChange('OUTdate', e.target.value, setFormData)}></input>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-5/6">
        <label htmlFor="number">Numero de Telefono:</label>
        <input name="number" type="number" pattern='^\d{11}$' maxLength={11} required title='Solo numeros' className="w-40 border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.number} onChange={(e) => handleChange('number', e.target.value, setFormData)}></input>
      </div>
      <div className="flex justify-between w-5/6">
        <label htmlFor="email">Correo Electronico:</label>
        <input name="email" type="text" pattern='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{1,}$' required title='formato QbFjv@example.com' className="w-40 border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.email} onChange={(e) => handleChange('email', e.target.value, setFormData)}></input>
      </div>
      <h4 className="col-span-3 font-bold">Direccion:</h4>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex gap-4">
          <label htmlFor="street">Calle:</label>
          <input name="street" type="text" pattern='^[a-zA-Z\s]{1,30}$' required title='Solo letras y espacios' className=" w-full border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.address.street} onChange={(e) => handleChange('address.street', e.target.value, setFormData)}></input>
        </div>
        <div className="flex gap-4">
          <label htmlFor="city">Ciudad:</label>
          <input name="city" type="text" pattern='^[a-zA-Z\s]{1,30}$' required title='Solo letras y espacios' className=" w-full border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.address.city} onChange={(e) => handleChange('address.city', e.target.value, setFormData)}></input>
        </div>
        <div className="flex gap-4">
          <label htmlFor="country">Pais:</label>
          <input name="country" type="text" pattern='^[a-zA-Z\s]{1,30}$' required title='Solo letras y espacios' className=" w-full border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.address.country} onChange={(e) => handleChange('address.country', e.target.value, setFormData)}></input>
        </div>
        <div className="flex gap-4">
          <label htmlFor="postalCode" className="whitespace-nowrap">Codigo Postal:</label>
          <input name="postalCode" type="text" pattern='^[a-zA-Z\s\d]{1,30}$' required title='Solo letras, numeros y espacios' className=" w-full border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.address.postalCode} onChange={(e) => handleChange('address.postalCode', e.target.value, setFormData)}></input>
        </div>
      </div>
      <div className="flex gap-4">
        <Button className="w-24 h-8 bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded flex justify-center items-center" onClick={() => setFormData(Initial.employee) }>Limpiar</Button>
        <Button className="w-24 h-8 bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded flex justify-center items-center" onClick={() => setPanel(0)}>Cancelar</Button>
        {!update &&
        <input type="submit" className="w-24 h-8 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded flex justify-center items-center"></input>
        }
        {update &&
        <Button className="w-24 h-8 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded flex justify-center items-center" onClick={() => {setOptions({choice: 4}); setPanel(0); setUpdate(false)}}>Actualizar</Button>
        }
      </div>
    </form>
  </div>)
}
  else
  return (
    <div className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 bg-white rounded-lg p-4 flex flex-col gap-4 m-2 opacity-70 focus:opacity-100 hover:opacity-100 transition ease-in-out duration-300">
      <h3 className="text-xl text-center tracking-wide font-bold col-span-2">Datos Depto.</h3>
      <form className="flex flex-col gap-4 justify-center items-center" action="" onSubmit={(e) => {e.preventDefault();sendData()}}>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 justify-between items-center">
            <label htmlFor="name" className="w-fit font-bold">Nombre:</label>
            <input name="name" type="text" pattern='^[a-zA-Z\s]{1,30}$' required title='Solo letras y espacios' className="text-sm w-full h-6 border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.name} onChange={(e) => handleChange('name', e.target.value, setFormData)}></input>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="w-fit font-bold">Descripción:</label>
            <textarea name='description' pattern="^[a-zA-Z0-9\s.,'-]{1,300}$" required title='Solo letras, espacios, comillas, puntos y guiones' className="text-sm w-64 h-24 border-4 p-2 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.description} onChange={(e) => handleChange('description', e.target.value, setFormData)}></textarea>
          </div>
        </div>
        <div className="flex gap-4">
          <Button className="w-24 h-8 bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded flex justify-center items-center" onClick={() => setFormData(Initial.department) }>Limpiar</Button>
          <Button className="w-24 h-8 bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded flex justify-center items-center" onClick={() => setPanel(0)}>Cancelar</Button>
          {!update &&
          <input type="submit" className="w-24 h-8 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded text-center cursor-pointer"></input>
          }
          {update &&
          <Button className="w-24 h-8 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded flex justify-center items-center" onClick={() => {setOptions({choice: 4}); setPanel(0); setUpdate(false)}}>Actualizar</Button>
          }
        </div>
      </form>
    </div>
    )
}

CreationPanel.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  setOptions: PropTypes.func,
  setPanel: PropTypes.func,
  update: PropTypes.bool,
  setUpdate: PropTypes.func,
  Criteria: PropTypes.string
}

export default CreationPanel



