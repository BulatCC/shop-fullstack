const jackets = [
    {
        id: '1',
        link: '13',
        img: '/img/man-jacket-1',
        title: 'Jacket',
        price: '120'
    },
    {
        id: '2',
        link: '14',
        img: '/img/category-jackets',
        title: 'Overall',
        price: '140'
    },
    {
        id: '3',
        link: '15',
        img: '/img/woman-jacket-1',
        title: 'Jacket',
        price: '90'
    },
    {
        id: '4',
        link: '16',
        img: '/img/woman-jacket-2',
        title: 'Overall',
        price: '160'
    }
];

export const getRecommendData = async (): Promise<unknown> => (
    await new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(jackets);
        }, 1000);
    })
);
