import "./Sidebar.css"
import { SidebarData } from '../SidebarData/SidebarData'

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="header">Shimon</h1>
      <ul className="sidebar-list">
      {SidebarData.map((val, key) =>{
        return (
          <li 
            key={key} 
            onClick={() => console.log(`Navigate to ${val.title}`)}
            className="row"
            >
            <div id="icon">{val.icon}</div>
            <div id="title">{val.title}</div>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default Sidebar