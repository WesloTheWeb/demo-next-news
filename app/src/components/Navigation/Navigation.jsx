import Link from "next/link";


const Navigation = ({ }) => {

    const navigationLinks = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "News",
            path: "/news"
        }
    ];

    return (
        <nav className="navigation-container">
            {
                navigationLinks.map((newsItem) => {
                    return <Link key={newsItem.title} href={newsItem.path}>{newsItem.title}</Link>
                })
            }
        </nav>
    );
};

export default Navigation;