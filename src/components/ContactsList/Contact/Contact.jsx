import { PropTypes } from 'prop-types';
import css from './Contact.module.css';

export const Contact = ({ contact: { id, name, number }, onDelete }) => {
  const handleClick = () => onDelete(id);

  return (
    <li className={css.listItem}>
      <ul className={css.listItem}>
        <p>{name}:</p>
        <p>{number}</p>
      </ul>
      <button type="button" onClick={handleClick}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};