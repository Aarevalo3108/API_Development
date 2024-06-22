import PropTypes from 'prop-types';
import Button from "../BaseItems/Button";
import handleChange from '../BaseItems/handleChange';
import InitialDepartment from "../../constants/InitialFormData";

const CreationPanelDepartment = ({ formData, setFormData, setOptions,setPanel,update,setUpdate}) => {
  return (
  <div className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 bg-white rounded-lg p-4 flex flex-col gap-4 m-2 opacity-70 focus:opacity-100 hover:opacity-100 transition ease-in-out duration-300">
    <h3 className="text-xl text-center tracking-wide font-bold col-span-2">Datos Depto.</h3>
    <form className="flex flex-col gap-4 justify-center items-center" action="" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 justify-between items-center">
          <label htmlFor="name" className="w-fit font-bold">Nombre:</label>
          <input name="name" type="text" className="text-sm w-full h-6 border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.name} onChange={(e) => handleChange('name', e.target.value, setFormData)}></input>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="w-fit font-bold">Descripción:</label>
          <textarea name='description' className="text-sm w-64 h-24 border-b-4 border-gray-300 rounded focus:outline-none focus:border-blue-500" value={formData.description} onChange={(e) => handleChange('description', e.target.value, setFormData)}></textarea>
        </div>
      </div>
      <div className="flex gap-4">
        <Button className="w-24 h-8 bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded flex justify-center items-center" onClick={() => setFormData(InitialDepartment) }>Limpiar</Button>
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

CreationPanelDepartment.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  setOptions: PropTypes.func,
  setPanel: PropTypes.func,
  update: PropTypes.bool,
  setUpdate: PropTypes.func
}

export default CreationPanelDepartment



