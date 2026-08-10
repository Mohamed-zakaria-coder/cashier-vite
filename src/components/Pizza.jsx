const Pizza = ({ click, id, name, img, size }) => (
  <button type="button" className="pizza-parent" onClick={() => click(id)} aria-label={`Add ${name}`}>
    <div className="each">
      <div className="img-container"><img src={img} className="pizza-img" alt={name} /></div>
      <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
      <div className="name-price">
        {size.map((option) => <span key={`${id}-${option.name}`}>{option.name} · {option.price}$</span>)}
      </div>
    </div>
  </button>
);

export default Pizza;
