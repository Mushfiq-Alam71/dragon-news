import { useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSideNavbar from "../../Shared/RightSideNavbar/RightSideNavbar";


const News = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h1>news details</h1>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default News;