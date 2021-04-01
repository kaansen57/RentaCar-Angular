import { Image } from "../image/image";

export interface CarDto extends Image{
        carId:number;
        carName:string;
        brandId:number;
        brandName:string;
        colorId:number;
        colorName:string;
        imagePath:string;
        date:Date;
        dailyPrice:number;
}