import { IProduct } from "../IProduct/IProduct";
import { IScreen } from "../IProduct/IScreen";

export interface IAllProducts {
    phones: IProduct<IScreen>[];
    tablets: IProduct<IScreen>[];
    laptops: IProduct<string>[];
    televisions: IProduct<string>[];
}