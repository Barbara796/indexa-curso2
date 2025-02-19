import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [ContainerComponent, 
            SeparadorComponent,
            ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  //forma individual
  //nombre = new FormControl('Barbara');
  contactoForm: FormGroup;

  constructor(){
    this.contactoForm = new FormGroup({
      nombre: new FormControl('',Validators.required),
      telefono: new FormControl('', Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      cumpleano: new FormControl(''),
      redes: new FormControl(''),
      observaciones: new FormControl(''),
    })
  }

  guardarContacto(){
    if(this.contactoForm.valid)
    console.log(this.contactoForm.value);
  }

  cancelar(){
    console.log('cancelar')
  }
}
