import React from "react";
import AppRouter from "./router";
import Footer from './components/footer.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
         HOLA APP
        </p>
      </header>
      <AppRouter />
      <Footer />

    </div>
  );
}

export default App;
