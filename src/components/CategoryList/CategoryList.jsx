import { Link } from "react-router-dom";
import "./CategoryList.css";

export default function CategoryList({ categories, activeCat, setActiveCat }) {
  const cats = categories.map((cat) => (
    <Link
      key={cat}
      to={`/categories/${cat}`}
      className={cat === activeCat ? "active" : "notActive"}
      onClick={() => setActiveCat(cat)}
    >
      &nbsp;{cat} &nbsp; |
    </Link>
  ));
  return <>{cats}</>;
}
