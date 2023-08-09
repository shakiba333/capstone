import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import ProductList from "../../components/ProductList/ProductList";

import Home from "../Home/Home";
import * as itemsAPI from "../../utilities/items-api";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [productItems, setProductItems] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const categoriesRef = useRef([]);

  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [
        ...new Set(items.map((item) => item.category.name)),
      ];
      setProductItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();
  }, []);
  return (
    <main className="App">
      <NavBar
        user={user}
        setUser={setUser}
        categories={categoriesRef.current}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
      />
      <ProductList
        productItems={productItems.filter(
          (item) => item.category.name === activeCat
        )}
      />
      <>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/auth"
            element={<AuthPage user={user} setUser={setUser} />}
          />
        </Routes>
      </>
    </main>
  );
}
