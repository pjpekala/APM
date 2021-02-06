import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
    constructor(private httpClient: HttpClient) { }
    
}

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    private productUrl = 'www.myWebService.com/api/products';

    constructor(private http: HttpClient) { }

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl);
    }

    // getProducts(): IProduct[] {
    //     return [
    //         {
    //             "productId": 2,
    //             "productName": "Garden Cart",
    //             "productCode": "GDN-0023",
    //             "releaseDate": "March 18, 2019",
    //             "description": "jfkl;asdfjas;k",
    //             "price": 32.99,
    //             "starRating": 4.2,
    //             "imageUrl": "assets/images/garden_cart.png"
    //         },
    //         {
    //             "productId": 3,
    //             "productName": "Hammer",
    //             "productCode": "TBX-0023",
    //             "releaseDate": "April 20, 2020",
    //             "description": "jfk;k",
    //             "price": 69.69,
    //             "starRating": 8.4,
    //             "imageUrl": "assets/images/hammer.png"
    //         }
    //     ];
    // }
}