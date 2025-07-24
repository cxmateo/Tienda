import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductoPorId } from '../data';
import './ItemDetailContainer.css'; 

const ItemDetailContainer = () => {
  const { productoId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductoPorId(productoId).then((res) => {
      setProducto(res);
      setLoading(false);
    });
  }, [productoId]);

  if (loading) return <p className="message">Cargando detalle...</p>;
  if (!producto) return <p className="message">Producto no encontrado.</p>;

  return (
    <div className="detail-container">
      <div className="card">
        <img className="product-image" src={producto.imagen} alt={producto.nombre} />
        <div className="info">
          <h2 className="product-name">{producto.nombre}</h2>
          <p className="product-category">{producto.categoria}</p>
          <p className="product-description">{producto.descripcion}</p>
          <p className="product-price">${producto.precio}</p>
          <div className="buttons">
          <Link to="/" className="back-button">Volver a la tienda</Link>
            <Link to="" className="carrito">Añadir al carrito</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
