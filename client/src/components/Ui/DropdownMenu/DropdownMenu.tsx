import { useState, useRef, MouseEvent } from 'react';
import { DropdownMenuProps } from './DropdownMenu.type';
import style from './DropdownMenu.module.scss';
import { UseOpenMenu } from '../../../hooks/UseOpenMenu';
import arrowDownAccordion from '../../../assets/img/svg/arrowDownAccordion.svg';

const screenWidth = document.documentElement.clientWidth;

const DropdownMenu = ({ title, children, classMod }: DropdownMenuProps): JSX.Element => {
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [dropdownActive, setDropdownActive] = useState<boolean>(false);
    const handleDropdownShow = (evt: MouseEvent<HTMLButtonElement>): void => {
        evt.stopPropagation();
        setDropdownActive(!dropdownActive);
    };

    const handleCloseButton = (): void => {
        setDropdownActive(!dropdownActive);
    };

    UseOpenMenu(dropdownActive, setDropdownActive, style['dropdown-menu']);

    return (
        <div className={`${style['dropdown-menu']} ${classMod ?? ''}`} ref={dropdownRef} >
            <button className={style['dropdown-menu_dropdown']} type="button" onClick={handleDropdownShow}>
                <span className={style['dropdown-menu_dropdown-title']}>{title}</span>
                <img className={style['dropdown-menu_icon']} src={arrowDownAccordion} width="16" height="8" />
            </button>
            {dropdownActive && <div className={style['dropdown-menu_content']}>
                <div className={style['dropdown-menu_header']}>
                    <h3 className={style['dropdown-menu_title']}>{title}</h3>
                    {screenWidth < 768 && <button
                        className={style['dropdown-menu_button']}
                        type="button"
                        onClick={handleCloseButton}
                    >Close</button>
                    }
                </div>
                {children}
            </div>}
        </div>
    );
};

export { DropdownMenu };
