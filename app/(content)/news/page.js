import { getAllNews } from '@/app/src/lib/news';
import NewsList from '../../src/components/NewsList/NewsList';

const NewsPage = async () => {
    const news = getAllNews();

    return (
        <>
            <h1>News Page</h1>
            <NewsList news={news} />
        </>
    );
};

export default NewsPage;