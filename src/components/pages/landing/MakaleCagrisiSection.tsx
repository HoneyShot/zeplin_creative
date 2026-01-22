// @/components/pages/landing/SayilarSection.tsx
import Image from "next/image";
import Icon from "@/components/ui/Icon";

export default function MakaleCagrisiSection() {
    return (
        <section
            id="makale-cagrisi"
            className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
        >
            <div
                className="w-full rounded-[48px] py-8 md:py-12 lg:py-16 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative overflow-hidden"
                style={{
                    backgroundImage: "url('/vectors/makale/makale-bg.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 xl:gap-12">
                    {/* Content */}
                    <div className="w-full max-w-xl lg:max-w-2xl mx-auto text-center py-4 lg:py-8">
                        <div className="flex justify-center mb-3">
                            <div className="w-auto flex items-center justify-center">
                                <Icon name="promotion" size={32} className="text-[var(--profuture-ribbon-red)] rotate-[-30deg]" />
                            </div>
                        </div>

                        {/* Title */}
                        <p className="text-[var(--profuture-gray)] text-base lg:text-lg mb-1">Makale Çağrısı</p>

                        <h2 className="text-xl sm:text-2xl lg:text-[26px] xl:text-[30px] font-bold text-[var(--profuture-blue)] mb-4 lg:mb-5 leading-tight">
                            Türkiye Ulusal Dijital Veri ve  Altyapıları
                        </h2>

                        {/* Description */}
                        <p className="text-[var(--profuture-dark-gray)] text-sm lg:text-[15px] leading-relaxed mb-6 lg:mb-8 max-w-lg mx-auto">
                            Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve özel sektörde teknoloji altyapıları, yapay zekâ uygulamaları, büyük veri analitiği, siber güvenlik, akıllı sistemler ve dijital dönüşüm odaklı özgün, güncel ve disiplinlerarası akademik çalışmalar değerlendirilecektir.
                        </p>

                        <button className="inline-flex items-center gap-2 bg-[var(--profuture-ribbon-red)] hover:bg-[var(--profuture-dark-red)] text-white font-medium px-6 py-3 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
                            Makale Gönder
                            <Icon name="right" size={16} className="text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
