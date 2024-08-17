import Link from "next/link";
import { getAvailableNewsYears } from "@/app/src/lib/news"

export default function ArchivePage() {
    const links = getAvailableNewsYears();
    console.log('links', links);

    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link) => {
                        return (
                            <Link href={`/archive.${link}`}>{link}</Link>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}