import "./App.scss";
import Layout from "../project/Layout";
import { BrowserRouter } from "react-router-dom";
import Router from "../../router";

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
