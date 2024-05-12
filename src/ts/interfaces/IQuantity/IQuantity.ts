import { MouseEventHandler } from "react";

export interface IQuantity {
    disabledDecrement: boolean;
    handleDecrement: MouseEventHandler<HTMLButtonElement>;
    quantity: number;
    disabledIncrement: boolean;
    handleIncrement: MouseEventHandler<HTMLButtonElement>;
}