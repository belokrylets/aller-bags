import Navbars from './components/navbars/Navbars';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/mainPage/MainPage';
import Footer from './components/footer/Footer';
import Catalog from './components/catalog/Catalog';

function App() {
  return (
    <Router>
      <Navbars />
      <Routes>
        <Route path="/" element={<MainPage />} />
         <Route path="catalog" element={<Catalog />} />
        {/* <Route path="contacts" element={<Contacts />} />
        <Route path="projects" element={<Projects />} />
        <Route path="404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate replace to='/404' />} />  */}
      </Routes>
      <Footer />
    </Router>  );
}

export default App;
