import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Root from './pages/Root';
import ProductsRoot from './pages/products/ProductsRoot';
import JRPGS from './pages/products/JRPGS';
import Anime from './pages/products/Anime';
import './App.css';



const router = createBrowserRouter([
  {path: '/', element: <Root />, children: [
    {index: true, element: <Home /> },
    {path: 'contact', element: <Contact />},
    {path: 'products', element: <ProductsRoot/>, children: [
      {index: true, element: <Products />},
      {path: 'jrpgs', element: <JRPGS />},
      {path: 'anime', element: <Anime />}
    ]},
  ]}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
