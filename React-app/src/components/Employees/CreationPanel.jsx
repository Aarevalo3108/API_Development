import PropTypes from 'prop-types';
import Button from "../BaseItems/Button";
import InitialEmployee from "../../constants/InitialFormData";
import handleChange from '../BaseItems/handleChange';

const CreationPanel = ({ formData, setFormData, setOptions,setPanel,update,setUpdate}) => {
  return (
  <div className="fixed top-0 left-0 z-50 bg-white rounded-lg p-4 flex flex-col gap-4 m-2 opacity-70 focus:opacity-100 hover:opacity-100 transition ease-in-out duration-300">
    <h3 className="text-xl text-center tracking-wide font-bold col-span-2">Datos personales</h3>
    <form className="flex flex-col gap-4 justify-center items-center" action="" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="w-fit">Nombre:</label>
          <input name="name" type="text" className="text-sm w-18 h-6 border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.name} onChange={(e) => handleChange('name', e.target.value, setFormData)}></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Apellido:</label>
          <input name="lastName" type="text" className="w-18 h-6 border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.lastname} onChange={(e) => handleChange('lastname', e.target.value, setFormData)}></input>
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="salary">Salario:</label>
          <input name="salary" type="number" className="w-16 h-6 border-b-4 border-gray-300 rounded  focus:outline-none focus:border-blue-500" value={formData.salary} onChange={(e) => handleChange('salary', e.target.value, setFormData)}></input>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-2 flex flex-col justify-center">
          <label htmlFor="office">Departamento:</label>
          <input name="office" type="text" className=" col-span-2 border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.office} onChange={(e) => handleChange('office', e.target.value, setFormData)}></input>
        </div>
        <div className="col-span-4 flex flex-col">
          <div className="flex">
            <label htmlFor="INdate" className="w-full">Hora de entrada:</label>
            <input name="INdate" type="time" className="col-span-2 w-48 border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.INdate} onChange={(e) => handleChange('INdate', e.target.value, setFormData)}></input>
          </div>
          <div className="flex">
            <label htmlFor="OUTdate" className="w-full">Hora de salida:</label>
            <input name="OUTdate" type="time" className="col-span-2 w-48 border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.OUTdate} onChange={(e) => handleChange('OUTdate', e.target.value, setFormData)}></input>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-5/6">
        <label htmlFor="number">Numero de Telefono:</label>
        <input name="number" type="number" className="w-40 border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.number} onChange={(e) => handleChange('number', e.target.value, setFormData)}></input>
      </div>
      <div className="flex justify-between w-5/6">
        <label htmlFor="email">Correo Electronico:</label>
        <input name="email" type="email" className="w-40 border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.email} onChange={(e) => handleChange('email', e.target.value, setFormData)}></input>
      </div>
      <h4 className="col-span-3 font-bold">Direccion:</h4>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex gap-4">
          <label htmlFor="street">Calle:</label>
          <input name="street" type="text" className=" w-full border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.address.street} onChange={(e) => handleChange('address.street', e.target.value, setFormData)}></input>
        </div>
        <div className="flex gap-4">
          <label htmlFor="city">Ciudad:</label>
          <input name="city" type="text" className=" w-full border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.address.city} onChange={(e) => handleChange('address.city', e.target.value, setFormData)}></input>
        </div>
        <div className="flex gap-4">
          <label htmlFor="country">Pais:</label>
          <input name="country" type="text" className=" w-full border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.address.country} onChange={(e) => handleChange('address.country', e.target.value, setFormData)}></input>
        </div>
        <div className="flex gap-4">
          <label htmlFor="postalCode" className="whitespace-nowrap">Codigo Postal:</label>
          <input name="postalCode" type="text" className=" w-full border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.address.postalCode} onChange={(e) => handleChange('address.postalCode', e.target.value, setFormData)}></input>
        </div>
      </div>
      <div className="flex gap-4">
        <Button className="w-24 h-8 bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded flex justify-center items-center" onClick={() => setFormData(InitialEmployee) }>Limpiar</Button>
        <Button className="w-24 h-8 bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded flex justify-center items-center" onClick={() => setPanel(0)}>Cancelar</Button>
        {!update &&
        <Button className="w-24 h-8 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded flex justify-center items-center" onClick={() => {setOptions({choice: 2}); setPanel(0)}}>Crear</Button>
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
  setUpdate: PropTypes.func
}

export default CreationPanel



