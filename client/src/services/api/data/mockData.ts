import { ProductDataType } from '../../../types/ProductData.type';

const productsData = [
    (index: number): ProductDataType => ({
        id: index.toString(),
        img: '/img/man-shirt/man-shirt-1-grey.jpg',
        title: 'True Shirt',
        price: `3${(index * 2).toString()}`,
        productType: 'shirt',
        bestSeller: true,
        gender: 'man',
        colors: [{
            color: '#B0C3C7',
            images: ['/img/man-shirt/man-shirt-1-grey.jpg', '/img/man-shirt/man-shirt-1-grey.jpg', '/img/man-shirt/man-shirt-1-grey.jpg', '/img/man-shirt/man-shirt-1-grey.jpg'],
            size: {
                XS: '2',
                S: '7',
                M: '4',
                L: '4',
                XL: '3',
                '3XL': '3'
            }
        },
        {
            color: '#3B6392',
            images: ['/img/man-shirt/man-shirt-1-dark-blue.jpg', '/img/man-shirt/man-shirt-1-dark-blue.jpg', '/img/man-shirt/man-shirt-1-dark-blue.jpg', '/img/man-shirt/man-shirt-1-dark-blue.jpg', '/img/man-shirt/man-shirt-1-dark-blue.jpg'],
            size: {
                XS: '2',
                S: '7',
                M: '5',
                L: '4',
                XL: '3'
            }
        },
        {
            color: '#2D2E2E',
            images: ['/img/man-shirt/man-shirt-1-dark-grey.jpg', '/img/man-shirt/man-shirt-1-dark-grey.jpg', '/img/man-shirt/man-shirt-1-dark-grey.jpg', '/img/man-shirt/man-shirt-1-dark-grey.jpg', '/img/man-jacket-2.jpg'],
            size: {
                S: '7',
                L: '4',
                XL: '3'
            }
        },
        {
            color: '#4193DA',
            images: ['/img/man-shirt/man-shirt-1-blue.jpg', '/img/man-shirt/man-shirt-1-blue.jpg', '/img/man-shirt/man-shirt-1-blue.jpg', '/img/man-shirt/man-shirt-1-blue.jpg', '/img/man-jacket-1.jpg'],
            size: {
                S: '7',
                M: '1',
                L: '4',
                XL: '3',
                '2XL': '5'
            }
        }],
        collection: 'casual',
        description: 'Overalls in washed organic cotton denim. Collar, button fly, and adjustable belt at waist. Chest pockets with flap. Long, gently flared sleeves and straight legs with front pockets and back pockets.'
    }),
    (index: number): ProductDataType => ({
        id: index.toString(),
        img: '/img/man-jacket/man-jacket-light-blue.jpg',
        title: 'Medium Full Sleeve Jacket',
        price: `4${(index * 2).toString()}`,
        productType: 'jacket',
        bestSeller: false,
        gender: 'man',
        colors: [{
            color: '#B0C3C7',
            images: ['/img/man-jacket/man-jacket-light-blue.jpg', '/img/man-jacket/man-jacket-light-blue.jpg', '/img/man-jacket/man-jacket-light-blue.jpg', '/img/man-jacket/man-jacket-light-blue.jpg'],
            size: {
                XS: '2',
                S: '7',
                M: '10',
                L: '4',
                XL: '3'
            }
        },
        {
            color: '#3B6392',
            images: ['/img/man-jacket/man-jacket-dark-blue.jpg', '/img/man-jacket/man-jacket-dark-blue.jpg', '/img/man-jacket/man-jacket-dark-blue.jpg', '/img/man-jacket/man-jacket-dark-blue.jpg', '/img/man-jacket/man-jacket-dark-blue.jpg'],
            size: {
                XS: '2',
                S: '7',
                M: '4',
                L: '4',
                XL: '3',
                '3XL': '3'
            }
        },
        {
            color: '#2D2E2E',
            images: ['/img/man-jacket/man-jacket-black.jpg', '/img/man-jacket/man-jacket-black.jpg', '/img/man-jacket/man-jacket-black.jpg', '/img/man-jacket/man-jacket-black.jpg', '/img/man-jacket/man-jacket-black.jpg'],
            size: {
                S: '7',
                L: '4',
                XL: '3'
            }
        },
        {
            color: '#4193DA',
            images: ['/img/man-jacket/man-jacket-blue.jpg', '/img/man-jacket/man-jacket-blue.jpg', '/img/man-jacket/man-jacket-blue.jpg', '/img/man-jacket/man-jacket-blue.jpg', '/img/man-jacket/man-jacket-blue.jpg'],
            size: {
                XS: '2',
                S: '7',
                M: '1',
                L: '4',
                XL: '3',
                '2XL': '5'
            }
        }],
        collection: 'casual',
        description: 'Overalls in washed organic cotton denim. Collar, button fly, and adjustable belt at waist. Chest pockets with flap. Long, gently flared sleeves and straight legs with front pockets and back pockets.'
    }),
    (index: number): ProductDataType => ({
        id: index.toString(),
        img: '/img/man-jeans/man-jeans-green.jpg',
        title: 'New Cotton Jeans',
        price: `1${(index * 2).toString()}`,
        productType: 'jeans',
        bestSeller: false,
        gender: 'man',
        colors: [{
            color: '#2fa238',
            images: ['/img/man-jeans/man-jeans-green.jpg', '/img/man-jeans/man-jeans-green.jpg', '/img/man-jeans/man-jeans-green.jpg', '/img/man-jeans/man-jeans-green.jpg'],
            size: {
                XS: '2',
                S: '7',
                M: '10',
                L: '4',
                XL: '3'
            }
        },
        {
            color: '#3B6392',
            images: ['/img/man-jeans/man-jeans-blue.jpg', '/img/man-jeans/man-jeans-blue.jpg', '/img/man-jeans/man-jeans-blue.jpg'],
            size: {
                XS: '2',
                S: '7',
                M: '4',
                L: '4',
                XL: '3',
                '3XL': '3'
            }
        },
        {
            color: '#2D2E2E',
            images: ['/img/man-jeans/man-jeans-black.jpg', '/img/man-jeans/man-jeans-black.jpg', '/img/man-jeans/man-jeans-black.jpg', '/img/man-jeans/man-jeans-black.jpg'],
            size: {
                S: '7',
                L: '4',
                XL: '3'
            }
        }],
        collection: 'casual',
        description: 'Overalls in washed organic cotton denim. Collar, button fly, and adjustable belt at waist. Chest pockets with flap. Long, gently flared sleeves and straight legs with front pockets and back pockets.'
    }),
    (index: number): ProductDataType => ({
        id: index.toString(),
        img: '/img/man-jacket-1/man-jacket-blue.jpg',
        title: 'Premium Mans Jacket',
        price: `5${(index * 2).toString()}`,
        productType: 'jacket',
        bestSeller: false,
        gender: 'man',
        colors: [{
            color: '#3B6392',
            images: ['/img/man-jacket-1/man-jacket-blue.jpg', '/img/man-jacket-1/man-jacket-blue.jpg', '/img/man-jacket-1/man-jacket-blue.jpg', '/img/man-jacket-1/man-jacket-blue.jpg', '/img/man-jacket-1/man-jacket-blue.jpg'],
            size: {
                XS: '2',
                S: '7',
                M: '4',
                L: '4',
                XL: '3',
                '3XL': '3'
            }
        },
        {
            color: '#2D2E2E',
            images: ['/img/man-jacket-1/man-jacket-black.jpg', '/img/man-jacket-1/man-jacket-black.jpg', '/img/man-jacket-1/man-jacket-black.jpg'],
            size: {
                S: '7',
                L: '4',
                XL: '3'
            }
        },
        {
            color: '#4193DA',
            images: ['/img/man-jacket-1/man-jacket-light-blue.jpg', '/img/man-jacket-1/man-jacket-light-blue.jpg', '/img/man-jacket-1/man-jacket-light-blue.jpg', '/img/man-jacket-1/man-jacket-light-blue.jpg'],
            size: {
                XS: '2',
                S: '7',
                M: '1',
                L: '4',
                XL: '3',
                '2XL': '5'
            }
        }],
        collection: 'casual',
        description: 'Overalls in washed organic cotton denim. Collar, button fly, and adjustable belt at waist. Chest pockets with flap. Long, gently flared sleeves and straight legs with front pockets and back pockets.'
    }),
    (index: number): ProductDataType => ({
        id: index.toString(),
        img: '/img/woman-jacket-1/woman-jacket-light-grey.jpg',
        title: 'Oversize Jacket',
        price: `3${(index * 2).toString()}`,
        productType: 'jacket',
        bestSeller: true,
        gender: 'woman',
        colors: [{
            color: '#B0C3C7',
            images: ['/img/woman-jacket-1/woman-jacket-light-grey.jpg', '/img/woman-jacket-1/woman-jacket-light-grey.jpg', '/img/woman-jacket-1/woman-jacket-light-grey.jpg', '/img/woman-jacket-1/woman-jacket-light-grey.jpg'],
            size: {
                XS: '2',
                S: '7',
                L: '4',
                XL: '3'
            }
        },
        {
            color: '#3B6392',
            images: ['/img/woman-jacket-1/woman-jacket-blue.jpg', '/img/woman-jacket-1/woman-jacket-blue.jpg', '/img/woman-jacket-1/woman-jacket-blue.jpg'],
            size: {
                XS: '2',
                S: '7',
                L: '4',
                XL: '3'
            }
        },
        {
            color: '#2D2E2E',
            images: ['/img/woman-jacket-1/woman-jacket-black.jpg', '/img/woman-jacket-1/woman-jacket-black.jpg', '/img/woman-jacket-1/woman-jacket-black.jpg', '/img/woman-jacket-1/woman-jacket-black.jpg', '/img/woman-jacket-1/woman-jacket-black.jpg'],
            size: {
                XS: '2',
                S: '7',
                L: '4',
                XL: '3'
            }
        }],
        collection: 'casual',
        description: 'Overalls in washed organic cotton denim. Collar, button fly, and adjustable belt at waist. Chest pockets with flap. Long, gently flared sleeves and straight legs with front pockets and back pockets.'
    }),
    (index: number): ProductDataType => ({
        id: index.toString(),
        img: '/img/woman-jacket-2/woman-jacket-blue.jpg',
        title: 'Jacket by Designer',
        price: `10${(index * 2).toString()}`,
        productType: 'jacket',
        bestSeller: false,
        gender: 'woman',
        colors: [{
            color: '#3B6392',
            images: ['/img/woman-jacket-2/woman-jacket-blue.jpg', '/img/woman-jacket-2/woman-jacket-blue.jpg', '/img/woman-jacket-2/woman-jacket-blue.jpg', '/img/woman-jacket-2/woman-jacket-blue.jpg'],
            size: {
                XS: '2',
                S: '7',
                M: '6',
                L: '4',
                XL: '3'
            }
        },
        {
            color: '#B0C3C7',
            images: ['/img/woman-jacket-2/woman-jacket-grey.jpg', '/img/woman-jacket-2/woman-jacket-grey.jpg', '/img/woman-jacket-2/woman-jacket-grey.jpg', '/img/woman-jacket-2/woman-jacket-grey.jpg'],
            size: {
                S: '7',
                M: '10',
                L: '4',
                XL: '3'
            }
        },
        {
            color: '#2D2E2E',
            images: ['/img/woman-jacket-2/woman-jacket-black.jpg', '/img/woman-jacket-2/woman-jacket-black.jpg', '/img/woman-jacket-2/woman-jacket-black.jpg', '/img/woman-jacket-2/woman-jacket-black.jpg'],
            size: {
                XS: '2',
                S: '7',
                L: '4'
            }
        }],
        collection: 'classic',
        description: 'Overalls in washed organic cotton denim. Collar, button fly, and adjustable belt at waist. Chest pockets with flap. Long, gently flared sleeves and straight legs with front pockets and back pockets.'
    }),
    (index: number): ProductDataType => ({
        id: index.toString(),
        img: '/img/woman-jeans-1/woman-jeans-light-blue.jpg',
        title: 'Skinny Jeans',
        price: `6${(index * 2).toString()}`,
        productType: 'jeans',
        bestSeller: false,
        gender: 'woman',
        colors: [{
            color: '#B0C3C7',
            images: ['/img/woman-jeans-1/woman-jeans-light-blue.jpg', '/img/woman-jeans-1/woman-jeans-light-blue.jpg', '/img/woman-jeans-1/woman-jeans-light-blue.jpg', '/img/woman-jeans-1/woman-jeans-light-blue.jpg'],
            size: {
                S: '7',
                M: '10',
                L: '4',
                XL: '3'
            }
        },
        {
            color: '#3B6392',
            images: ['/img/woman-jeans-1/woman-jeans-blue.jpg', '/img/woman-jeans-1/woman-jeans-blue.jpg', '/img/woman-jeans-1/woman-jeans-blue.jpg'],
            size: {
                XS: '2',
                S: '7',
                M: '6',
                L: '4',
                XL: '3'
            }
        },
        {
            color: '#2D2E2E',
            images: ['/img/woman-jeans-1/woman-jeans-black.jpg', '/img/woman-jeans-1/woman-jeans-black.jpg', '/img/woman-jeans-1/woman-jeans-black.jpg', '/img/woman-jeans-1/woman-jeans-black.jpg'],
            size: {
                XS: '2',
                S: '7',
                L: '4'
            }
        }],
        collection: 'classic',
        description: 'Overalls in washed organic cotton denim. Collar, button fly, and adjustable belt at waist. Chest pockets with flap. Long, gently flared sleeves and straight legs with front pockets and back pockets.'
    }),
    (index: number): ProductDataType => ({
        id: index.toString(),
        img: '/img/woman-jeans-2/woman-jeans-light-blue.jpg',
        title: 'Nice Jeans',
        price: `5${(index * 2).toString()}`,
        productType: 'jeans',
        bestSeller: false,
        gender: 'woman',
        colors: [{
            color: '#B0C3C7',
            images: ['/img/woman-jeans-2/woman-jeans-light-blue.jpg', '/img/woman-jeans-2/woman-jeans-light-blue.jpg', '/img/woman-jeans-2/woman-jeans-light-blue.jpg', '/img/woman-jeans-2/woman-jeans-light-blue.jpg'],
            size: {
                S: '7',
                M: '1',
                L: '4',
                XL: '3',
                '2XL': '5'
            }
        },
        {
            color: '#3B6392',
            images: ['/img/woman-jeans-2/woman-jeans-blue.jpg', '/img/woman-jeans-2/woman-jeans-blue.jpg', '/img/woman-jeans-2/woman-jeans-blue.jpg', '/img/woman-jeans-2/woman-jeans-blue.jpg'],
            size: {
                XS: '2',
                S: '7',
                M: '7',
                L: '4',
                XL: '3'
            }
        },
        {
            color: '#2D2E2E',
            images: ['/img/woman-jeans-2/woman-jeans-black.jpg', '/img/woman-jeans-2/woman-jeans-black.jpg', '/img/woman-jeans-2/woman-jeans-black.jpg'],
            size: {
                XS: '2',
                L: '4',
                XL: '3'
            }
        }],
        collection: 'casual',
        description: 'Overalls in washed organic cotton denim. Collar, button fly, and adjustable belt at waist. Chest pockets with flap. Long, gently flared sleeves and straight legs with front pockets and back pockets.'
    }),
    (index: number): ProductDataType => ({
        id: index.toString(),
        img: '/img/woman-shirt/woman-shirt-dark-blue.jpg',
        title: 'Casual Shirt',
        price: `1${(index * 2).toString()}`,
        productType: 'shirt',
        bestSeller: true,
        gender: 'woman',
        colors: [{
            color: '#3B6392',
            images: ['/img/woman-shirt/woman-shirt-dark-blue.jpg', '/img/woman-shirt/woman-shirt-dark-blue.jpg', '/img/woman-shirt/woman-shirt-dark-blue.jpg', '/img/woman-shirt/woman-shirt-dark-blue.jpg', '/img/woman-shirt/woman-shirt-dark-blue.jpg'],
            size: {
                XS: '2',
                S: '7'
            }
        },
        {
            color: '#B0C3C7',
            images: ['/img/woman-shirt/woman-shirt-light-blue.jpg', '/img/woman-shirt/woman-shirt-light-blue.jpg', '/img/woman-shirt/woman-shirt-light-blue.jpg', '/img/woman-shirt/woman-shirt-light-blue.jpg'],
            size: {
                S: '7',
                M: '9',
                L: '4',
                XL: '3'
            }
        },

        {
            color: '#4193DA',
            images: ['/img/woman-shirt/woman-shirt-blue.jpg', '/img/woman-shirt/woman-shirt-blue.jpg', '/img/woman-shirt/woman-shirt-blue.jpg', '/img/woman-shirt/woman-shirt-blue.jpg', '/img/woman-shirt/woman-shirt-blue.jpg'],
            size: {
                XS: '2',
                S: '7',
                M: '6',
                L: '4',
                XL: '3'
            }
        },
        {
            color: '#2D2E2E',
            images: ['/img/woman-shirt/woman-shirt-black.jpg', '/img/woman-shirt/woman-shirt-black.jpg', '/img/woman-shirt/woman-shirt-black.jpg', '/img/woman-shirt/woman-shirt-black.jpg'],
            size: {
                XS: '2',
                S: '7',
                M: '1',
                L: '4',
                XL: '3',
                '2XL': '5'
            }
        }],
        collection: 'classic',
        description: 'Overalls in washed organic cotton denim. Collar, button fly, and adjustable belt at waist. Chest pockets with flap. Long, gently flared sleeves and straight legs with front pockets and back pockets.'
    })
];

let initialNumber = 0;
const getNumberFromInterval = (): number => {
    initialNumber++;
    if (initialNumber === 9) {
        initialNumber = 0;
    }
    return initialNumber;
};

const productsNumber = Array.from(Array(123), (_, i) => i + 1);

export const db = productsNumber.map(item => {
    return productsData[getNumberFromInterval()](item);
});
