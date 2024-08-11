import PropTypes from 'prop-types';
const NavIcon = (items) => {
  return (
    <a href={items.href} className="flex items-center p-2 border-y-2 border-transparent hover:border-y-2 hover:border-slate-200 rounded-lg transition ease-in-out duration-300">{items.content}</a>
  );
};

NavIcon.propTypes = {
  href: PropTypes.string,
  content: PropTypes.string
}

export default NavIcon