import { ProductDataType } from '../../../types/ProductData.type';

const productsData = [
    (index: number): ProductDataType => ({
        _id: index.toString(),
        img: '/img/man-shirt/man-shirt-1-grey.jpg',
        title: 'True Shirt',
        price: getRandomInt(10, 999),
        productType: 'shirts',
        bestSeller: true,
        gender: 'man',
        colors: [{
            color: '#B0C3C7',
            images: ['/img/man-shirt/man-shirt-1-grey.jpg', '/img/man-shirt/man-shirt-1-grey.jpg', '/img/man-shirt/man-shirt-1-grey.jpg', '/img/man-shirt/man-shirt-1-grey.jpg'],
            size: {
                XS: {
                    title: 'XS',
                    value: '2'
                },
                S: {
                    title: 'S',
                    value: '7'
                },
                M: {
                    title: 'M',
                    value: '5'
                },
                L: {
                    title: 'L',
                    value: '4'
                },
                XL: {
                    title: 'XL',
                    value: '3'
                },
                '2XL': {
                    title: '2XL',
                    value: '13'
                },
                '3XL': {
                    title: '3XL',
                    value: '6'
                }
            }
        },
        {
            color: '#3B6392',
            images: ['/img/man-shirt/man-shirt-1-dark-blue.jpg', '/img/man-shirt/man-shirt-1-dark-blue.jpg', '/img/man-shirt/man-shirt-1-dark-blue.jpg', '/img/man-shirt/man-shirt-1-dark-blue.jpg', '/img/man-shirt/man-shirt-1-dark-blue.jpg'],
            size: {
                XS: {
                    title: 'XS',
                    value: '12'
                },
                M: {
                    title: 'M',
                    value: '7'
                },
                L: {
                    title: 'L',
                    value: '4'
                },
                XL: {
                    title: 'XL',
                    value: '4'
                },
                '2XL': {
                    title: '2XL',
                    value: '5'
                }
            }
        },
        {
            color: '#2D2E2E',
            images: ['/img/man-shirt/man-shirt-1-dark-grey.jpg', '/img/man-shirt/man-shirt-1-dark-grey.jpg', '/img/man-shirt/man-shirt-1-dark-grey.jpg', '/img/man-shirt/man-shirt-1-dark-grey.jpg', '/img/man-jacket-2.jpg'],
            size: {
                XS: {
                    title: 'XS',
                    value: '7'
                },
                M: {
                    title: 'M',
                    value: '87'
                },
                L: {
                    title: 'L',
                    value: '15'
                },
                '2XL': {
                    title: '2XL',
                    value: '11'
                },
                '3XL': {
                    title: '3XL',
                    value: '1'
                }
            }
        },
        {
            color: '#4193DA',
            images: ['/img/man-shirt/man-shirt-1-blue.jpg', '/img/man-shirt/man-shirt-1-blue.jpg', '/img/man-shirt/man-shirt-1-blue.jpg', '/img/man-shirt/man-shirt-1-blue.jpg', '/img/man-jacket-1.jpg'],
            size: {
                XS: {
                    title: 'XS',
                    value: '12'
                },
                S: {
                    title: 'S',
                    value: '74'
                },
                L: {
                    title: 'L',
                    value: '44'
                },
                XL: {
                    title: 'XL',
                    value: '35'
                },
                '2XL': {
                    title: '2XL',
                    value: '3'
                }
            }
        }],
        collectionName: 'casual',
        description: 'Overalls in washed organic cotton denim. Collar, button fly, and adjustable belt at waist. Chest pockets with flap. Long, gently flared sleeves and straight legs with front pockets and back pockets.'
    }),
    (index: number): ProductDataType => ({
        _id: index.toString(),
        img: '/img/man-jacket/man-jacket-light-blue.jpg',
        title: 'Medium Full Sleeve Jacket',
        price: getRandomInt(10, 999),
        productType: 'jackets',
        bestSeller: false,
        gender: 'man',
        colors: [{
            color: '#B0C3C7',
            images: ['/img/man-jacket/man-jacket-light-blue.jpg', '/img/man-jacket/man-jacket-light-blue.jpg', '/img/man-jacket/man-jacket-light-blue.jpg', '/img/man-jacket/man-jacket-light-blue.jpg'],
            size: {
                XS: {
                    title: 'XS',
                    value: '7'
                },
                S: {
                    title: 'S',
                    value: '45'
                },
                '2XL': {
                    title: '2XL',
                    value: '65'
                },
                '3XL': {
                    title: '3XL',
                    value: '13'
                }
            }
        },
        {
            color: '#3B6392',
            images: ['/img/man-jacket/man-jacket-dark-blue.jpg', '/img/man-jacket/man-jacket-dark-blue.jpg', '/img/man-jacket/man-jacket-dark-blue.jpg', '/img/man-jacket/man-jacket-dark-blue.jpg', '/img/man-jacket/man-jacket-dark-blue.jpg'],
            size: {
                S: {
                    title: 'S',
                    value: '5'
                },
                M: {
                    title: 'M',
                    value: '78'
                },
                L: {
                    title: 'L',
                    value: '24'
                },
                '2XL': {
                    title: '2XL',
                    value: '17'
                },
                '3XL': {
                    title: '3XL',
                    value: '6'
                }
            }
        },
        {
            color: '#2D2E2E',
            images: ['/img/man-jacket/man-jacket-black.jpg', '/img/man-jacket/man-jacket-black.jpg', '/img/man-jacket/man-jacket-black.jpg', '/img/man-jacket/man-jacket-black.jpg', '/img/man-jacket/man-jacket-black.jpg'],
            size: {
                XS: {
                    title: 'XS',
                    value: '45'
                },
                S: {
                    title: 'S',
                    value: '57'
                },
                M: {
                    title: 'M',
                    value: '4'
                },
                L: {
                    title: 'L',
                    value: '23'
                },
                XL: {
                    title: 'XL',
                    value: '33'
                },
                '2XL': {
                    title: '2XL',
                    value: '78'
                },
                '3XL': {
                    title: '3XL',
                    value: '74'
                }
            }
        },
        {
            color: '#4193DA',
            images: ['/img/man-jacket/man-jacket-blue.jpg', '/img/man-jacket/man-jacket-blue.jpg', '/img/man-jacket/man-jacket-blue.jpg', '/img/man-jacket/man-jacket-blue.jpg', '/img/man-jacket/man-jacket-blue.jpg'],
            size: {
                XS: {
                    title: 'XS',
                    value: '2'
                },
                S: {
                    title: 'S',
                    value: '7'
                },
                M: {
                    title: 'M',
                    value: '5'
                }
            }
        }],
        collectionName: 'casual',
        description: 'Overalls in washed organic cotton denim. Collar, button fly, and adjustable belt at waist. Chest pockets with flap. Long, gently flared sleeves and straight legs with front pockets and back pockets.'
    }),
    (index: number): ProductDataType => ({
        _id: index.toString(),
        img: '/img/man-jeans/man-jeans-green.jpg',
        title: 'New Cotton Jeans',
        price: getRandomInt(10, 999),
        productType: 'jeans',
        bestSeller: false,
        gender: 'man',
        colors: [{
            color: '#2fa238',
            images: ['/img/man-jeans/man-jeans-green.jpg', '/img/man-jeans/man-jeans-green.jpg', '/img/man-jeans/man-jeans-green.jpg', '/img/man-jeans/man-jeans-green.jpg'],
            size: {
                XS: {
                    title: 'XS',
                    value: '7'
                },
                S: {
                    title: 'S',
                    value: '8'
                },
                M: {
                    title: 'M',
                    value: '5'
                },
                L: {
                    title: 'L',
                    value: '4'
                },
                XL: {
                    title: 'XL',
                    value: '33'
                },
                '2XL': {
                    title: '2XL',
                    value: '143'
                },
                '3XL': {
                    title: '3XL',
                    value: '16'
                }
            }
        },
        {
            color: '#3B6392',
            images: ['/img/man-jeans/man-jeans-blue.jpg', '/img/man-jeans/man-jeans-blue.jpg', '/img/man-jeans/man-jeans-blue.jpg'],
            size: {
                XS: {
                    title: 'XS',
                    value: '2'
                },
                S: {
                    title: 'S',
                    value: '7'
                }
            }
        },
        {
            color: '#2D2E2E',
            images: ['/img/man-jeans/man-jeans-black.jpg', '/img/man-jeans/man-jeans-black.jpg', '/img/man-jeans/man-jeans-black.jpg', '/img/man-jeans/man-jeans-black.jpg'],
            size: {
                '2XL': {
                    title: '2XL',
                    value: '13'
                },
                '3XL': {
                    title: '3XL',
                    value: '6'
                }
            }
        }],
        collectionName: 'casual',
        description: 'Overalls in washed organic cotton denim. Collar, button fly, and adjustable belt at waist. Chest pockets with flap. Long, gently flared sleeves and straight legs with front pockets and back pockets.'
    }),
    (index: number): ProductDataType => ({
        _id: index.toString(),
        img: '/img/man-jacket-1/man-jacket-blue.jpg',
        title: 'Premium Mans Jacket',
        price: getRandomInt(10, 999),
        productType: 'jackets',
        bestSeller: false,
        gender: 'man',
        colors: [{
            color: '#3B6392',
            images: ['/img/man-jacket-1/man-jacket-blue.jpg', '/img/man-jacket-1/man-jacket-blue.jpg', '/img/man-jacket-1/man-jacket-blue.jpg', '/img/man-jacket-1/man-jacket-blue.jpg', '/img/man-jacket-1/man-jacket-blue.jpg'],
            size: {
                S: {
                    title: 'S',
                    value: '72'
                },
                M: {
                    title: 'M',
                    value: '51'
                },
                L: {
                    title: 'L',
                    value: '44'
                },
                XL: {
                    title: 'XL',
                    value: '37'
                },
                '2XL': {
                    title: '2XL',
                    value: '3'
                },
                '3XL': {
                    title: '3XL',
                    value: '16'
                }
            }
        },
        {
            color: '#2D2E2E',
            images: ['/img/man-jacket-1/man-jacket-black.jpg', '/img/man-jacket-1/man-jacket-black.jpg', '/img/man-jacket-1/man-jacket-black.jpg'],
            size: {
                M: {
                    title: 'M',
                    value: '5'
                },
                L: {
                    title: 'L',
                    value: '4'
                },
                XL: {
                    title: 'XL',
                    value: '3'
                }
            }
        },
        {
            color: '#4193DA',
            images: ['/img/man-jacket-1/man-jacket-light-blue.jpg', '/img/man-jacket-1/man-jacket-light-blue.jpg', '/img/man-jacket-1/man-jacket-light-blue.jpg', '/img/man-jacket-1/man-jacket-light-blue.jpg'],
            size: {
                XS: {
                    title: 'XS',
                    value: '21'
                },
                M: {
                    title: 'M',
                    value: '5'
                },
                XL: {
                    title: 'XL',
                    value: '31'
                },
                '3XL': {
                    title: '3XL',
                    value: '68'
                }
            }
        }],
        collectionName: 'casual',
        description: 'Overalls in washed organic cotton denim. Collar, button fly, and adjustable belt at waist. Chest pockets with flap. Long, gently flared sleeves and straight legs with front pockets and back pockets.'
    }),
    (index: number): ProductDataType => ({
        _id: index.toString(),
        img: '/img/woman-jacket-1/woman-jacket-light-grey.jpg',
        title: 'Oversize Jacket',
        price: getRandomInt(10, 999),
        productType: 'jackets',
        bestSeller: true,
        gender: 'woman',
        colors: [{
            color: '#B0C3C7',
            images: ['/img/woman-jacket-1/woman-jacket-light-grey.jpg', '/img/woman-jacket-1/woman-jacket-light-grey.jpg', '/img/woman-jacket-1/woman-jacket-light-grey.jpg', '/img/woman-jacket-1/woman-jacket-light-grey.jpg'],
            size: {
                XS: {
                    title: 'XS',
                    value: '12'
                },
                S: {
                    title: 'S',
                    value: '72'
                },
                M: {
                    title: 'M',
                    value: '15'
                },
                L: {
                    title: 'L',
                    value: '4'
                },
                XL: {
                    title: 'XL',
                    value: '13'
                },
                '2XL': {
                    title: '2XL',
                    value: '131'
                },
                '3XL': {
                    title: '3XL',
                    value: '61'
                }
            }
        },
        {
            color: '#3B6392',
            images: ['/img/woman-jacket-1/woman-jacket-blue.jpg', '/img/woman-jacket-1/woman-jacket-blue.jpg', '/img/woman-jacket-1/woman-jacket-blue.jpg'],
            size: {
                S: {
                    title: 'S',
                    value: '17'
                },
                M: {
                    title: 'M',
                    value: '5'
                },
                L: {
                    title: 'L',
                    value: '4'
                },
                XL: {
                    title: 'XL',
                    value: '3'
                }
            }
        },
        {
            color: '#2D2E2E',
            images: ['/img/woman-jacket-1/woman-jacket-black.jpg', '/img/woman-jacket-1/woman-jacket-black.jpg', '/img/woman-jacket-1/woman-jacket-black.jpg', '/img/woman-jacket-1/woman-jacket-black.jpg', '/img/woman-jacket-1/woman-jacket-black.jpg'],
            size: {
                XS: {
                    title: 'XS',
                    value: '2'
                },
                S: {
                    title: 'S',
                    value: '7'
                },
                '2XL': {
                    title: '2XL',
                    value: '13'
                },
                '3XL': {
                    title: '3XL',
                    value: '6'
                }
            }
        }],
        collectionName: 'casual',
        description: 'Overalls in washed organic cotton denim. Collar, button fly, and adjustable belt at waist. Chest pockets with flap. Long, gently flared sleeves and straight legs with front pockets and back pockets.'
    }),
    (index: number): ProductDataType => ({
        _id: index.toString(),
        img: '/img/woman-jacket-2/woman-jacket-blue.jpg',
        title: 'Jacket by Designer',
        price: getRandomInt(10, 999),
        productType: 'jackets',
        bestSeller: false,
        gender: 'woman',
        colors: [{
            color: '#3B6392',
            images: ['/img/woman-jacket-2/woman-jacket-blue.jpg', '/img/woman-jacket-2/woman-jacket-blue.jpg', '/img/woman-jacket-2/woman-jacket-blue.jpg', '/img/woman-jacket-2/woman-jacket-blue.jpg'],
            size: {
                S: {
                    title: 'S',
                    value: '17'
                },
                M: {
                    title: 'M',
                    value: '15'
                },
                L: {
                    title: 'L',
                    value: '41'
                },
                '2XL': {
                    title: '2XL',
                    value: '13'
                }
            }
        },
        {
            color: '#B0C3C7',
            images: ['/img/woman-jacket-2/woman-jacket-grey.jpg', '/img/woman-jacket-2/woman-jacket-grey.jpg', '/img/woman-jacket-2/woman-jacket-grey.jpg', '/img/woman-jacket-2/woman-jacket-grey.jpg'],
            size: {
                XS: {
                    title: 'XS',
                    value: '2'
                },
                S: {
                    title: 'S',
                    value: '7'
                },
                M: {
                    title: 'M',
                    value: '5'
                },
                L: {
                    title: 'L',
                    value: '4'
                },
                XL: {
                    title: 'XL',
                    value: '3'
                },
                '2XL': {
                    title: '2XL',
                    value: '13'
                },
                '3XL': {
                    title: '3XL',
                    value: '6'
                }
            }
        },
        {
            color: '#2D2E2E',
            images: ['/img/woman-jacket-2/woman-jacket-black.jpg', '/img/woman-jacket-2/woman-jacket-black.jpg', '/img/woman-jacket-2/woman-jacket-black.jpg', '/img/woman-jacket-2/woman-jacket-black.jpg'],
            size: {
                M: {
                    title: 'M',
                    value: '5'
                },
                XL: {
                    title: 'XL',
                    value: '3'
                },
                '3XL': {
                    title: '3XL',
                    value: '6'
                }
            }
        }],
        collectionName: 'classic',
        description: 'Overalls in washed organic cotton denim. Collar, button fly, and adjustable belt at waist. Chest pockets with flap. Long, gently flared sleeves and straight legs with front pockets and back pockets.'
    }),
    (index: number): ProductDataType => ({
        _id: index.toString(),
        img: '/img/woman-jeans-1/woman-jeans-light-blue.jpg',
        title: 'Skinny Jeans',
        price: getRandomInt(10, 999),
        productType: 'jeans',
        bestSeller: false,
        gender: 'woman',
        colors: [{
            color: '#B0C3C7',
            images: ['/img/woman-jeans-1/woman-jeans-light-blue.jpg', '/img/woman-jeans-1/woman-jeans-light-blue.jpg', '/img/woman-jeans-1/woman-jeans-light-blue.jpg', '/img/woman-jeans-1/woman-jeans-light-blue.jpg'],
            size: {
                XS: {
                    title: 'XS',
                    value: '21'
                },
                S: {
                    title: 'S',
                    value: '71'
                },
                L: {
                    title: 'L',
                    value: '41'
                },
                XL: {
                    title: 'XL',
                    value: '31'
                },
                '2XL': {
                    title: '2XL',
                    value: '113'
                },
                '3XL': {
                    title: '3XL',
                    value: '67'
                }
            }
        },
        {
            color: '#3B6392',
            images: ['/img/woman-jeans-1/woman-jeans-blue.jpg', '/img/woman-jeans-1/woman-jeans-blue.jpg', '/img/woman-jeans-1/woman-jeans-blue.jpg'],
            size: {
                XS: {
                    title: 'XS',
                    value: '72'
                },
                S: {
                    title: 'S',
                    value: '77'
                },
                M: {
                    title: 'M',
                    value: '54'
                },
                L: {
                    title: 'L',
                    value: '94'
                },
                XL: {
                    title: 'XL',
                    value: '3'
                },
                '2XL': {
                    title: '2XL',
                    value: '153'
                }
            }
        },
        {
            color: '#2D2E2E',
            images: ['/img/woman-jeans-1/woman-jeans-black.jpg', '/img/woman-jeans-1/woman-jeans-black.jpg', '/img/woman-jeans-1/woman-jeans-black.jpg', '/img/woman-jeans-1/woman-jeans-black.jpg'],
            size: {
                XS: {
                    title: 'XS',
                    value: '2'
                },
                L: {
                    title: 'L',
                    value: '4'
                },
                XL: {
                    title: 'XL',
                    value: '3'
                },
                '2XL': {
                    title: '2XL',
                    value: '13'
                },
                '3XL': {
                    title: '3XL',
                    value: '6'
                }
            }
        }],
        collectionName: 'classic',
        description: 'Overalls in washed organic cotton denim. Collar, button fly, and adjustable belt at waist. Chest pockets with flap. Long, gently flared sleeves and straight legs with front pockets and back pockets.'
    }),
    (index: number): ProductDataType => ({
        _id: index.toString(),
        img: '/img/woman-jeans-2/woman-jeans-light-blue.jpg',
        title: 'Nice Jeans',
        price: getRandomInt(10, 999),
        productType: 'jeans',
        bestSeller: false,
        gender: 'woman',
        colors: [{
            color: '#B0C3C7',
            images: ['/img/woman-jeans-2/woman-jeans-light-blue.jpg', '/img/woman-jeans-2/woman-jeans-light-blue.jpg', '/img/woman-jeans-2/woman-jeans-light-blue.jpg', '/img/woman-jeans-2/woman-jeans-light-blue.jpg'],
            size: {
                M: {
                    title: 'M',
                    value: '15'
                },
                L: {
                    title: 'L',
                    value: '41'
                },
                XL: {
                    title: 'XL',
                    value: '37'
                },
                '2XL': {
                    title: '2XL',
                    value: '137'
                },
                '3XL': {
                    title: '3XL',
                    value: '86'
                }
            }
        },
        {
            color: '#3B6392',
            images: ['/img/woman-jeans-2/woman-jeans-blue.jpg', '/img/woman-jeans-2/woman-jeans-blue.jpg', '/img/woman-jeans-2/woman-jeans-blue.jpg', '/img/woman-jeans-2/woman-jeans-blue.jpg'],
            size: {
                XS: {
                    title: 'XS',
                    value: '2'
                },
                S: {
                    title: 'S',
                    value: '74'
                },
                M: {
                    title: 'M',
                    value: '45'
                },
                XL: {
                    title: 'XL',
                    value: '3'
                },
                '2XL': {
                    title: '2XL',
                    value: '13'
                },
                '3XL': {
                    title: '3XL',
                    value: '64'
                }
            }
        },
        {
            color: '#2D2E2E',
            images: ['/img/woman-jeans-2/woman-jeans-black.jpg', '/img/woman-jeans-2/woman-jeans-black.jpg', '/img/woman-jeans-2/woman-jeans-black.jpg'],
            size: {
                S: {
                    title: 'S',
                    value: '7'
                },
                M: {
                    title: 'M',
                    value: '5'
                },
                L: {
                    title: 'L',
                    value: '4'
                },
                XL: {
                    title: 'XL',
                    value: '3'
                },
                '2XL': {
                    title: '2XL',
                    value: '13'
                },
                '3XL': {
                    title: '3XL',
                    value: '6'
                }
            }
        }],
        collectionName: 'casual',
        description: 'Overalls in washed organic cotton denim. Collar, button fly, and adjustable belt at waist. Chest pockets with flap. Long, gently flared sleeves and straight legs with front pockets and back pockets.'
    }),
    (index: number): ProductDataType => ({
        _id: index.toString(),
        img: '/img/woman-shirt/woman-shirt-dark-blue.jpg',
        title: 'Casual Shirt',
        price: getRandomInt(10, 999),
        productType: 'shirts',
        bestSeller: true,
        gender: 'woman',
        colors: [{
            color: '#3B6392',
            images: ['/img/woman-shirt/woman-shirt-dark-blue.jpg', '/img/woman-shirt/woman-shirt-dark-blue.jpg', '/img/woman-shirt/woman-shirt-dark-blue.jpg', '/img/woman-shirt/woman-shirt-dark-blue.jpg', '/img/woman-shirt/woman-shirt-dark-blue.jpg'],
            size: {
                XS: {
                    title: 'XS',
                    value: '22'
                },
                S: {
                    title: 'S',
                    value: '76'
                },
                M: {
                    title: 'M',
                    value: '5'
                },
                L: {
                    title: 'L',
                    value: '46'
                },
                XL: {
                    title: 'XL',
                    value: '37'
                },
                '2XL': {
                    title: '2XL',
                    value: '183'
                },
                '3XL': {
                    title: '3XL',
                    value: '96'
                }
            }
        },
        {
            color: '#B0C3C7',
            images: ['/img/woman-shirt/woman-shirt-light-blue.jpg', '/img/woman-shirt/woman-shirt-light-blue.jpg', '/img/woman-shirt/woman-shirt-light-blue.jpg', '/img/woman-shirt/woman-shirt-light-blue.jpg'],
            size: {
                S: {
                    title: 'S',
                    value: '71'
                },
                L: {
                    title: 'L',
                    value: '41'
                },
                '2XL': {
                    title: '2XL',
                    value: '55'
                }
            }
        },

        {
            color: '#4193DA',
            images: ['/img/woman-shirt/woman-shirt-blue.jpg', '/img/woman-shirt/woman-shirt-blue.jpg', '/img/woman-shirt/woman-shirt-blue.jpg', '/img/woman-shirt/woman-shirt-blue.jpg', '/img/woman-shirt/woman-shirt-blue.jpg'],
            size: {
                XS: {
                    title: 'XS',
                    value: '2'
                },
                S: {
                    title: 'S',
                    value: '7'
                },
                M: {
                    title: 'M',
                    value: '5'
                },
                L: {
                    title: 'L',
                    value: '4'
                },
                XL: {
                    title: 'XL',
                    value: '3'
                },
                '2XL': {
                    title: '2XL',
                    value: '13'
                },
                '3XL': {
                    title: '3XL',
                    value: '6'
                }
            }
        },
        {
            color: '#2D2E2E',
            images: ['/img/woman-shirt/woman-shirt-black.jpg', '/img/woman-shirt/woman-shirt-black.jpg', '/img/woman-shirt/woman-shirt-black.jpg', '/img/woman-shirt/woman-shirt-black.jpg'],
            size: {
                XS: {
                    title: 'XS',
                    value: '82'
                },
                M: {
                    title: 'M',
                    value: '58'
                },
                XL: {
                    title: 'XL',
                    value: '38'
                },
                '3XL': {
                    title: '3XL',
                    value: '68'
                }
            }
        }],
        collectionName: 'classic',
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

function getRandomInt (min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
