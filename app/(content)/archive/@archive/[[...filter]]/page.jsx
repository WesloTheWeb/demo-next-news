import Link from "next/link";
import NewsList from "@/app/src/components/NewsList/NewsList";
import { getNewsForYear, getAvailableNewsYears, getAvailableNewsMonths, getNewsForYearAndMonth } from "@/app/src/lib/news";

export default async function FilteredNewsPage({ params }) {
    // ? Remember: Params is always passed in and the value you can access is what is in the square brackets.
    const filter = params.filter;
    console.log(`[@archive/[[...filter]]/page.js]`, filter);

    const selectedYear = filter ? filter[0] : undefined;
    const selectedMonth = filter?.[1];

    console.log('selectedMonth', selectedMonth);

    let news;
    let newsContent = "No news found for the selected period.";
    let links = await getAvailableNewsYears();

    if (selectedYear && !selectedMonth) {
        news = await getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    };

    if (selectedYear && selectedMonth) {
        news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    };

    const availableYears = await getAvailableNewsYears();

    // Error handling cases
    if (selectedYear && !availableYears.includes(selectedYear) ||
        selectedMonth && !getAvailableNewsMonths(selectedYear).includes(selectedMonth)) {
        throw new Error('Invalid filter.');
    };

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    };

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map((link) => {
                            const href = selectedYear
                                ? `/archive/${selectedYear}/${link}`
                                : `/archive/${link}`;

                            return (
                                <li key={link}>
                                    <Link href={href}>{link}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </header>
            {newsContent}
        </>
    );
};