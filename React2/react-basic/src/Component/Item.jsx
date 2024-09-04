export default function Item() {

    const item = 'Rent';
    const cost = '2500'

  return (
    <>
      <li className="bg-white shadow-md shadow-black/15 p-3 m-1 flex justify-between">
        {item}<span> {cost} </span> THB
      </li>
    </>
  );
}


//className="bg-white shadow-md shadow-black/15 p-15 m-1 flex justify-between