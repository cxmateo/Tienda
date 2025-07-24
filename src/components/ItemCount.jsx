import { useState } from 'react';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => cantidad < stock && setCantidad(cantidad + 1);
  const decrementar = () => cantidad > 1 && setCantidad(cantidad - 1);

  return (
    <div>
      <button onClick={decrementar}>-</button>
      <span>{cantidad}</span>
      <button onClick={incrementar}>+</button>
      <button onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
