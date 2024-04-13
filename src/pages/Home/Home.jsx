import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import LeftSideNavbar from "../Shared/LeftSideNavbar/LeftSideNavbar";
import RightSideNavbar from "../Shared/RightSideNavbar/RightSideNavbar";
import BreakingNews from "./BreakingNews";




const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h1 className="text-3xl font-poppins font-bold">This is Home</h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="border-2">
                    <LeftSideNavbar></LeftSideNavbar>
                </div>
                <div className="border-2 md:col-span-2">
                    <h1 className="text-2xl">News Coming Soon...</h1>
                </div>
                <div className="border-2">
                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default Home;