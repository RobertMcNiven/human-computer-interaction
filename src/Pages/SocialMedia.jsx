import React from "react";
import LICard from "./Components/LI";
import GHCard from "./Components/GH";

const SocialMedia = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems: 'center', 
      gap: '20px',
      margin: '20px',
    }}>
      <LICard />
      <GHCard />
    </div>
  );
};

export default SocialMedia;
