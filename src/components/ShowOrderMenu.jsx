import Data from "../Data";

const ShowOrderMenu = ({ billProducts, charge, saveInLocal }) => {
  const products = [...billProducts].reverse();
  const total = billProducts.reduce((sum, product) => sum + Number(product.total), 0);

  return (
    <section className="menu-container" aria-label="Current order">
      <div className="menu-header">
        <p>Current order</p>
        <span className="order-count">{billProducts.length} {billProducts.length === 1 ? "item" : "items"}</span>
      </div>
      <div className="menu-content">
        {products.length === 0 ? <div className="empty-cart">Your order is empty.<br />Select an item to get started.</div> : products.map((bill, index) => {
          const product = Data.find((item) => item.id === bill.product_id);
          return (
            <div className="each-order" key={`${bill.product_id}-${index}`}>
              <img src={product?.Image} className="menu-img" alt={product?.name || "Product"} />
              <div className="order-name-container">
                <p className="order-name">{product?.name}</p>
                <div className="order-price">{bill.price}$ each</div>
              </div>
              <div className="total-each-price"><span className="quantity">×{bill.quantity}</span>{bill.total}$</div>
            </div>
          );
        })}
      </div>
      <div className="total-price-container"><div>Subtotal</div><div>{total.toFixed(2)}$</div></div>
      <button className="charge-btn" disabled={!billProducts.length} onClick={() => { if (billProducts.length) { saveInLocal(); charge(); } }}>
        Charge {total.toFixed(2)}$
      </button>
    </section>
  );
};

export default ShowOrderMenu;
