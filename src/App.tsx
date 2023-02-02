import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUsPage from "./AboutUsPage/AboutUsPage";
import Header from "./Components/Header";
import MessageBox from "./HomePage/Components/MessageBox";
import HomePage from "./HomePage/HomePage";
import PortFolioPage from "./PortFolioPage/PortFolioPage";
import ProjectPage from "./ProjectPage/ProjectPage";

const routes = [
  { path: '/', component: <HomePage /> },
  { path: '/about', component: <AboutUsPage/> },
  { path: '/portfolio', component: <PortFolioPage/> },
  { path: '/Project', component: <ProjectPage/> }
]

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
            {
                routes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.component} />
                ))
            }
        </Routes>
      <MessageBox/>
      </BrowserRouter>
    </div>
  );
}

export default App;
