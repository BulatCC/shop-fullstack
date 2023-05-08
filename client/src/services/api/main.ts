const mainData = {
    bestSellers: [
        {
            id: '1',
            link: '1',
            img: '/img/man-jacket-1',
            title: 'Jacket',
            price: '120'
        },
        {
            id: '2',
            link: '2',
            img: '/img/woman-overall-1',
            title: 'Overall',
            price: '140'
        },
        {
            id: '3',
            link: '3',
            img: '/img/woman-jacket-1',
            title: 'Jacket',
            price: '90'
        },
        {
            id: '4',
            link: '4',
            img: '/img/woman-overall-2',
            title: 'Overall',
            price: '160'
        }
    ],
    jeans: [
        {
            id: '1',
            link: '5',
            img: '/img/category-jeans',
            title: 'Jeans',
            price: '120'
        },
        {
            id: '2',
            link: '6',
            img: '/img/category-jeans',
            title: 'Jeans',
            price: '140'
        },
        {
            id: '3',
            link: '7',
            img: '/img/category-jeans',
            title: 'Jeans',
            price: '90'
        },
        {
            id: '4',
            link: '8',
            img: '/img/category-jeans',
            title: 'Jeans',
            price: '160'
        }
    ],
    overalls: [
        {
            id: '1',
            link: '9',
            img: '/img/category-overall',
            title: 'Jacket',
            price: '120'
        },
        {
            id: '2',
            link: '10',
            img: '/img/woman-overall-1',
            title: 'Overall',
            price: '140'
        },
        {
            id: '3',
            link: '11',
            img: '/img/woman-overall-2',
            title: 'Jacket',
            price: '90'
        },
        {
            id: '4',
            link: '12',
            img: '/img/category-overall',
            title: 'Overall',
            price: '160'
        }
    ],
    jackets: [
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
    ],
    shirts: [
        {
            id: '1',
            link: '17',
            img: '/img/category-shirt',
            title: 'Jacket',
            price: '120'
        },
        {
            id: '2',
            link: '18',
            img: '/img/category-shirt',
            title: 'Overall',
            price: '140'
        },
        {
            id: '3',
            link: '19',
            img: '/img/category-shirt',
            title: 'Jacket',
            price: '90'
        },
        {
            id: '4',
            link: '20',
            img: '/img/category-shirt',
            title: 'Overall',
            price: '160'
        }
    ]
};

export const getMainData = async (): Promise<unknown> => (
    await new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(mainData);
        }, 1000);
    })
);
