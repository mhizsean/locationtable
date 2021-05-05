import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Overview from "./pages/Overview";
import AddContact from "./pages/AddContact";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Layout {...props}>
                <Overview />
              </Layout>
            )}
          />
          <Route
            path="/add-contact"
            exact
            render={(props) => (
              <Layout {...props}>
                <AddContact />
              </Layout>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
