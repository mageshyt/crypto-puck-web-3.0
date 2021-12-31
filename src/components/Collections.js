import React, { useEffect, useState } from "react";
import CollectionCard from "./CollectionCard";
const Collections = ({ SetselectedPunk, collections }) => {
  console.log();
  return (
    <div className="flex overscroll-auto mt-5 pb-5 border-b-2 ">
      {collections.map((collection) => (
        <div
          key={collection.id}
          onClick={() => SetselectedPunk(collection.token_id)}
        >
          <CollectionCard
            key={collection.id}
            name={collection.name}
            image={collection.image_url}
            id={collection.id}
            traits={collection.traits}
          />
        </div>
      ))}
    </div>
  );
};

export default Collections;
// https://testnets-api.opensea.io/assets?asset_contract_address=0xe67d46D51c7b9381EB3Adf7DeDa8895d864ac5cB&order_direction=asc
