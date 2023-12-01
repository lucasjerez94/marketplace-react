import { Searchbar } from "./Searchbar";

export const Sidebar = ({}) => {
    return (
      <div className="sidebar-container">
        <Searchbar />
        <h2>Sidebar</h2>
        <ul className="ul-sidebar">
          <li><a href="#">Enlace 1</a></li>
          <li><a href="#">Enlace 2</a></li>
          <li><a href="#">Enlace 3</a></li>
        </ul>
      </div>
    );
  }