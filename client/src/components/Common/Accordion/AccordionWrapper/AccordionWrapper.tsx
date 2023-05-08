import { AccordionItem } from '../AccordionItem/AccordionItem';
import { AccordionWrapperProps } from './AccordionWrapper.type';

const AccordionWrapper = ({ data }: AccordionWrapperProps): JSX.Element => {
    return (
        <ul>
            {data.map(({ title, element }, i) => (
                <AccordionItem title={title} element={element} key={title + i.toString()} />
            ))}
        </ul>
    );
};

export { AccordionWrapper as Accordion };
