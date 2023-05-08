const db = [
    {
        id: '1',
        link: '1',
        img: '/img/man-jacket-1',
        title: 'Jacket',
        price: '120',
        productType: 'overall',
        bestSeller: true,
        gender: 'man',
        color: '#B0C3C7',
        collection: 'casual'
    },
    {
        id: '2',
        link: '2',
        img: '/img/woman-jacket-2',
        title: 'Jacket',
        price: '140',
        productType: 'jacket',
        bestSeller: true,
        gender: 'woman',
        color: '#3B6392',
        collection: 'casual'
    },
    {
        id: '3',
        link: '3',
        img: '/img/man-jacket-1',
        title: 'Jacket',
        price: '90',
        productType: 'overall',
        bestSeller: false,
        gender: 'man',
        color: '#B0C3C7',
        collection: 'classic'
    },
    {
        id: '4',
        link: '4',
        img: '/img/woman-jacket-4',
        title: 'Jacket',
        price: '160',
        productType: 'jacket',
        bestSeller: false,
        gender: 'woman',
        color: '#3B6392',
        collection: 'classic'
    },
    {
        id: '5',
        link: '5',
        img: '/img/woman-jacket-5',
        title: 'Jacket',
        price: '80',
        productType: 'jacket',
        bestSeller: false,
        gender: 'woman',
        color: '#B0C3C7',
        collection: 'casual'
    },
    {
        id: '6',
        link: '6',
        img: '/img/woman-jacket-6',
        title: 'Jacket',
        price: '99',
        productType: 'jeans',
        bestSeller: true,
        gender: 'woman',
        color: '#3B6392',
        collection: 'classic'
    },
    {
        id: '7',
        link: '7',
        img: '/img/man-jacket-1',
        title: 'Jacket',
        price: '99',
        productType: 'jeans',
        bestSeller: false,
        gender: 'man',
        color: '#B0C3C7',
        collection: 'casual'
    },
    {
        id: '8',
        link: '8',
        img: '/img/man-jacket-1',
        title: 'Jacket',
        price: '199',
        productType: 'overall',
        bestSeller: true,
        gender: 'man',
        color: '#2D2E2E',
        collection: 'classic'
    },
    {
        id: '9',
        link: '9',
        img: '/img/man-jacket-1',
        title: 'Jacket',
        price: '919',
        productType: 'jeans',
        bestSeller: false,
        gender: 'man',
        color: '#2D2E2E',
        collection: 'casual'
    },
    {
        id: '10',
        link: '10',
        img: '/img/man-jacket-1',
        title: 'Jacket',
        price: '120',
        productType: 'overall',
        bestSeller: true,
        gender: 'man',
        color: '#B0C3C7',
        collection: 'casual'
    },
    {
        id: '11',
        link: '11',
        img: '/img/woman-jacket-2',
        title: 'Jacket',
        price: '140',
        productType: 'jacket',
        bestSeller: true,
        gender: 'woman',
        color: '#3B6392',
        collection: 'casual'
    },
    {
        id: '12',
        link: '12',
        img: '/img/man-jacket-1',
        title: 'Jacket',
        price: '90',
        productType: 'overall',
        bestSeller: false,
        gender: 'man',
        color: '#B0C3C7',
        collection: 'classic'
    },
    {
        id: '13',
        link: '13',
        img: '/img/woman-jacket-4',
        title: 'Jacket',
        price: '160',
        productType: 'jacket',
        bestSeller: false,
        gender: 'woman',
        color: '#3B6392',
        collection: 'classic'
    },
    {
        id: '14',
        link: '14',
        img: '/img/woman-jacket-5',
        title: 'Jacket',
        price: '80',
        productType: 'jacket',
        bestSeller: false,
        gender: 'woman',
        color: '#B0C3C7',
        collection: 'casual'
    },
    {
        id: '15',
        link: '15',
        img: '/img/woman-jacket-6',
        title: 'Jacket',
        price: '99',
        productType: 'jeans',
        bestSeller: true,
        gender: 'woman',
        color: '#3B6392',
        collection: 'classic'
    },
    {
        id: '16',
        link: '16',
        img: '/img/man-jacket-1',
        title: 'Jacket',
        price: '99',
        productType: 'jeans',
        bestSeller: false,
        gender: 'man',
        color: '#B0C3C7',
        collection: 'casual'
    },
    {
        id: '17',
        link: '17',
        img: '/img/man-jacket-1',
        title: 'Jacket',
        price: '199',
        productType: 'overall',
        bestSeller: true,
        gender: 'man',
        color: '#2D2E2E',
        collection: 'classic'
    },
    {
        id: '18',
        link: '18',
        img: '/img/man-jacket-1',
        title: 'Jacket',
        price: '919',
        productType: 'jeans',
        bestSeller: false,
        gender: 'man',
        color: '#2D2E2E',
        collection: 'casual'
    }
];

export const getAllCatalogData = async (): Promise<unknown> => (
    await new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(db);
        }, 1000);
    })
);
