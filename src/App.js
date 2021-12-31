import "./App.css";
import Header from "./components/Header";
import puckLogo from "./assets/header/cryptopunk-logo.png";
import Collections from "./components/Collections";
import PuckContainer from "./components/PuckContainer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // puck selected
  const [selectedPunk, setSelectedPunk] = useState(0);
  //  pulling the data from opensea
  const [punkListData, SetPunkListData] = useState([]);
  useEffect(() => {
    const get_My_NFT = async () => {
      const opensea = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x6141f9Fc42683EE93B609bDF6BEF5c898A00FFA1&order_direction=asc"
      );
      console.log(opensea.data.assets);
      SetPunkListData(opensea.data.assets);
    };
    return get_My_NFT();
  }, []);

  return (
    <div className="bg-[#040303] p-[20px]  App">
      <Header puckLogo={puckLogo} />
      {punkListData.length > 0 && (
        <>
          <PuckContainer
            selectedPunk={selectedPunk}
            punkListData={punkListData}
          />
          <Collections
            collections={punkListData}
            SetselectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
