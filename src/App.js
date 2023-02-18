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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Header />
              <>
                <Routes>
                  <Route path="/InformationSite" element={<Main />}></Route>
                  <Route
                    path="/InformationSite/aboutUs"
                    element={<AboutUs />}
                  ></Route>
                  <Route
                    path="/InformationSite/news"
                    element={<News />}
                  ></Route>
                  <Route
                    path="/InformationSite/services"
                    element={<Services />}
                  ></Route>
                  <Route
                    path="/InformationSite/ourWork"
                    element={<OurWork />}
                  ></Route>
                  <Route
                    path="/InformationSite/contacts"
                    element={<Contacts />}
                  ></Route>
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
