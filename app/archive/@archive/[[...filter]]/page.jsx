import Link from "next/link";
import NewsList from "@/app/src/components/NewsList/NewsList";
import { getNewsForYear, getAvailableNewsYears } from "@/app/src/lib/news";

export default function FilteredNewsPage({ params }) {

    // ? Remember: Params is always passed in and the value you can access is what is in the square brackets.
    const newsYear = params.filter;
    console.log(`[@archive/[[...filter]]/page.js]`, newsYear);

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