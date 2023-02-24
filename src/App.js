import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import News from "./components/News";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Contacts from "./components/Contacts";
import Blur from "./components/Blur";
import NewsItemExtended from "./components/NewsItemExtended";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Blur />
              <Header />
              <>
                <Routes>
                  <Route path="/InformationSite" element={<Main />}></Route>
                  <Route path="/aboutUs" element={<AboutUs />}></Route>
                  <Route path="/news" element={<News />}></Route>
                  <Route path="/news/:NewsId" element={<NewsItemExtended />} />
                  <Route path="/services" element={<Services />}></Route>
                  <Route path="/ourWork" element={<OurWork />}></Route>
                  <Route path="/contacts" element={<Contacts />}></Route>
                </Routes>
              </>

              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
