import NavIcon from "./NavIcon"
const Nav = () => {
  return (
    <nav className="flex justify-around md:justify-evenly items-center shadow-md font-bold sm:text-lg md:text-xl">
      <NavIcon href="./" content="Inicio" />
      <NavIcon href="./employees" content="Empleados" />
      <NavIcon href="./departments" content="Departamentos" />
    </nav>
  )
}

export default Nav