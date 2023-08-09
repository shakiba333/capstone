import "./ProductList.css";
import ProductListItem from "../ProductListItem/ProductListItem";

export default function ProductList({ productItems }) {
  const items = productItems.map((item) => (
    <ProductListItem key={item._id} productItem={item} />
  ));
  return <main className="ProductList">{items}</main>;
}
