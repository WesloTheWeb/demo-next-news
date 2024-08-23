// Interceptor route.
import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default function InterceptedImagePage({ params }) {
    const newsItemSlug = params.slug;
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

    if (!newsItem) {
        return notFound();
    };

    return (
        <div className="fullscreen-image">
            <h2>Intercepted!!!!</h2>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    )
};