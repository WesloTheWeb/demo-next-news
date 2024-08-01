export default function NewsPage({ params }) {
  const newsId = params.id;

  console.log('params object', params)

  return (
    <>
      <h1>Newspage Details</h1>
      <div>index: {newsId}</div>
    </>
  )
};
