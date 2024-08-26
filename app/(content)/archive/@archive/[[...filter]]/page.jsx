import { Suspense } from "react";
import Link from "next/link";
import NewsList from "@/app/src/components/NewsList/NewsList";
import { getNewsForYear, getAvailableNewsYears, getAvailableNewsMonths, getNewsForYearAndMonth } from "@/app/src/lib/news";

async function FilteredNews({ year, month }) {
    let news;
    let newsContent = "No news found for the selected period.";

    if (year && !month) {
        news = await getNewsForYear(year);
    } else if (year && month) {
        news = await getNewsForYearAndMonth(year, month)
    };

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    };

    return newsContent;
};

async function FilteredHeader({ year, month }) {
    const availableYears = await getAvailableNewsYears();
    let links = availableYears;

    // Error handling cases
    if (year && !availableYears.includes(year) ||
        month && !getAvailableNewsMonths(year).includes(month)) {
        throw new Error('Invalid filter.');
    };


    if (year && !month) {
        links = getAvailableNewsMonths(year);
    };

    if (year && month) {
        links = [];
    };

    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link) => {
                        const href = year
                            ? `/archive/${year}/${link}`
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
    );
};

export default async function FilteredNewsPage({ params }) {
    // ? Remember: Params is always passed in and the value you can access is what is in the square brackets.
    const filter = params.filter;
    const selectedYear = filter ? filter[0] : undefined;
    const selectedMonth = filter?.[1];

    return (
        <>
            <Suspense fallback={<p>Loading filter...</p>}>
                <FilteredHeader year={selectedYear} month={selectedMonth} />
            </Suspense>
            <Suspense fallback={<p>Loading news...</p>}>
                <FilteredNews year={selectedYear} month={selectedMonth} />
            </Suspense>
        </>
    );
};

// ? This is good practice to break the component down to other component pieces.