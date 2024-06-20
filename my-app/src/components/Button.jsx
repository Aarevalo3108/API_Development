import PropTypes from 'prop-types';

const Button = (items = {disabled : false}) => {
  return (
    <button
      className={`${items.className} shadow-md hover:text-slate-200 font-medium transition ease-in-out duration-300 rounded-lg py-2 px-4 rounded}`}
      onClick={items.onClick}
      disabled={items.disabled}
    >
      {items.children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  disabled: PropTypes.bool
}

export default Button;

