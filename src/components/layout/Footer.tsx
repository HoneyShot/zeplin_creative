// @/components/layout/Footer.tsx
import Link from 'next/link'
import Icon from '@/components/ui/Icon'

export default function Footer() {
    return (
        <footer id="iletisim" className="w-full scroll-mt-20">
            <div className="bg-[var(--profuture-dark-blue)] text-white px-4 lg:px-8 py-6 lg:py-10">
                <div className="max-w-[1440px] mx-auto">
                    <div className="rounded-lg p-6 lg:p-10">
                        {/* 3 Column Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

                            {/* Column 1 - Editor Info */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0">
                                    <Icon name="id-card" size={24} className="text-white" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white/70 text-sm">Dergi Editörü</p>
                                    <p className="font-semibold text-base lg:text-lg">Prof. Dr. Elif Başkaya Acar</p>
                                    <a
                                        href="mailto:elif@gmail.com"
                                        className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                                    >
                                        <Icon name="email" size="sm" className="text-[var(--profuture-red)]" />
                                        elif@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Column 2 - Mail Address */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0">
                                    <Icon name="message" size="lg" className="text-white" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white/70 text-sm">Mail Adresi</p>
                                    <a
                                        href="mailto:profuture@gmail.com"
                                        className="font-semibold text-base lg:text-lg hover:text-white/80 transition-colors"
                                    >
                                        profuture@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Column 3 - Address */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0">
                                    <Icon name="location" size="lg" className="text-white" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white/70 text-sm">Profuture Teknoloji Yayınevi</p>
                                    <p className="font-normal text-base lg:text-lg">Ahmet Kemal Mahallesi 1245. Cadde No: 10 Çankaya/Ankara</p>
                                </div>
                            </div>
                        </div>

                        {/* Separator */}
                        <div className="my-6 lg:my-8 border-t border-white/20"></div>

                        {/* Disclaimer */}
                        <p className="text-sm lg:text-base text-white/60 italic text-center max-w-5xl mx-auto">
                            Bu sitede yer alan tüm yazılı, görsel ve uygulama içerikleri kaynak gösterilmeden kullanılamaz. 
                            Site içerisinde sunulan bilgiler yalnızca bilgilendirme amacıyla hazırlanmış olup, bu bilgilerin kullanımından 
                            doğabilecek her türlü sorumluluk kullanıcıya aittir. Siteye erişim sağlayan kullanıcılar, bu şartları okumuş, anlamış ve kabul etmiş sayılır.
                        </p>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-[var(--profuture-red)] text-white py-3 px-4">
                <div className="max-w-[1440px] mx-auto text-center text-sm lg:text-base">
                    <p>Profuture Teknoloji - Tüm Hakları Saklıdır. © {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    )
}
