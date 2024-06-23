import PropTypes from 'prop-types';
import Button from "./Button";


const ButtonsPanel = ({setOptions, setPages, setPanel, setUpdate, setErase, setSearch, search}) => {
  return(
  <div className="grid grid-cols-2 sm:grid-cols-3 sm:text-md lg:text-lg lg:font-bold lg:grid-cols-6 gap-2 lg:gap-4 p-4 lg:sticky lg:top-0">
    <Button onClick={() => {setOptions({choice : 0});setPages(1)}} className="bg-orange-500 hover:bg-orange-600">Ver Todos</Button>
    <Button onClick={() => {setPanel(1);setUpdate(false);setErase(false)}} className="bg-lime-500 hover:bg-lime-600">Busqueda por ID</Button>
    <Button onClick={() => {setPanel(2);}} className="bg-emerald-500 hover:bg-emerald-600">Crear</Button>
    <Button onClick={() => {setPanel(1);setErase(true);setUpdate(false)}} className="bg-cyan-500 hover:bg-cyan-600">Eliminar</Button>
    <Button onClick={() => {setPanel(1);setUpdate(true);setErase(false)}} className="bg-blue-500 hover:bg-blue-600">Actualizar</Button>
    <Button onClick={() => setSearch(!search)} className="bg-green-500 hover:bg-green-600">Buscar</Button>
  </div>
  )

}

ButtonsPanel.propTypes = {
  setOptions: PropTypes.func,
  setPages: PropTypes.func,
  setPanel: PropTypes.func,
  setUpdate: PropTypes.func,
  setErase: PropTypes.func,
  setSearch: PropTypes.func,
  search: PropTypes.bool
}

export default ButtonsPanel