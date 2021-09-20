import React from "react";
import "./Header.css";

import { HeaderLeft } from "./HeaderLeft";
import  { HeaderRight }  from "./HeaderRight";

export const Header = () => {
  return (
    <div className="header">
     <HeaderLeft/>
      <HeaderRight/>
    </div>
  );
};
