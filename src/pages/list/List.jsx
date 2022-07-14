import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { userColumns, userRows } from "../../datatablesource";


const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable cols={userColumns} rows={userRows} title="Add New User" linkDest="/users/new" />
      </div>
    </div>
  )
}

export default List