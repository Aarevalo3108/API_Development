
import Button from "./Button";
import PropTypes from 'prop-types';


const NextPrev = ({item, pages, setPages}) => {
  return (
    <div className="grid grid-cols-2 gap-4 justify-items-center">
      {item.totalPages && <><p className="text-center"><span className="font-bold">Total Paginas:</span> {item.totalPages}</p><p className="text-center"><span className="font-bold">Pagina:</span> {pages}</p></>}
      {item.docs && pages == 1 && <Button className="w-28 bg-cyan-700 text-white font-bold py-2 px-4 rounded cursor-not-allowed" onClick={() => {setPages(pages + 1)}} disabled={true}>Anterior</Button>}
      {pages > 1 && <Button className="w-28 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setPages(pages - 1)}}>Anterior</Button>}
      {pages < item.totalPages && <Button className="w-28 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setPages(pages + 1)}}>Siguiente</Button>}
      {pages == item.totalPages && <Button className="w-28 bg-cyan-700 text-white font-bold py-2 px-4 rounded cursor-not-allowed" onClick={() => {setPages(pages - 1)}} disabled={true}>Siguiente</Button>}
    </div>
  );
}

NextPrev.propTypes = {
  item: PropTypes.object,
  pages: PropTypes.number,
  setPages: PropTypes.func
}

export default NextPrev
