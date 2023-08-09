import "./ProductListItem.css";

export default function ProductListItem({ productItem }) {
  return (
    <div>
      <div>{productItem.details}</div>
      <div>{productItem.name}</div>
      <img src={productItem.image}></img>
      <div>
        <span>${productItem.price.toFixed(2)}</span>
        <button onClick={() => console.log("clicked")}>ADD</button>
      </div>
    </div>
  );
}
