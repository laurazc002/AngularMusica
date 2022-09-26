import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotyService {

  URI: string = 'https://api.spotify.com/v1/artists/1hcdI2N1023RvSwLzTtdsp/top-tracks?market=US';
  token : string = 'Bearer BQDOGEy2FtWQ8EOKypH4veXn8A8WfC0FxHZVSLxBVHDIM_q5V-P2q5xHoiYXC_oAX3rqFFwOwZa6PAMvX7xkodrVi1XIaikuSC0w1MSVCaITxa-HZ4LAspIIQK_TXoCe-cq8ZR0H44ri-aXNRBL5j51-S98W0yVxzeriRc0YV9_6aNLsd2LUeeUr47FRoOM';
  
  constructor(public peticion: HttpClient) {
    console.log("Arrancando el servicio")

   }

   public traerCanciones(): Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.token
      })
    }; 

      return this.peticion.get(this.URI,httpOptions);
   }

}
