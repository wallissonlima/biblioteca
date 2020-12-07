import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Livros } from '../livros.model';

@Component({
  selector: 'app-livros-novo',
  templateUrl: './livros-novo.page.html',
  styleUrls: ['./livros-novo.page.scss'],
})
export class LivrosNovoPage implements OnInit {

  private API = "http://localhost:8000/api/livros"

  formulario: FormGroup;

  constructor(
    public toastController: ToastController,
    private http: HttpClient,
    private formularioGroup: FormBuilder,
  ) { }

  ngOnInit() {
    this.createFormulario(new Livros());
  }

  //-----CRIAR NOVO LIVRO-----
  private createFormulario(livro: Livros) {
    this.formulario = this.formularioGroup.group({
      id: livro.id,
      autores: ["", [Validators.required]],
      titulo: ["", [Validators.required,]],
      editora: ["", [Validators.required]],
      ano: ["", [Validators.required, Validators.maxLength(4), Validators.max(2020), Validators.pattern("[0-9]+$")]],
      idioma: ["", [Validators.required]],
      totPag: ["", [Validators.required, Validators.maxLength(4), Validators.max(3000), Validators.pattern("[0-9]+$")]],
      genero: ["", [Validators.required]],
      categoria: ["", [Validators.required]],
      sinopse: ["", [Validators.required]],
    })
  }

  get titulo(): FormControl { return <FormControl>this.formulario.get("titulo"); }
  get autores(): FormControl { return <FormControl>this.formulario.get("autores"); }
  get editora(): FormControl { return <FormControl>this.formulario.get("editora"); }
  get ano(): FormControl { return <FormControl>this.formulario.get("ano"); }
  get idioma(): FormControl { return <FormControl>this.formulario.get("idioma"); }
  get genero(): FormControl { return <FormControl>this.formulario.get("genero"); }
  get categoria(): FormControl { return <FormControl>this.formulario.get("categoria"); }
  get totPag(): FormControl { return <FormControl>this.formulario.get("totPag"); }
  get sinopse(): FormControl { return <FormControl>this.formulario.get("sinopse"); }

  public salvarLivro() {
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
      message: 'Livro cadastrado com successo!',
      duration: 750,
      position: 'top',
      cssClass: ''
    });
    toast.present();
  }

}
