import { Injectable } from '@angular/core';
import { Contacto } from '../componentes/contacto/contacto';



@Injectable({
  providedIn: 'root'
})



export class ContactosService {

  contactos: Contacto[] = [
    {"id": 1, "nombre": "Ana", "telefono": "29 278869420", "email":"ana@gmail.com"},
    {"id": 2, "nombre": "Antonio", "telefono": "38 128451235", "email":"antonio@gmail.com"},
    {"id": 3, "nombre": "Angela", "telefono": "38 128451235", "email":"angela@gmail.com"},
    {"id": 4, "nombre": "Bruno", "telefono": "95 695521583", "email":"bruno@gmail.com"},
    {"id": 5, "nombre": "Beatriz", "telefono": "25 854986459", "email":"beatriz@gmail.com"}
  ]

  constructor() { 

    const contactosString = localStorage.getItem('contactos');
    const contactosLocalStorage = contactosString ? JSON.parse(contactosString): null;

    if( contactosLocalStorage != null){
      this.contactos = contactosLocalStorage || null
    }

    localStorage.setItem('contactos', JSON.stringify(this.contactos))

  }

  obtenerContactos(){
    return this.contactos;
  }

  guardarContactos(contacto:Contacto){
    this.contactos.push(contacto);
    localStorage.setItem('contactos', JSON.stringify(this.contactos))
  }
}


