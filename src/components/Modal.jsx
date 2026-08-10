const Modal = ({ selectedPizza, selectedPrice, selectedQuantity, handleChangePrice, handleChange, handleClose, setBillProducts, setShowBill }) => {
  const name = selectedPizza.name.charAt(0).toUpperCase() + selectedPizza.name.slice(1);
  const total = selectedQuantity * selectedPrice;

  return (
    <div className="modal-container" role="presentation" onClick={handleClose}>
      <div className="one" role="dialog" aria-modal="true" aria-labelledby="product-title" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="close" onClick={handleClose} aria-label="Close product details">×</button>
        <div className="img-container"><img src={selectedPizza.Image} className="small-img" alt={name} /></div>
        <h2 id="product-title" className="head-name">{name}</h2>
        <label className="muted" htmlFor="size">Size</label>
        <select id="size" onChange={handleChangePrice} className="select" value={selectedPrice}>
          {selectedPizza.size.map((option) => <option key={`${selectedPizza.id}-${option.name}`} value={option.price}>{option.name} — {option.price}$</option>)}
        </select>
        <label className="muted" htmlFor="quantity">Quantity</label>
        <select id="quantity" className="select-number" onChange={handleChange} value={selectedQuantity}>
          {[1, 2, 3].map((quantity) => <option key={quantity} value={quantity}>{quantity}</option>)}
        </select>
        <div className="total-container"><span>Total</span><span>{total.toFixed(2)}$</span></div>
        <button className="add-product" onClick={() => { setBillProducts((prev) => [...prev, { product_id: selectedPizza.id, quantity: Number(selectedQuantity), price: Number(selectedPrice), total }]); setShowBill(false); }}>Add to order</button>
      </div>
    </div>
  );
};

export default Modal;
