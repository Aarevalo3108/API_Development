
const imgURL = "https://xsgames.co/randomusers/assets/avatars/pixel/"
const DataEmployee = (items) => {
  const isActive = items.isActive ? "Si" : "No";
  return (
    <div className="grid grid-cols-2 items-center justify-center p-4 gap-2 shadow-md rounded-lg border">
      <h3 className="text-xl font-bold text-center">{items.name}, {items.lastname}</h3>
      <img className="w-24 border-2 rounded-full shadow-lg ml-4" src={`${imgURL}${items.img}.jpg`} alt={items.name} />
      <h4 className="col-span-2"><span className="font-bold">ID: </span>{items._id}</h4>
      <p className="col-span-2"><span className="font-bold">Email:</span> {items.email}</p>
      <p className="col-span-2"><span className="font-bold">Dirrección:</span> {items.address.street}, {items.address.city}, {items.address.country}, {items.address.postalCode}.</p>
      <p><span className="font-bold block">Departamento:</span> {items.office}.</p>
      <p><span className="font-bold block">Telefono:</span> {items.number}</p>
      <p><span className="font-bold">Salario:</span> {items.salary}$</p>
      <p><span className="font-bold">Activo:</span> {isActive}</p>
      <p><span className="font-bold">hora entrada:</span> {items.INdate}</p>
      <p><span className="font-bold">hora salida:</span> {items.OUTdate}</p>
    </div>
  )
}

export default DataEmployee