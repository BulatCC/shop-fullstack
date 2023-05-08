import { BreadCrumbs } from '../../Common/BreadCrumbs/BreadCrumbs';
import { Img } from '../../Common/Img/Img';
import style from './HeadBlock.module.scss';

import { mockCrumbsData } from '../../../services/mocks';

const screenWidth = document.documentElement.clientWidth;

const HeadBlock = (): JSX.Element => {
    return (
        <>
            {screenWidth > 767 && <div className={style['head-block']}>
                <div className={`${style['head-block_container']} container`}>
                    <div className={style['head-block_wrap']}>
                        <BreadCrumbs crumsbData={mockCrumbsData} classMod={style['head-block_bread-crumbs']}/>
                        <h2 className={style['head-block_title']}>Denim Collection <br /> Fall 2023</h2>
                    </div>
                    <div className={style['head-block_picture-wrap']}>
                        <Img imgPath='/img/head-block' className={style['head-block_img']} width="294" height="260" />
                    </div>
                </div>
            </div>}
        </>
    );
};

export { HeadBlock };
