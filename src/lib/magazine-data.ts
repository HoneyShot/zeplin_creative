// @/lib/magazine-data.ts
export interface MagazineIssue {
    id: string;
    volume: number;
    issueNumber: number;
    releaseDate: string;
    title: string;
    coverUrl: string;
    status: 'new' | 'latest' | 'archive';
}

export const MAGAZINE_ARCHIVE: MagazineIssue[] = [
    { id: 'v1s1-a', volume: 1, issueNumber: 1, releaseDate: 'Aralık 2022', title: 'Teknoloji ve Dijital Dergisi', coverUrl: '/vectors/sayilar-kapak.svg', status: 'new' },
    { id: 'v1s1-b', volume: 1, issueNumber: 1, releaseDate: 'Aralık 2022', title: 'Teknoloji ve Dijital Dergisi', coverUrl: '/vectors/sayilar-kapak.svg', status: 'new' },
    { id: 'v1s1-c', volume: 1, issueNumber: 1, releaseDate: 'Aralık 2022', title: 'Teknoloji ve Dijital Dergisi', coverUrl: '/vectors/sayilar-kapak.svg', status: 'latest' },
];