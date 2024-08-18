import NavLink from "../NavLink/NavLink";

const Navigation = ({ }) => {

    const navigationLinks = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "News",
            path: "/news"
        },
        {
            title: "Archive",
            path: "/archive"
        }
    ];

    return (
        <nav className="navigation-container">
            {
                navigationLinks.map((newsItem) => {
                    return <NavLink 
                        key={newsItem.title} 
                        href={newsItem.path}
                        title={newsItem.title} />
                })
            }
        </nav>
    );
};

export default Navigation;