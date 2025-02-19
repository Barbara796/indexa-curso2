import { CommonModule } from "@angular/common"
import { ContactoComponent } from "../../componentes/contacto/contacto.component"
import { ContainerComponent } from "../../componentes/container/container.component"
import { EncabezadoComponent } from "../../componentes/encabezado/encabezado.component"
import { SeparadorComponent } from "../../componentes/separador/separador.component"
import { FormsModule } from "@angular/forms"
import { Component } from "@angular/core"
import agenda from '../../agenda.json'
import { RouterLink } from "@angular/router"


interface Contacto{
  id: number
  nombre: string
  telefono: string
}

@Component({
  selector: 'app-lista-contactos',
  imports: [
                ContainerComponent,
                EncabezadoComponent, 
                SeparadorComponent,
                ContactoComponent,
                CommonModule,
                FormsModule,
                RouterLink
  ],
  templateUrl: './lista-contactos.component.html',
  styleUrl: './lista-contactos.component.css'
})
export class ListaContactosComponent {

  alfabeto: string = "abcdefghijklmnñopqrstuvwxy";
  contactos: Contacto[] = agenda;
  filtroTexto:string = ''



  filtrarContactosPorTexto(): Contacto[] {
    if (!this.filtroTexto) {
      return this.contactos;
    }
    return this.contactos.filter(contacto => {
      return contacto.nombre.toLowerCase().includes(this.filtroTexto.toLowerCase());
    })
  }

  filtrarContactosPorLetraInicial(letra:string) : Contacto[] {
    return this.filtrarContactosPorTexto().filter( contacto => {
      return contacto.nombre.toLowerCase().startsWith(letra)
    } )
  }
}
