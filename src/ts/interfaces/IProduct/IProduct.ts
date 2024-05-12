import { TColors } from "../../types/TColors";

export interface IProduct<T> {
    articleId: number;
    articleName: string;
    discount: number;
    price: number;
    category: string;
    brand: string;
    model: string;
    colors: TColors[];
    quantity: number;
    rating: number;
    screen: T;
    memory: {
        ramMemory: string;
        internalMemory: string;
    },
    battery: string;
    status: string;
    images: string[];
    timestamp: number;
    camera?: {
        rearCamera: string; 
        frontCamera: string;
    },
    ram?: string;
    processor?: string;
    graphic?: string;
    ssd_hdd?: string;
	digitalTuner?: string;
	technology?: string;
	resolution?: string;
	operatingSystem?: string;
}