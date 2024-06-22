import PropTypes from 'prop-types'
const Base = (items) => {
  return (
  <div className="flex flex-col items-center justify-center p-4 m-4 gap-6 shadow-md rounded-lg">
    <h1 className="text-4xl tracking-wide font-bold my-32">{items.title}</h1>
    <p className="text-md text-justify">{items.content}</p>
  </div>
  )
}

Base.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
}

export default Base