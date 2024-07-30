export default function NewsPage({ params }) {
  const newsId = params.id;

  return (
    <>
      <h1>Newspage Details</h1>
      <div>index: {newsId}</div>
    </>
  )
};
