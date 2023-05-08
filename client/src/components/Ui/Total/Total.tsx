import { TotalProps } from './Total.type';
import style from './Total.module.scss';

const Total = ({ price, classMod }: TotalProps): JSX.Element => {
    return (
        <div className={`${style.total} ${classMod ?? ''}`}>
            <div className={style.total_amount}>
                <span>Total:</span>
                <span>$ {price}</span>
            </div>
            <button className={`${style.total_button} button`}>Buy</button>
        </div>
    );
};

export { Total };
