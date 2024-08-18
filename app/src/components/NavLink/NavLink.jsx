'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({href, title}) => {

    const path = usePathname();
    const isActive = href === "/" ? path === href : path.startsWith(href);
    
    return (
        <Link 
            className={isActive ? 'active' : ''}
            href={href}
            >
            {title}
        </Link>
    );
};

export default NavLink;