import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderPage from './components/headerpage/HeaderPage';
import SearchForm from './components/searchform/SearchForm';
import BannerPage from './components/bannerpage/BannerPage';
import HomeStrap from './components/home__strapContainer/HomStrap';
import HomeStrapContainer from './components/homestrapcontainer/HomeStrapContainer';
import Footerpage from './components/footerpage/FooterPage';

function App() {
  return (
    <div>
      <HeaderPage />
      <BannerPage />
      <SearchForm />
      <HomeStrap />
      <HomeStrapContainer />
      <Footerpage />
    </div>
  );
}

export default App;