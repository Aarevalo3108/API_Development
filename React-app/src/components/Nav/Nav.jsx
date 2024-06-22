import NavIcon from "./NavIcon"
const Nav = () => {
  return (
    <nav className="flex justify-around items-center gap-1 shadow-md font-bold text-lg">
      <NavIcon href="./" content="Inicio" />
      <NavIcon href="./employees" content="Empleados" />
      <NavIcon href="./departments" content="Departamentos" />
    </nav>
  )
}

export default Nav