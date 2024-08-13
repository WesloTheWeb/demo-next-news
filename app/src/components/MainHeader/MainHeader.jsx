import Link from "next/link";
import Navigation from "../Navigation/Navigation";

const MainHeader = (props) => {
    return (
        <header id="main-header">
            <div id="logo">
                <Link href="/">NextNews</Link>
            </div>
            <Navigation />
        </header>
    );
};

export default MainHeader;