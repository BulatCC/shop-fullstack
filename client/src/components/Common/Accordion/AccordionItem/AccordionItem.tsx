import { useState } from 'react';
import { AccordionItemProps } from './AccordionItem.type';
import style from '../Accordion.module.scss';
import arrowDownAccordion from '../../../../assets/img/svg/arrowDownAccordion.svg';

const AccordionItem = ({ title, element }: AccordionItemProps): JSX.Element => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const handleOpen = (): void => {
        setExpanded(!expanded);
    };

    return (
        <li className={`${style.accordion_item} ${expanded ? style.active : ''} `} key={title}>
            <div className={style['accordion_title-wrap']} onClick={handleOpen}>
                <span className={style.accordion_title}>{title}</span>
                <img className={style.accordion_icon} src={arrowDownAccordion} width="16" height="8" />
            </div>
            {expanded && <div className={style.accordion_wrapper}>
                <div className={style.accordion_content}>
                    {element}
                </div>
            </div>}
        </li>
    );
};

export { AccordionItem };
