import PropTypes from 'prop-types';


export default function Item(props) {
  const { title, amount } = props;

  return (
    <>
      <li className="bg-white shadow-md shadow-black/15 p-3 m-1 flex justify-between">
        {title}
        <span>{amount} THB</span>
      </li>
    </>
  );
}

Item.propTypes ={
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}
