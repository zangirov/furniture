import PageWrapper from "./components/PagesWrapper";
import { Routes, Route, useLocation } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Privacy from "./components/Footer/components/Documents/components/Privacy";
import GallerySidebar from "./components/Gallery/Sidebar/Sidebar";
// import Modal from "./components/Gallery/Modal/Modal";
import Gallery from "./pages/Gallery";
import Modal from "./components/Gallery/Modal/Modal";

// import Contacts from './pages/Contacts/Contacts';
// import Main from './pages/MainPage/MainPage';
// import Condition from './pages/InfoPage/Condition';
// import GalleryPage from './pages/Gallery/GalleryPage';
// import Form from './components/Form/Form';
// import GallerySidebar from './pages/GallerySidebarPage';
// import Gallery from './components/Gallery/Gallery';
// import Container from './components/Gallery2/Container';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          {/* <Route path="contacts" element={<Contacts />} /> */}
          <Route index element={<MainPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/adele-nn" element={<AboutUs />} />
          <Route path="/gallery/" element={<Gallery />}>
            <Route path=":type" element={<GallerySidebar />}>
              <Route path=":id" element={<Modal />} />
            </Route>
          </Route>
          {/* <Route path="gallery" element={<Container />}>
          <Route path=":type" element={<GallerySidebar />}> */}
          {/* <Route path=":id" element={<Modal />} /> */}
          {/* </Route> */}
          {/* </Route>
        <Route path="*" element={<h1>Ничего не найдено</h1>} />
        {/* <Route path="condition" element={<Condition />} />
        <Route path="form" element={<Form />}>
          <Route path="form/upload" element={<Form />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
