import { Component, OnInit } from '@angular/core';
import { Integrante } from '../interface/integrante';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent {


  integrantes: Integrante[]=[

    {'nombre': 'Natalia Lafourcade', 
      "edad": 38,
      "foto": 'https://firebasestorage.googleapis.com/v0/b/spotify-8664d.appspot.com/o/natalia_lafourcade_1318.webp?alt=media&token=6b9401b9-1c25-4472-a525-3e947afe17a6'},
  
    {'nombre': 'Miguel Peña',
       "edad": 70, 
      "foto": 'https://firebasestorage.googleapis.com/v0/b/spotify-8664d.appspot.com/o/miguelito.jpg?alt=media&token=567b85c4-9c1c-4562-838a-ea5026cfa3ec'},
  
    {'nombre': 'Juan Carlos Allende', 
      "edad": 75,
      "foto": 'https://firebasestorage.googleapis.com/v0/b/spotify-8664d.appspot.com/o/Juan-Carlos.jpg?alt=media&token=0a029bcc-a192-4e79-888c-48885c1448fa'},
  
  
  
  ]

  constructor() { }



}
