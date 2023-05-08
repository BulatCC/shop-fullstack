import { useState, ChangeEvent, MouseEvent } from 'react';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
import { Accordion } from '../../Common/Accordion/AccordionWrapper/AccordionWrapper';
import { FilterCatalogProps } from './FilterCatalog.type';
import { Radio } from '../../Common/Radio/Radio';
import { SortButtons } from '../../Common/SortButtons/SortButtons';
import style from './FilterCatalog.module.scss';

const radioData = [
    {
        id: '#B0C3C7',
        value: '#B0C3C7',
        color: '#B0C3C7'
    },
    {
        id: '#3B6392',
        value: '#3B6392',
        color: '#3B6392'
    },
    {
        id: '#2D2E2E',
        value: '#2D2E2E',
        color: '#2D2E2E'
    }
];

const sortData = [
    {
        id: '1',
        value: 'Casual'
    },
    {
        id: '2',
        value: 'Classic'
    }
];

const FilterCatalog = ({ classMod }: FilterCatalogProps): JSX.Element => {
    const [filterData, setFilterData] = useState({
        color: '#B0C3C7',
        collection: 'Casual'
    });

    const handleChange = (evt: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>): void => {
        const { value, name } = evt.target as HTMLButtonElement;
        setFilterData({
            ...filterData,
            [name]: value
        });
    };

    const accordionData = [{
        title: 'Color',
        element: <Radio
            data={radioData}
            name='color'
            checked={filterData.color}
            onChange={handleChange}
        />
    },
    {
        title: 'Collection',
        element: <SortButtons
            data={sortData}
            name='collection'
            onChange={handleChange}
            selected={filterData.collection}
        />
    }];

    return (
        <DropdownMenu title='Filter by' classMod={classMod}>
            <Accordion data={accordionData} />
            <div>
                <button className={`${style['filter-catalog_button']} button`} type="button">Apply (9 products)</button>
                <button className={`${style['filter-catalog_button']} button button--white button--border-bottom`} type="button">Clear all</button>
            </div>
        </DropdownMenu>
    );
};

export { FilterCatalog };
