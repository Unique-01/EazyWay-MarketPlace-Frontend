import Breadcrumb from "components/common/Breadcrumb"
import Navbar from "./Navbar/Navbar"
import TopBar from "./TopBar/TopBar"

const Header = () =>{
    return (
        <>
        <TopBar/>
        <Navbar/>
        <Breadcrumb/>
        </>
    )
}

export default Header