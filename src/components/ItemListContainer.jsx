import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductos, getProductosPorCategoria } from '../data';

const ItemListContainer = () => {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchProductos = categoriaId ? getProductosPorCategoria(categoriaId) : getProductos();
    fetchProductos.then((res) => {
      setProductos(res);
      setLoading(false);
    });
  }, [categoriaId]);

  if (loading) {
    return <p className="message">Cargando productos...</p>;
  }

  return (
    <div className="container">
      <h1>{categoriaId ? `Categoría: ${categoriaId}` : 'Todos los productos'}</h1>
      <div className="product-grid">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <div className="product-card" key={producto.id}>
              <img src={producto.imagen} alt={producto.nombre} />
              <div className="product-name">{producto.nombre}</div>
              <div className="product-category">{producto.categoria}</div>
              <div className="product-price">${producto.precio}</div>
              <Link className="btn-detail" to={`/producto/${producto.id}`}>
                Ver detalle
              </Link>
            </div>
          ))
        ) : (
          <p className="message">No hay productos en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
