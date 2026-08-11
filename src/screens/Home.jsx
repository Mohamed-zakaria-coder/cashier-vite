import { useEffect, useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import Data, { categories } from "../Data";
import Pizza from "../components/Pizza";
import Modal from "../components/Modal";
import ShowOrderMenu from "../components/ShowOrderMenu";

const Home = () => {
  const [category, setCategory] = useState(1);
  const [search, setSearch] = useState("");
  const [billProducts, setBillProducts] = useState([]);
  const [showBill, setShowBill] = useState(false);
  const [showOrderMenu, setShowOrderMenu] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedPrice, setSelectedPrice] = useState(0);

  const products = useMemo(() => {
    const query = search.trim().toLowerCase();
    return Data.filter((product) => query.length > 0 ? product.name.toLowerCase().includes(query) : product.category_id === category);
  }, [category, search]);

  useEffect(() => { setShowOrderMenu(false); }, [category]);

  const handleOpenBill = (id) => {
    const pizza = Data.find((item) => item.id === id);
    setSelectedPizza(pizza);
    setSelectedPrice(pizza.size[0].price);
    setSelectedQuantity(1);
    setShowBill(true);
  };

  const saveInLocal = () => {
    const bills = JSON.parse(localStorage.getItem("bills") || "[]");
    const productsToSave = billProducts.map((product) => ({ ...product, quantity: Number(product.quantity), price: Number(product.price), total: Number(product.total) }));
    localStorage.setItem("bills", JSON.stringify([...bills, { date: new Date().toISOString(), products: productsToSave }]));
  };

  return (
    <main className="grow">
      <div className="menu-category-parent">
        <div><p className="section-kicker">Point of sale</p><h1 className="section-title">Build an order</h1></div>
        <div className="menu-input-parent"><div className="search-parent"><input className="input" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search menu" aria-label="Search menu" />{!search && <FiSearch className="search-icon" aria-hidden="true" />}</div></div>
      </div>
      <div className="categories-parent" aria-label="Menu categories">
        {categories.map((cat) => <button type="button" key={cat.id} className="each-category" onClick={() => { setCategory(cat.id); setSearch(""); }}>{cat.icon}<span>{cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}</span></button>)}
      </div>
      <div className="choose-sort-parent"><h2 className="choose-order">{search ? `Results for “${search}”` : "Choose an item"}</h2><span className="muted">{products.length} items</span></div>
      <div className="pizza-container">{products.length ? products.map((item) => <Pizza key={item.id} {...{ id: item.id, name: item.name, img: item.Image, size: item.size, click: handleOpenBill }} />) : <div className="empty-menu">No menu items match your search.</div>}</div>
      <button type="button" className="out-line-parent" onClick={() => setShowOrderMenu((prev) => !prev)} aria-label="Toggle current order"><TiShoppingCart className="out-line-menu" /><span className="order-toggle-count">{billProducts.length}</span></button>
      <div className={`show-ordermenu-parent ${showOrderMenu ? "open" : ""}`}><ShowOrderMenu billProducts={billProducts} setBillProducts={setBillProducts} charge={() => setBillProducts([])} saveInLocal={saveInLocal} closeOrderMenu={() => setShowOrderMenu(false)} /></div>
      {showBill && selectedPizza && <Modal selectedPizza={selectedPizza} selectedPrice={selectedPrice} selectedQuantity={selectedQuantity} handleChangePrice={(event) => setSelectedPrice(Number(event.target.value))} handleChange={(event) => setSelectedQuantity(Number(event.target.value))} handleClose={() => setShowBill(false)} setBillProducts={setBillProducts} setShowBill={setShowBill} />}
    </main>
  );
};

export default Home;
