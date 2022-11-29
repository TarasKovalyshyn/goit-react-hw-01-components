import PropTypes from 'prop-types';
import css from './friends.module.css'
export const Friends = ({ items }) => {
  return (
    <ul>
      {items.map(({ avatar, name, isOnline, id }) => (
        <li className={css.item} key={id}>
          <span className={isOnline ? css.online : css.offline}>{isOnline}</span>
          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

Friends.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
