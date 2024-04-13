import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNavbar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="p-4 space-y-6">
            <h1 className="text-2xl font-semibold">All Category</h1>
            {
                categories.map(category => <Link to={`/category/${category.id}`} className="block" key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNavbar;