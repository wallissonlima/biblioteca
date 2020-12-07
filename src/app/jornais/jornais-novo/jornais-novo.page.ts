import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Jornais } from '../jornais.model';
@Component({
  selector: 'app-jornais-novo',
  templateUrl: './jornais-novo.page.html',
  styleUrls: ['./jornais-novo.page.scss'],
})
export class JornaisNovoPage implements OnInit {

  private API = "http://localhost:8000/api/jornais"

  formulario: FormGroup;

  constructor(
    public toastController: ToastController,
    private http: HttpClient,
    private formularioGroup: FormBuilder,
  ) { }

  ngOnInit() {
    this.createFormulario(new Jornais());
  }

  //-----CRIAR NOVO Jornal-----
  private createFormulario(jornal: Jornais) {
    this.formulario = this.formularioGroup.group({
      id: jornal.id,
      editora: ["", [Validators.required]],
      data: ["", [Validators.required,]],
      edicao: ["", [Validators.required]],
      cidade: ["", [Validators.required]],
      site: ["", [Validators.required]],
    
    })
  }

  get editora(): FormControl { return <FormControl>this.formulario.get("editora"); }
  get data(): FormControl { return <FormControl>this.formulario.get("data"); }
  get edicao(): FormControl { return <FormControl>this.formulario.get("edicao"); }
  get cidade(): FormControl { return <FormControl>this.formulario.get("cidade"); }
  get site(): FormControl { return <FormControl>this.formulario.get("site"); }
  
  public salvarJornal() {
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
      message: 'Jornal cadastrado com successo!',
      duration: 750,
      position: 'top',
      cssClass: ''
    });
    toast.present();
  }

}
