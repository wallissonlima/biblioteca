import { Revistas } from './../revistas.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-revistas-novo',
  templateUrl: './revistas-novo.page.html',
  styleUrls: ['./revistas-novo.page.scss'],
})
export class RevistasNovoPage implements OnInit {

  private API = "http://localhost:8000/api/revistas"
  private formulario: FormGroup;

  constructor(
    public toastController: ToastController,
    private http: HttpClient,
    private formularioGroup: FormBuilder,
  ) { }

  ngOnInit() {
    this.createFormulario(new Revistas());
  }

  //----------CRIAR NOVA REVISTA----------
  private createFormulario(revista: Revistas) {
    this.formulario = this.formularioGroup.group({
      id: "",
      revista: ["", [Validators.required]],
      titulo: ["", [Validators.required,]],
      edicao: ["", [Validators.required]],
      totPag: ["", [Validators.required, Validators.maxLength(3), Validators.max(150), Validators.pattern("[0-9]+$")]],
      editora: ["", [Validators.required]],
    })
  }
  //--------------------------------------
  //----VALIDAR CAMPOS FORMULARIO---------
  get revista(): FormControl { return <FormControl>this.formulario.get("revista"); }
  get titulo(): FormControl { return <FormControl>this.formulario.get("titulo"); }
  get edicao(): FormControl { return <FormControl>this.formulario.get("edicao"); }
  get totPag(): FormControl { return <FormControl>this.formulario.get("totPag"); }
  get editora(): FormControl { return <FormControl>this.formulario.get("editora"); }
  //--------------------------------------
  //----------SALVAR REVISTA--------------
  public salvarRevista() {
      this.http.post(this.API, this.formulario.value).subscribe(
        success => { 
          console.log('sucesso ao cadastrar revista'); 
          this.resetar(); 
        },
        error => { 
          console.log('erro ao cadastrar'); 
        }
      )
  }
  //--------------------------------------
  //----------RESETAR CAMPOS--------------
  public resetar() {
    this.formulario.reset();
  }
  //--------------------------------------
  //-----MODAL DE SUCESSO DE CADASTRO-----
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Revista cadastrada com successo!',
      duration: 750,
      position: 'top',
      cssClass: 'toast-class',
    });
    toast.present();
  }
  //--------------------------------------
}
