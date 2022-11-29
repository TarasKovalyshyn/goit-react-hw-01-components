import PropTypes from 'prop-types';
import css from "./statistics.module.css"

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ items }) => {
  return (
    <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>

      <ul className={css['stat-list']}>
        {items.map(({ id, label, percentage }) => (
          <li className={css.item} key={id} style={{
            backgroundColor: getRandomHexColor(),
          }}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
