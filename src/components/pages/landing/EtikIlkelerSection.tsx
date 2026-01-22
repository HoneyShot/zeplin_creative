// @/components/pages/landing/EtikIlkelerSection.tsx
import Icon from "@/components/ui/Icon";

const POLITIKA_MADDELERI = [
    { id: "p1", metin: "Özgünlük ve İntihal Kontrolü", ikon: "audit" },
    { id: "p2", metin: "Çıkar Çatışması Beyanı", ikon: "id-card" },
    { id: "p3", metin: "Veri Gizliliği ve Koruma", ikon: "focus" },
    { id: "p4", metin: "Açık Erişim Politikası", ikon: "world" },
] as const;

export default function EtikIlkelerSection() {
    return (
        <section
            id="yayin-politikasi"
            className="py-16 md:py-24 bg-slate-50/50 border-y border-slate-100"
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
                <div className="max-w-4xl">
                    <h2 className="text-3xl font-extrabold text-[#091542] mb-8 tracking-tight">
                        Etik İlkeler ve Yayın Politikası
                    </h2>

                    <div className="space-y-10">
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Profuture Teknoloji Dergisi, yayın etiği konusunda en yüksek standartları
                            benimsemektedir. Bilimsel tarafsızlığı korumak adına tüm makaleler,
                            <strong className="text-[#273D89]"> çift kör hakemlik</strong> sürecinden geçmektedir.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {POLITIKA_MADDELERI.map((madde) => (
                                <div
                                    key={madde.id}
                                    className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group"
                                >
                                    <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-blue-50 text-[#273D89] group-hover:bg-[#273D89] group-hover:text-white transition-colors">
                                        <Icon name={madde.ikon as any} size={20} />
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">
                                        {madde.metin}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}