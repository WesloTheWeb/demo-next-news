import Link from "next/link";
import { getAvailableNewsYears } from "@/app/src/lib/news"

export default function ArchivePage() {
    const links = getAvailableNewsYears();

    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link) => {
                        return (
                            <li key={link}>
                                <Link href={`/archive/${link}`}>{link}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    );
};