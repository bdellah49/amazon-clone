import React from 'react'
import "./styles/body.css";
import SubMenu from "./SubMenu.js";
const menu_elements = [
  {
    digital_content_devices: {
      title: "Digital Content & Devices",
      elements: [{Amazon_Music:'Amazon Music'},'Amazon Appstore'],
    },
  },
  { shop_by_dep: { title: "Shop By Department", elements: [] } },
  { prog_feat: { title: "Programs & Features", elements: [] } },
];

function Body() {
  return (
    <div className="Body">
      {menu_elements.map((element) => {
        console.log(Object.values (element)[0].elements);
        return (
            <div className={Object.keys(element)}>
                <div className="title">
                    {Object.values(element)[0].title}
                </div>
                <SubMenu
                content = {Object.values(element)[0].elements}
          />
            </div>
          
        );
      })}
    </div>
  );
}

export default Body