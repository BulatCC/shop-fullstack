export interface AmountButtonProps {
    handleUpdateAmount: (amount: number) => void;
    classMod?: string;
    maxValue?: number;
    value?: number;
}
