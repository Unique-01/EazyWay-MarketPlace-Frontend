import Breadcrumb from "shared/components/Breadcrumb";
import Navbar from "./Navbar/Navbar";
import TopBar from "./TopBar/TopBar";
import Notification from "shared/components/Notification";

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
