import { MouseEvent, useState, useEffect } from 'react';
import { AmountButtonProps } from './AmountButton.type';
import style from './AmountButton.module.scss';
import cn from 'classnames';

const ButtonValue = {
    Add: '+',
    Subtract: '-'
};

const AmountButton = ({ handleUpdateAmount, classMod, maxValue, value = 1 }: AmountButtonProps): JSX.Element => {
    const [amount, setAmount] = useState(value);
    const handleClick = (evt: MouseEvent<HTMLElement>): void => {
        const buttonValue = (evt.target as HTMLElement).textContent;
        if (buttonValue === ButtonValue.Subtract && amount !== 0) {
            setAmount(amount - 1);
        }

        if (buttonValue === ButtonValue.Add && amount !== maxValue) {
            setAmount(amount => amount + 1);
        }
    };

    useEffect(() => {
        handleUpdateAmount(amount);
    });

    return (
        <div className = {cn(style['amount-button'], classMod)} onClick={handleClick}>
            <button className={cn(style['amount-button_button'], {
                [style.disabled]: amount === 0
            })}>{ButtonValue.Subtract}</button>
            <span className={style['amount-button_number']}>{amount}</span>
            <button className={cn(style['amount-button_button'], {
                [style.disabled]: amount === maxValue
            })}>{ButtonValue.Add}</button>
        </div>
    );
};

export { AmountButton };
