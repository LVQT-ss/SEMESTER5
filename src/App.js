import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import { routes } from './routes/routes';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.element />} />
        ))}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
