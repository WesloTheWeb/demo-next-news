import NewsList from "@/app/src/components/NewsList/NewsList";
import { getLatestNews } from "@/app/src/lib/news";

export default async function LatestNewsPage() {

    const latestNews = await getLatestNews();

    return (
        <>
            <h2>Latest News Page</h2>
            <NewsList news={latestNews} />
        </>
    );
};
