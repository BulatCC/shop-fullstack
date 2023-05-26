import { useState, MouseEvent } from 'react';
import { InputField } from '../InputField/InputField';
import style from './SearchBlock.module.scss';
import { UseOpenMenu } from '../../../hooks/UseOpenMenu';

const SearchBlock = (): JSX.Element => {
    const [searchActive, setSearchActive] = useState<boolean>(false);
    const handleSearchShow = (evt: MouseEvent<HTMLButtonElement>): void => {
        evt.stopPropagation();
        setSearchActive(true);
    };

    UseOpenMenu(searchActive, setSearchActive, style['search-block_input']);

    return (
        <div className={`${style['search-block']} `}>
            {searchActive && <InputField classMod={style['search-block_input']} autoFocus={true}/>}
            <button className={style['search-block_button']} type="button" onClick={handleSearchShow}>
                <img className={style['search-block_img']} src="/img/svg/search.svg" alt="поиск" width="20" height="20" />
                <span className={style['search-block_text']}>Search</span>
            </button>
        </div>
    );
};

export { SearchBlock };
