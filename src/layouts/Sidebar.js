import { Nav } from "reactstrap";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

const navigation = [
  {
    title: "기술경력",
    icon: "bi bi-card-text",
    childrens: [
      {title : "경력조회", href : "/careerskills"},
      {title : "경력등록", href : "/careersave"}
    ],
    type : "A"
  },
  {
    title: "Dashboard",
    icon: "bi bi-speedometer2",
    childrens: [
      {title : "Dashboard", href : "/starter"}
    ],
    type : "B"
  },
  {
    title: "Alert",
    icon: "bi bi-bell",
    childrens: [
      {title : "Alert", href : "/alerts"}
    ],
    type : "C"
  },
  {
    title: "Badges",
    icon: "bi bi-patch-check",
    childrens: [
      {title : "Badges", href : "/badges"}
    ],
    type : "D"
  },
  {
    title: "Buttons",
    icon: "bi bi-hdd-stack",
    childrens: [
      {title : "Buttons", href : "/buttons"}
    ],
    type : "E"
  },
  {
    title: "Cards",
    icon: "bi bi-card-text",
    childrens: [
      {title : "Cards", href : "/cards"}
    ],
    type : "F"
  },
  {
    title: "Grid",
    icon: "bi bi-columns",
    childrens: [
      {title : "Grid", href : "/grid"}
    ],
    type : "G"
  },
  {
    title: "Table",
    icon: "bi bi-layout-split",
    childrens: [
      {title : "Table", href : "/table"}
    ],
    type : "H"
  },
  {
    title: "Forms",
    icon: "bi bi-textarea-resize",
    childrens: [
      {title : "Forms", href : "/forms"}
    ],
    type : "I"
  },
  {
    title: "Breadcrumbs",
    icon: "bi bi-link",
    childrens: [
      {title : "Breadcrumbs", href : "/breadcrumbs"}
    ],
    type : "J"
  }
];

const Sidebar = () => {
  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <SidebarItem item={navi} key={index}/>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
