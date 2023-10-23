import React from 'react';
import ReactDOM from "react-dom/client";
import Home from './pages/Home';
const App = () => {
 return <Home></Home>;
 }

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);