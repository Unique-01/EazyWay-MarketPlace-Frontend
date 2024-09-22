import Breadcrumb from "components/common/Breadcrumb";
import Navbar from "./Navbar/Navbar";
import TopBar from "./TopBar/TopBar";
import Notification from "components/Notification";

const Header = () => {
    return (
        <>
            <TopBar />
            <Navbar />
            <Notification />
            <Breadcrumb />
        </>
    );
};

export default Header;
