import { useEffect } from 'react';

const UseOpenMenu = (
    menuActive: boolean,
    setMenuActive: React.Dispatch<React.SetStateAction<boolean>>,
    parentContainerClass: string
): void => {
    useEffect(() => {
        const handleClick = (evt: Event): void => {
            const target = evt.target as HTMLElement;
            if (menuActive && !target.closest(`.${parentContainerClass}`)) {
                setMenuActive(false);
            }
        };

        const handleEscPress = (evt: KeyboardEvent): void => {
            if (evt.key === 'Escape' && menuActive) {
                setMenuActive(false);
            }
        };

        if (menuActive) {
            document.addEventListener('click', handleClick);
            document.addEventListener('keydown', handleEscPress);
        }

        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('keydown', handleEscPress);
        };
    }, [menuActive]);
};

export { UseOpenMenu };
