import { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  const [sider, setSider] = useState(false);

  return (
    <div className="layout-cont" onClick={() => setSider(false)}>
      <Sidebar sider={sider} close={() => setSider(false)} />

      <div
        className="content"
        onClick={() => {
          setSider(false);
        }}>
        <Header openSide={() => setSider(true)} />

        {children}
      </div>
    </div>
  );
};

export default Layout;
