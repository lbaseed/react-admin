import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { productColumns, productRows } from "../../datatablesource";


const ProductsList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable cols={productColumns} rows={productRows} title="All Products" linkDest="/products/new"/>
      </div>
    </div>
  )
}

export default ProductsList