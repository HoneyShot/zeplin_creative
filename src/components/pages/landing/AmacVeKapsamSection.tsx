import Icon from '@/components/ui/Icon';

export default function AmacVeKapsamSection() {
    return (
        <section 
            id="amac-ve-kapsam" 
            className="py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-white"
        >
            <div className="max-w-6xl lg:max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="max-w-xl lg:max-w-lg xl:max-w-xl">

                        <p className="text-sm lg:text-base text-[var(--profuture-stroke)] mb-2">
                            Dergi Amacı ve Kapsamı
                        </p>

                        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[var(--profuture-blue)] mb-4 lg:mb-6 pb-2 inline-block">
                            Profuture Teknoloji Dergisi
                        </h2>
                        <p className="text-sm sm:text-base lg:text-base xl:text-lg text-[var(--profuture-dark-gray)] leading-relaxed text-justify mb-8 lg:mb-10">
                            Profuture Teknoloji Dergisi, 2022 yılında yayın hayatına başlayan; teknoloji, 
                            inovasyon, dijital dönüşüm ve geleceğin üretim modelleri ekseninde sosyal bilimler 
                            ile mühendislik ve fen bilimlerini bir araya getiren, uluslararası hakemli ve açık 
                            erişimli bir akademik yayındır.
                        </p>

                        <a 
                            href="#"
                            className="inline-flex items-center justify-between gap-8 px-6 py-3 border border-[var(--profuture-stroke)] rounded-full text-[var(--profuture-dark-gray)] hover:bg-[var(--button-hover1)] hover:text-white transition-colors min-w-[140px]"
                        >
                            <span className="text-sm lg:text-base font-normal">Detay</span>
                            <Icon name="right" size={16} className="text-current hover:text-white" />
                        </a>
                    </div>

                    <div className="hidden lg:block" />
                </div>
            </div>
        </section>
    );
}
