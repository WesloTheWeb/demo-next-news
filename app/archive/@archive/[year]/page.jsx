import NewsList from "@/app/src/components/NewsList/NewsList";
import { getNewsForYear } from "@/app/src/lib/news";

export default function FilteredNewsPage({params}) {

    const newsYear = params.year;
    // ? Remember: Params is always passed in and the value you can access is what is in the square brackets.
    const news = getNewsForYear(newsYear);

    return <NewsList news={news} />
};