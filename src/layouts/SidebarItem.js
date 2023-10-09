import React, { useState } from "react";
import { Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({item}) => {
  let location = useLocation();
  const [type, setType] = useState("");
  
  if(item.type === type){
    return (
      <div className="p-2">
        <div onClick={() => setType("")}>
          <i className={item.icon}></i>
          <span className="ms-3 d-inline-block">{item.title}</span>
        </div>
        <div className="pt-2">
          <Nav vertical className="sidebarNav">
            {item.childrens.map((navi, index) => (
              <NavItem key={index} className="sidenav-bg">
                <Link
                  to={navi.href}
                  className={
                    location.pathname === navi.href ? "text-primary nav-link py-2" : "nav-link text-secondary py-2"
                  }
                >
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </Link>
              </NavItem>
            ))}
          </Nav>
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-2">
        <div onClick={() => setType(item.type)}>
          <i className={item.icon}></i>
          <span className="ms-3 d-inline-block">{item.title}</span>
        </div>
      </div>
    );
  }
};

export default Sidebar;
