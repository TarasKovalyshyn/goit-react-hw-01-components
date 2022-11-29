import PropTypes from 'prop-types';
import css from './transactions.module.css'
export const Transactions = ({ items }) => {
  return (
    <div>
      <table className={css.transactions_history}>
        <thead className={css.thead}>
          <tr>
            <th className={css.title}>Type</th>
            <th className={css.title}>Amount</th>
            <th className={css.title}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr className={css.line}key={id}>
              <td className={css.value_title}>{type}</td>
              <td className={css.value}>{amount}</td>
              <td className={css.value}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
