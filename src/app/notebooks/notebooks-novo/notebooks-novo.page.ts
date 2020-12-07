import { Notebooks } from './../notebooks.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-notebooks-novo',
  templateUrl: './notebooks-novo.page.html',
  styleUrls: ['./notebooks-novo.page.scss'],
})
export class NotebooksNovoPage implements OnInit {

  private API = "http://localhost:8000/api/notebooks"

  formulario: FormGroup;

  constructor(
    public toastController: ToastController,
    private http: HttpClient,
    private formularioGroup: FormBuilder,
  ) { }

  ngOnInit() {
    this.createFormulario(new Notebooks());
  }

  //-----CRIAR NOVO LIVRO-----
  private createFormulario(notebook: Notebooks) {
    this.formulario = this.formularioGroup.group({
      id: notebook.id,
      nome: ["", [Validators.required]],
      marca: ["", [Validators.required,]],
      modelo: ["", [Validators.required]],
      processador: ["", [Validators.required]],
      hd: ["", [Validators.required]],
      ram: ["", [Validators.required]],
      so: ["", [Validators.required]],
    })
  }

  get nome(): FormControl { return <FormControl>this.formulario.get("nome"); }
  get marca(): FormControl { return <FormControl>this.formulario.get("marca"); }
  get modelo(): FormControl { return <FormControl>this.formulario.get("modelo"); }
  get processador(): FormControl { return <FormControl>this.formulario.get("processador"); }
  get hd(): FormControl { return <FormControl>this.formulario.get("hd"); }
  get ram(): FormControl { return <FormControl>this.formulario.get("ram"); }
  get so(): FormControl { return <FormControl>this.formulario.get("so"); }

  public salvarNotebook() {
      this.http.post(this.API, this.formulario.value).subscribe(
        success => { console.log('sucesso ao cadastrar'); this.resetar(); },
        error => { console.log('erro ao cadastrar'); }
      )
  }


  public resetar() {
    this.formulario.reset();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      color: 'success',
      message: 'Notebook cadastrado com successo!',
      duration: 750,
      position: 'top',
      cssClass: ''
    });
    toast.present();
  }

}
