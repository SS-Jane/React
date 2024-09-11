import PropTypes from "prop-types";

export default function Item(props) {
  const { title, amount } = props;
  const expense = "bg-red-300 block w-full shadow-md shadow-black/15 my-1 px-2 py-2 flex justify-between border rounded-md";
  const income ="bg-green-300 block shadow-md shadow-black/15 my-1 px-2 py-2 flex justify-between border rounded-md";
  const statusItem = amount < 0 ? expense:income;

  function formatNumber(number, locale = 'en-US', options = {}) {
    return new Intl.NumberFormat(locale, options).format(number);
  }

  
  return (
    <div>
      <li className={statusItem}>
        {title}
        <span>{formatNumber(amount)} THB</span>
      </li>
    </div>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
