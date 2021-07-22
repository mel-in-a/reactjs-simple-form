import "./App.css";
import "./Margin-padding-bootstrap.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// font awesome example
// link : https://apollo.lereacteur.io/course/5f3e73f7ac3b9c0017f4e8d6/60c87cc1b8f3860017db4a3f
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";
library.add(faSpaceShuttle);

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const[result, setResult] = useState("");

  const handleSubmit = (event) => {
    // annuler le comportement par défaut d'un formulaire à sa soumission
    // annule le rafraîchissement de la page
    event.preventDefault();

    // eslint-disable-next-line no-unused-expressions
    password !== password2 ? setResult(<div className="alert">Les mots de passe doivent être identiques</div>) : '';
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="mini-container">
          <h2>Create account</h2>
          <div className="form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(event) => {
                setName(event.target.value);
              }}
              required
            />
            <div className="spacer"></div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required
            />
            <div className="spacer"></div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              required
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <div className="spacer"></div>
            <label htmlFor="password2">Confirm your password</label>
            <input
              type="password"
              name="password2"
              value={password2}
              placeholder="Password confirmation"
              onChange={(event) => {
                setPassword2(event.target.value);
              }}
              required
            />
            <div className="spacer"></div>
            {result}
            <button type="submit" className="submit">
              Register
            </button>
           
          </form>
          </div> 
          {/* end form */}
        <div className="results">
          <h2>Results</h2>
          <div className="box">
              <p>Name : {name}</p>
              <p>Email : {email}</p>
              <p>Password : {password}</p>
            
          </div>
          <button className="edit">Edit your information</button>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
