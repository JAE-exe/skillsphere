import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DualLogin from "./pages/DualLogin";
import ProviderHomePage from "./pages/ProviderHomePage";
import StudentHomepage from "./pages/StudentHomepage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={DualLogin} />
        <Route path="/provider-home" component={ProviderHomePage} />
        <Route path="/student-home" component={StudentHomepage} />
      </Switch>
    </Router>
  );
}

export default App;
