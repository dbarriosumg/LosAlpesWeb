import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
interface Tipo {
  value: string,
  name: string
  } 
@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent {

  isSearch: boolean = true;
  isSearchCliente: boolean = true;
  tipoMueble: Tipo[]= [
    {value: 'I', name : 'Interior'},
    {value: 'E', name : 'Exterior'},
  ]
  constructor(
    private formBuilder: FormBuilder,
  ) { 
    
  }

  ngOnInit(): void {
    this.createProductForm()
    this.createClienteForm()
  }

  productoForm = new FormGroup({
    nombreP: new FormControl(''),
    referencia: new FormControl(''),
    descripcion: new FormControl(''),
    material: new FormControl(''),
    color: new FormControl(''),
    dataSearch: new FormControl(''),
    altura: new FormControl(''),
    ancho: new FormControl(''),
    profundidad: new FormControl(''),
    peso: new FormControl(''),
    tipoMueble: new FormControl(''),
  });  

  createProductForm() {
    this.productoForm = this.formBuilder.group({
      nombreP: ['',Validators.required],
      referencia: ['',Validators.required],
      descripcion: [''],
      material: [''],
      color: [''],
      dataSearch: [''],
      altura: ['',Validators.required],
      ancho: ['',Validators.required],
      profundidad: ['',Validators.required],
      peso: ['',Validators.required],
      tipoMueble: ['',Validators.required],
    });
  }

  clienteForm = new FormGroup({
    nombre: new FormControl(''),
    telefono: new FormControl(''),
    celular: new FormControl(''),
    tipoDoc: new FormControl(''),
    numeroDoc: new FormControl(''),
    direccion: new FormControl(''),
    ciudad: new FormControl(''),
    pais: new FormControl(''),
    departamento: new FormControl(''),
    profesion: new FormControl(''),
    email: new FormControl(''),
  });

  createClienteForm() {
    this.clienteForm = this.formBuilder.group({
      nombre: ['',Validators.required],
      telefono: ['',Validators.required],
      celular: [''],
      tipoDoc: ['',Validators.required],
      numeroDoc: ['',Validators.required],
      direccion: ['',Validators.required],
      ciudad: ['',Validators.required],
      pais: ['',Validators.required],
      departamento: ['',Validators.required],
      profesion: [''],
      email: ['',Validators.required],
    });
  }

 


  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      // Aquí puedes realizar las acciones necesarias con el archivo seleccionado
      console.log(file);
    }
  }
}
