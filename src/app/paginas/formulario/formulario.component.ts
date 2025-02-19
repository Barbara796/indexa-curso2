import { Component, inject, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [ContainerComponent, 
            SeparadorComponent,
            ReactiveFormsModule,
            CommonModule,
            RouterLink],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

  //forma individual
  //nombre = new FormControl('Barbara');
  contactoForm!: FormGroup;
  fb = inject(FormBuilder)

 

  ngOnInit(){
    this.inicializarForms();
  }

  inicializarForms(){
    this.contactoForm = this.fb.group({
      nombre: ['',Validators.required],
      telefono: ['', Validators.required],
      email: ['',[Validators.required,Validators.email]],
      cumpleano: [''],
      redes: [''],
      observaciones: [''],
    })
  }


  //gestion de forms con formgroup
  /* inicializarForms(){
    this.contactoForm = new FormGroup({
      nombre: new FormControl('',Validators.required),
      telefono: new FormControl('', Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      cumpleano: new FormControl(''),
      redes: new FormControl(''),
      observaciones: new FormControl(''),
    })
  } */

  guardarContacto(){
    console.log(this.contactoForm.value);
  }

  cancelar(){
    console.log('cancelar')
  }
}
