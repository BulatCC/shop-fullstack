import { useId } from 'react';
import { AccordionItem } from '../AccordionItem/AccordionItem';
import { AccordionWrapperProps } from './AccordionWrapper.type';

const AccordionWrapper = ({ data }: AccordionWrapperProps): JSX.Element => {
    const uniqId = useId();
    return (
        <ul>
            {data.map(({ title, element }, i) => (
                <AccordionItem title={title} element={element(i)} key={uniqId} />
            ))}
        </ul>
    );
};

export { AccordionWrapper };
