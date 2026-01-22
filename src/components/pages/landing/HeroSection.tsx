import Icon from '@/components/ui/Icon';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Hero Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/vectors/hero-image.svg"
                    alt="Profuture Tech Background"
                    fill
                    priority
                    className="object-cover object-center opacity-80"
                />
            </div>

            {/* Hero Content */}
            <section
                id="home"
                className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 pt-16 md:pt-24 lg:pt-28 xl:pt-32 pb-32 sm:pb-40 md:pb-48 lg:pb-24 xl:pb-32"
            >
                <div className="max-w-6xl lg:max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-8 xl:gap-16">
                        {/* Left Content */}
                        <div className="flex-1 w-full max-w-xl lg:max-w-md xl:max-w-xl 2xl:max-w-2xl">
                            <div className="bg-transparent">
                                <h1 className="text-white font-bold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-2">
                                    Profuture Teknoloji Dergisi
                                </h1>
                                <h2 className="text-white font-bold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 sm:mb-6">
                                    Son Sayı Yayında
                                </h2>
                                <p className="text-white font-normal text-sm sm:text-base lg:text-base xl:text-lg mb-4 sm:mb-6 max-w-md xl:max-w-lg">
                                    Profuture teknoloji mekanizmaları değişikliği alanlarında özgün akademik çalışmalar içeren yeni sayıya şimdi erişin.
                                </p>

                                {/* Metadata */}
                                <div className="text-white font-normal text-sm sm:text-base flex flex-wrap items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                                    <div className="flex items-center gap-2">
                                        <Icon name="cilt" size={17} className="text-white" />
                                        <span>Cilt: <strong>2</strong></span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Icon name="number" size={17} className="text-white" />
                                        <span>Sayı: <strong>7</strong></span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Icon name="calendar" size={17} className="text-white" />
                                        <span>Haziran 2025</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 bg-[var(--profuture-blue)] px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[var(--button-hover2)] transition-all shadow-lg"
                                >
                                    <span className="text-white text-sm sm:text-base">Dergiyi Görüntüle</span>
                                    <Icon name="right" size={17} className="text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
