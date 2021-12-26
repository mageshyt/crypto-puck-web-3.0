import "./App.css";
import Header from "./components/Header";
import puckLogo from "./assets/header/cryptopunk-logo.png";
import Collections from "./components/Collections";
function App() {
  return (
    <div className="bg-[#040303] p-[20px]  App">
      <Header puckLogo={puckLogo} />
      <Collections />
    </div>
  );
}

export default App;
