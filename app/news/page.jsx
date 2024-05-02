import React from 'react';
import Link from 'next/link';

const NewsPage = (props) => {
    const articles = [
        {
            title: 'item1',
            href: '1'
        },
        {
            title: 'item2',
            href: '2'
        },
        {
            title: 'item3',
            href: '3'
        }
    ];

    return (
        <>
            <h1>News Items</h1>
            <ul>
                {articles.map((newsArticle) => {
                    return (
                        <li><Link href={`news/${newsArticle.href}`}>{newsArticle.title}</Link></li>
                    )
                })}
            </ul>
        </>
    );
};

export default NewsPage;