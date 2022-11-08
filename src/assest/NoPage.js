import { Link } from "react-router-dom";

const NoPage = () => {
    return (
        <div className="black-bg flex">
            <div className="">
                <h3>404</h3>
                <h1> Page not Found</h1>
                <Link to="/Add" className="white">Back</Link>
            </div>
        </div>
    )
}
export default NoPage;