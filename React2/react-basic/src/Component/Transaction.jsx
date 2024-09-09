import Item from "./Item";
// import "./Transaction.css";

export default function Transaction(props) {
  const { items } = props;

  return (
    <>
      <div className="w-1/4">
        <div className="item-list list-none p-0 mb-40">
          {items.map((e) => {
            return <Item key={e.id} {...e} />;
          })}
        </div>
      </div>
    </>
  );
}

//list-none p-0 mb-40
