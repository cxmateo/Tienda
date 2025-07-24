import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <main className="main-content">
        <div className="container">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
            <Route path="/producto/:productoId" element={<ItemDetailContainer />} />
            <Route
              path="*"
              element={
                <div className="not-found">
                  <h2>404 - Página no encontrada</h2>
                  <p>Ups, el enlace no existe o fue eliminado.</p>
                  <a href="/" className="btn-return">Volver al inicio</a>
                </div>
              }
            />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
