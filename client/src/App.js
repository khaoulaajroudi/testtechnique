import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import ComtactList from "./Components/ContactList/ComtactList";
import PrivateRoute from "./Components/Routs/PrivateRouts";
import Details from "./Components/Détails/Details";
import Test from "./Components/Test/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/details" element={<Details />} />
        {/* <Route path="/test/:id" element={<Test />} /> */}

        <Route element={<PrivateRoute />}>
          <Route path="/lists" element={<ComtactList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
