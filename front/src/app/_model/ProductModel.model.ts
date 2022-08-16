import { Image } from "./image.model"
export interface ProductModel{
    id:number,
    productName:string,
    productDescription:string,
    discountedPrice: number,
    originalPrice:number,
    productImages:Image[]
}