import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsPage({ params }) {
  // ? takes whatever the [] value is in folder:
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug);

  console.log('newsItem value', newsItem);

  console.log('params object', params);

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <div>News ID: {newsItem.id}</div>
      <p>
        {newsItem.content}
      </p>
    </article>
  )
};
