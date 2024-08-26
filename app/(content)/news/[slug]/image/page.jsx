import { getNewsItem } from "@/app/src/lib/news";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }) {
    const newsItemSlug = params.slug;
    const newsItem = getNewsItem(newsItemSlug);

    if (!newsItem) {
        return notFound();
    };

    return <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
};