import React, { useEffect, useState } from "react";
import CollectionCard from "./CollectionCard";
import axios from "axios";
const Collections = () => {
  //  pulling the data from opensea
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    const get_My_NFT = async () => {
      const opensea = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x6141f9Fc42683EE93B609bDF6BEF5c898A00FFA1&order_direction=asc"
      );
      console.log(opensea.data.assets);
      setCollections(opensea.data.assets);
    };
    return get_My_NFT();
  }, []);

  return (
    <div className="flex overscroll-auto mt-5 pb-5 border-b-2 ">
      {collections.map((collection) => (
        <CollectionCard
          key={collection.id}
          name={collection.name}
          image={collection.image_url}
          id={collection.id}
          traits={collection.traits}
        />
      ))}
    </div>
  );
};

export default Collections;
// https://testnets-api.opensea.io/assets?asset_contract_address=0xe67d46D51c7b9381EB3Adf7DeDa8895d864ac5cB&order_direction=asc
