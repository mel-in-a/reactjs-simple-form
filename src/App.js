import "./App.css";
import "./Margin-padding-bootstrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// font awesome example
// link : https://apollo.lereacteur.io/course/5f3e73f7ac3b9c0017f4e8d6/60c87cc1b8f3860017db4a3f
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons';
library.add(faSpaceShuttle);





function App() {
  return (
    <div>
      <Header />
      <div className="container">
      <h1>Au boulot :)</h1>
      </div>
 
      <Footer />
    </div>
  );
}

export default App;
