const filterData = {
    colors: ['#B0C3C7', '#3B6392', '#2D2E2E'],
    productType: ['jacket', 'shirt', 'jeans']
};

export const getFilterData = async (): Promise<unknown> => (
    await new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(filterData);
        }, 1000);
    })
);
