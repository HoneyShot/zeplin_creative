import Icon from '@/components/ui/Icon';

import { Badge } from '@/components/ui/badge';

import { useRef, useState, useEffect } from 'react';



export default function SayilarSection() {

    const contents = [

        { cilt: 1, sayi: 1, tarih: 'Aralık 2022', title: 'Teknoloji ve Dijital Dergisi', image: '/vectors/sayilar-kapak.svg', isNew: true, isSonSayi: false },

        { cilt: 1, sayi: 1, tarih: 'Aralık 2022', title: 'Teknoloji ve Dijital Dergisi', image: '/vectors/sayilar-kapak.svg', isNew: true, isSonSayi: false },

        { cilt: 1, sayi: 1, tarih: 'Aralık 2022', title: 'Teknoloji ve Dijital Dergisi', image: '/vectors/sayilar-kapak.svg', isNew: false, isSonSayi: true },

    ];



    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    const [isLargeViewport, setIsLargeViewport] = useState(false);



    // Viewport Size Check

    useEffect(() => {

        const checkViewport = () => {

            setIsLargeViewport(window.innerWidth >= 1280); // xl breakpoint

        };

        checkViewport();

        window.addEventListener('resize', checkViewport);

        return () => window.removeEventListener('resize', checkViewport);

    }, []);



    const scrollToIndex = (index: number) => {

        if (!scrollContainerRef.current) return;



        const container = scrollContainerRef.current;

        const cards = container.children;



        if (cards.length === 0) return;



        // Scroll Logic

        let targetIndex = index;

        if (isLargeViewport) {

            if (index < 0) {

                targetIndex = contents.length - 1;

            } else if (index >= contents.length) {

                targetIndex = 0;

            }

        } else {

            targetIndex = Math.max(0, Math.min(index, contents.length - 1));

        }



        setCurrentIndex(targetIndex);



        const card = cards[targetIndex] as HTMLElement;

        const scrollPosition = card.offsetLeft - container.offsetLeft;



        container.scrollTo({

            left: scrollPosition,

            behavior: 'smooth'

        });

    };



    const handlePrev = () => {

        scrollToIndex(currentIndex - 1);

    };



    const handleNext = () => {

        scrollToIndex(currentIndex + 1);

    };



    return (

        <section

            id="sayilar"

            className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-white"

        >

            <div className="max-w-6xl lg:max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">

                {/* Section Header */}

                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 lg:mb-10">

                    {/* Left */}

                    <div className="flex items-end gap-4">

                        <div>

                            <p className="text-sm lg:text-base text-[var(--profuture-stroke)] mb-1">

                                Sayılar

                            </p>

                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--profuture-blue)] pb-1 inline-block">

                                Dergiler

                            </h2>

                        </div>



                        {/* Nav Arrows */}

                        <div className="flex items-center gap-2 mb-1">

                            <button

                                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"

                                aria-label="Önceki"

                                onClick={handlePrev}

                            >

                                <Icon name="left" size={16} className="text-gray-600" />

                            </button>

                            <button

                                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"

                                aria-label="Sonraki"

                                onClick={handleNext}

                            >

                                <Icon name="right" size={16} className="text-gray-600" />

                            </button>

                        </div>

                    </div>



                    {/* Right */}

                    <a

                        href="#"

                        className="inline-flex items-center gap-2 border border-[var(--profuture-stroke)] text-[var(--profuture-dark-gray)] hover:bg-[var(--button-hover1)] hover:text-white font-medium px-5 py-2.5 rounded-full transition-colors self-start sm:self-auto"

                    >

                        <span>Tümünü Görüntüle</span>

                        <Icon name="right" size={16} className="text-current" />

                    </a>

                </div>



                {/* Cards */}

                <div

                    ref={scrollContainerRef}

                    className="flex xl:grid xl:grid-cols-3 gap-6 overflow-x-auto xl:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 xl:pb-0"

                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}

                >

                    {contents.map((content, index) => (

                        <div

                            key={index}

                            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow flex min-w-[300px] sm:min-w-[340px] xl:min-w-0 snap-start"

                        >

                            {/* Hero */}

                            <div className="relative w-[140px] sm:w-[160px] flex-shrink-0">

                                <img

                                    src={content.image}

                                    alt={`Cilt ${content.cilt} Sayı ${content.sayi}`}

                                    className="w-full h-full object-cover"

                                />

                                {/* Son Sayı Ribbon */}

                                {content.isSonSayi && (

                                    <div className="absolute rounded-b-full pb-2 top-[70%] -left-0 -translate-y-1/2 bg-[var(--profuture-ribbon-red)] text-white text-xs font-medium px-3 py-1 transform -rotate-45 origin-top-left shadow-md"

                                        style={{ transform: 'rotate(-45deg) translateX(-30%)' }}>

                                        <span className='px-3'>Son Sayı</span>

                                    </div>

                                )}

                            </div>



                            {/* Card Content */}

                            <div className="flex-1 p-4 flex flex-col justify-between">

                                <div>

                                    {/* Badge */}

                                    <div className="flex items-center justify-between mb-2">

                                        <div className="flex flex-col gap-1.5">

                                            <Icon name="pdf" size={16} className='text-[#676A73]' />

                                            <Badge className='bg-[#F6F8FF] border rounded text-xs flex items-center gap-1.5 text-[var(--button-hover1)]'>Dergi</Badge>

                                        </div>

                                        <span className="bg-[teal] text-white text-[0.5rem] font-bold px-2 py-0.5 rounded">

                                            YENİ

                                        </span>

                                    </div>



                                    {/* Title */}

                                    <h3 className="text-base lg:text-lg font-bold text-[var(--profuture-blue)] mb-3 leading-tight">

                                        {content.title}

                                    </h3>



                                    {/* Meta Info */}

                                    <div className="space-y-1 text-xs text-[var(--profuture-dark-gray)]">

                                        <div className="flex items-center gap-3">

                                            <span className="flex items-center gap-1">

                                                <Icon name="cilt" size={12} className="text-[var(--profuture-blue)]" />

                                                Cilt: {content.cilt}

                                            </span>

                                            <span className="flex items-center gap-1">

                                                <Icon name="number" size={12} className="text-[var(--profuture-blue)]" />

                                                Sayı: {content.sayi}

                                            </span>

                                        </div>

                                        <div className="flex items-center gap-1">

                                            <Icon name="calendar" size={12} className="text-[var(--profuture-blue)]" />

                                            <span>{content.tarih}</span>

                                        </div>

                                    </div>

                                </div>



                                {/* Action Buttons */}

                                <div className="flex items-center gap-2 mt-4">

                                    <button

                                        className="w-9 h-9 flex items-center justify-center border rounded-full bg-[var(--profuture-blue)] hover:text-[var(--profuture-blue)] hover:bg-white hover:border-[var(--profuture-blue)] transition-colors group"

                                        aria-label="Görüntüle"

                                    >

                                        <Icon name="eye" size={16} className="text-white group-hover:text-[var(--profuture-blue)]" />

                                    </button>

                                    <button

                                        className="w-9 h-9 flex items-center justify-center border border-gray-700 rounded-full hover:bg-[var(--button-hover1)] hover:border-[var(--button-hover1)] hover:text-white transition-colors group"

                                        aria-label="İndir"

                                    >

                                        <Icon name="download" size={16} className="text-[var(--profuture-dark-gray)] group-hover:text-white" />

                                    </button>

                                    <button

                                        className="w-9 h-9 flex items-center justify-center border border-gray-700 rounded-full hover:bg-[var(--profuture-blue)] hover:border-[var(--profuture-blue)] hover:text-white transition-colors group"

                                        aria-label="Detay"

                                    >

                                        <Icon name="right" size={16} className="text-[var(--profuture-dark-gray)] group-hover:text-white" />

                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}