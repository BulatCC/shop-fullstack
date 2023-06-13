import { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
import { AccordionWrapper } from '../../Common/Accordion/AccordionWrapper/AccordionWrapper';
import { FilterCatalogProps, FilterCatalogData, FilterCatalogAccordionData } from './FilterCatalog.type';
import { Radio } from '../../Common/Radio/Radio';
import { SortButtons } from '../../Common/SortButtons/SortButtons';
import { mockAPI } from '../../../services/api/api';
// import style from './FilterCatalog.module.scss';
// import { Collection } from '../../../constants';

const FilterCatalog = ({ classMod }: FilterCatalogProps): JSX.Element => {
    const [filterData, setFilterData] = useState<FilterCatalogData>(null);
    const [selectedValue, setSelectedValue] = useState({});
    useEffect(() => {
        mockAPI.getFilterData()
            .then((filterData) => setFilterData(filterData as FilterCatalogData))
            .catch((error) => console.log(error));
    }, []);

    const handleChange = (evt: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>): void => {
        const { name, value } = evt.target as HTMLButtonElement;
        setSelectedValue({
            ...selectedValue,
            [name]: value
        });
    };

    const getAccordionData = (): FilterCatalogAccordionData | undefined => {
        if (filterData) {
            return [
                {
                    title: 'Color',
                    element: (index): JSX.Element => {
                        const objectKey = Object.keys(filterData)[index];
                        return <Radio
                            data={filterData[objectKey]}
                            name={objectKey}
                            onChange={handleChange}
                            checked={selectedValue[objectKey as keyof FilterCatalogData]}
                        />;
                    }
                },
                {
                    title: 'Clothes type',
                    element: (index) => {
                        const objectKey = Object.keys(filterData)[index];
                        return <SortButtons
                            data={filterData[objectKey]}
                            name={Object.keys(filterData)[index]}
                            onChange={handleChange}
                            selected={selectedValue[objectKey as keyof FilterCatalogData]}
                        />;
                    }
                }
            // {
            //     title: 'Collection',
            //     element: (index) => {
            //         const objectKey = Object.values(Collection);
            //         console.log(selectedValue);
            //         return <SortButtons
            //             data={Object.values(Collection)}
            //             name={'collection'}
            //             onChange={handleChange}
            //             selected={selectedValue[objectKey as keyof FilterCatalogData]}
            //         />;
            //     }
            // }
            ];
        }
    };

    return (
        <>
            {filterData && <DropdownMenu title='Filter by' classMod={classMod}>
                <AccordionWrapper data={getAccordionData() as FilterCatalogAccordionData} />
            </DropdownMenu>}
        </>
    );
};

export { FilterCatalog };
