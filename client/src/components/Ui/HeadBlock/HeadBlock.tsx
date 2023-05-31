import { BreadCrumbs } from '../../Common/BreadCrumbs/BreadCrumbs';
import style from './HeadBlock.module.scss';

const HeadBlock = (): JSX.Element => {
    return (
        <>
            <div className={`${style['head-block']} hidden-mobile`}>
                <div className={`${style['head-block_container']} container`}>
                    <div className={style['head-block_wrap']}>
                        <BreadCrumbs classMod={style['head-block_bread-crumbs']}/>
                        <h2 className={style['head-block_title']}>Denim Collection <br /> Fall 2023</h2>
                    </div>
                    <div className={style['head-block_picture-wrap']}>
                        <img src='/img/head-block.jpg' className={style['head-block_img']} width="294" height="260" />
                    </div>
                </div>
            </div>
        </>
    );
};

export { HeadBlock };
