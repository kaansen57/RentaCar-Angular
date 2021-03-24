import { Car } from "./car";
import { ResponseModel } from "../responseModel";

export interface ProductResponseModel extends ResponseModel{
    data:Car[]
}