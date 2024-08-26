// Interceptor route.
import { notFound } from "next/navigation";
import ModalBackdrop from "@/app/src/components/Modals/modalBackdrop";
import { getNewsItem } from "@/app/src/lib/news";

export default async function InterceptedImagePage({ params }) {
    const newsItemSlug = params.slug;
    const newsItem = await getNewsItem(newsItemSlug);

    if (!newsItem) {
        return notFound();
    };

    return (
        <>
            <ModalBackdrop />
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </div>
            </dialog>
        </>
    )
};