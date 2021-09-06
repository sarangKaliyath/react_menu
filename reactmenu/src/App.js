import JoinUs from "./components/JoinUs";
import Login from "./components/Login";
import Search from "./components/Search";
import Home from "./components/Home";
import Settings from "./components/Settings";
import ContactUs from "./components/ContactUs";
import Help from "./components/Help";
import Download from "./components/Download";
import "./App.css";


function App() {
    return (
      <div className="grid">
        <div className="gridColumn">
          <JoinUs className="joinUs" />
          <Login/>
          <Search />
          <Home />
        </div>

        <div className="gridColumn">
          <Settings />
          <ContactUs />
          <Help />
          <Download />
        </div>
      </div>
    );
    
}

export default App;
