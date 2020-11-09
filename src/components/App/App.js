import "./App.scss";
import Layout from "../project/Layout";
import { BrowserRouter } from "react-router-dom";
import Router from "../../router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
