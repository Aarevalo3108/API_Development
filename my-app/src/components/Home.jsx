import Base from './Base'

const Home = () => {
  return (
    <>
    <Base title="Bienvenido" content="Desde aqui puedes navegar entre las distintas paginas."/>
    <div className="flex flex-col justify-center p-4 m-4 gap-6 shadow-md rounded-lg">
      <h2 className="text-2xl tracking-wide font-bold ml-4">Informacion.</h2>
      <p className="text-md text-justify">Este proyecto consiste en un ejercicio para practicar NodeJS. El ejercicio trata del manejo de personal de una empresa mediante API.</p>
      <p className="text-md text-justify">La API se ejecuta de manera local y se encuentra en el repositorio. Fuera de la carpeta &quot;my-app&quot;.</p>
    </div>
    </>
  )
}

export default Home