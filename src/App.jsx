

import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portofolio from "./components/portofolio/Portofolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portofolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
