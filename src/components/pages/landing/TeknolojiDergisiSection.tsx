import Image from "next/image";
import Icon from "@/components/ui/Icon";

// Articles
const articles = [
    {
        id: 1,
        category: "İklim",
        type: "Araştırma Makalesi",
        title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
        pages: "12-28",
        authors: ["Elif Başkaya Acar", "Emre Taran", "Halil Başar"],
    },
    {
        id: 2,
        category: "İklim",
        type: "Araştırma Makalesi",
        title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
        pages: "12-28",
        authors: ["Elif Başkaya Acar", "Emre Taran", "Halil Başar"],
    },
    {
        id: 3,
        category: "İklim",
        type: "Araştırma Makalesi",
        title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
        pages: "12-28",
        authors: ["Elif Başkaya Acar", "Emre Taran", "Halil Başar"],
    },
    {
        id: 4,
        category: "İklim",
        type: "Araştırma Makalesi",
        title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
        pages: "12-28",
        authors: ["Elif Başkaya Acar", "Emre Taran", "Halil Başar"],
    },
];

export default function TeknolojiDergisiSection() {
    return (
        <section
            id="teknoloji-dergisi"
            className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white"
        >
            <div className="max-w-6xl lg:max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
                    {/* Left */}
                    <div className="w-full lg:w-[380px] xl:w-[420px] flex-shrink-0">
                        <div className="relative bg-white rounded-2xl p-6 pb-8 border rounded-[20px] border-[5px] border-pink-200 overflow-hidden">
                            {/* Son Sayı Ribbon */}
                            <div className="absolute rounded-b-full pb-2 top-[50%] -left-0 -translate-y-1/2 bg-[var(--profuture-ribbon-red)] text-white text-md font-medium px-3 py-1 transform -rotate-45 origin-top-left shadow-md z-20"
                                style={{ transform: 'rotate(-45deg) translateX(-30%)' }}>
                                <span className='px-3'>Son Sayı</span>
                            </div>

                            <div className="relative mb-6">
                                <Image
                                    src="/vectors/teknolji-dergisi.svg"
                                    alt="Veri Odaklı Mekanizmalar"
                                    width={350}
                                    height={400}
                                    className="w-full h-auto"
                                />
                            </div>

                            <div className="flex items-center justify-center gap-4">
                                <button className="w-12 h-12 flex items-center justify-center border border-[var(--profuture-stroke)] rounded-full hover:bg-[var(--button-hover1)] transition-colors group">
                                    <Icon name="download" size={20} className="text-black group-hover:text-white" />
                                </button>
                                <button className="inline-flex items-center gap-2 bg-[var(--profuture-blue)] hover:bg-[var(--button-hover1)] text-white font-medium px-6 py-3 rounded-full transition-colors">
                                    <Icon name="eye" size={18} className="text-white" />
                                    Görüntüle
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex-1">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                            <div>
                                <p className="text-[var(--profuture-dark-gray)] text-base mb-1">Profuture Teknoloji Dergisi</p>
                                <h2 className="text-[var(--profuture-ribbon-red)] text-2xl sm:text-3xl font-bold">Güncel Yazılar</h2>
                            </div>
                            <button className="inline-flex items-center gap-2 border border-[var(--profuture-stroke)] text-[var(--profuture-dark-gray)] hover:bg-[var(--button-hover1)] hover:text-white font-medium px-5 py-2.5 rounded-full transition-colors self-start sm:self-auto">
                                Tümünü Görüntüle
                                <Icon name="right" size={16} className="text-current" />
                            </button>
                        </div>

                        {/* Articles */}
                        <div className="space-y-4">
                            {articles.map((article) => (
                                <div
                                    key={article.id}
                                    className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 hover:shadow-md transition-shadow"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        {/* Article Info */}
                                        <div className="flex-1">
                                            {/* Badges */}
                                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                                <span className="bg-[var(--profuture-blue)] text-white text-xs font-medium px-3 py-1 rounded-full">
                                                    {article.category}
                                                </span>
                                                <span className="text-[var(--button-hover1)] text-xs font-medium bg-[#F6F8FF] px-3 py-1 rounded-full">
                                                    {article.type}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <div className="flex items-start gap-2 mb-2">
                                                <Icon name="pdf" size={18} className="text-[var(--profuture-blue)] mt-0.5 flex-shrink-0" />
                                                <h3 className="text-[var(--profuture-dark-blue)] font-semibold text-base sm:text-lg">
                                                    {article.title}
                                                </h3>
                                            </div>

                                            {/* Cover Info */}
                                            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--profuture-dark-gray)]">
                                                <div className="flex items-center gap-1.5">
                                                    <Icon name="sticky-notes" size={14} className="text-current" />
                                                    <span>Sayfa: <strong>{article.pages}</strong></span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Icon name="author" size={14} className="text-current" />
                                                    <span>{article.authors.join(", ")}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                                            <button className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border border-[var(--profuture-stroke)] rounded-full hover:bg-[var(--button-hover1)] transition-colors group">
                                                <Icon name="email" size={18} className="text-black group-hover:text-white" />
                                            </button>
                                            <button className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border border-[var(--profuture-stroke)] rounded-full hover:bg-[var(--button-hover1)] transition-colors group">
                                                <Icon name="download" size={18} className="text-black group-hover:text-white" />
                                            </button>
                                            <button className="inline-flex items-center gap-2 bg-[var(--profuture-blue)] hover:bg-[var(--button-hover1)] text-white font-medium px-4 sm:px-5 py-2.5 rounded-full transition-colors">
                                                <Icon name="eye" size={16} className="text-white" />
                                                <span className="hidden sm:inline">Görüntüle</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}