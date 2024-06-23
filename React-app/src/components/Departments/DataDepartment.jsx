
const imgURL = "https://picsum.photos/200"
const DataDepartment = (items) => {
  const isActive = items.isActive ? "Si" : "No";
  return (
    <div className="flex flex-col items-center p-4 gap-2 shadow-md rounded-lg border">
      <div className="flex items-center justify-around w-full">
        <h3 className="text-xl font-bold text-center">* {items.name}</h3>
        <img className="w-32 h-32 border-2 rounded shadow-lg" src={`${imgURL}?random=${items._id}`} alt={items.name} />
      </div>
      <div> 
        <p><span className="font-bold">ID: </span>{items._id}</p>
        <p><span className="font-bold">Descripción: </span>{items.description}</p>
        <p><span className="font-bold">Activo: </span>{isActive}</p>
      </div>
    </div>
  )
}

export default DataDepartment