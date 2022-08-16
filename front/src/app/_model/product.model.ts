import { FileHandle } from "./file-handle.model";

export interface product{
    id:number,
    productName:string,
    productDescription:string,
    discountedPrice: number,
    originalPrice:number,
    productImages:FileHandle[]
}