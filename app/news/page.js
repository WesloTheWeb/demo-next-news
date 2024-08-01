import Link from 'next/link';

const NewsPage = (props) => {
    const articles = [
        {
            title: 'Simone Biles makes history as the American Gymnast with the most olympic medals ever',
            href: '1'
        },
        {
            title: `South Korean Sharpshooter Kim Yeji is the 2024 Olympics' First Breakout style star`,
            href: '2'
        },
        {
            title: 'Paris 2024 Judo: All rsults, as Lasha Bekauri of Goergia takes home second straight gold',
            href: '3'
        }
    ];

    return (
        <>
            <h1>News Items</h1>
            <ul className='articles'>
                {articles.map((newsArticle) => {
                    return (
                        <li key={newsArticle.title}>
                            <Link href={`news/${newsArticle.href}`}>
                                {newsArticle.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};

export default NewsPage;