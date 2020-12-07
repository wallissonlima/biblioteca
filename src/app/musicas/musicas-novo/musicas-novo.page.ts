import { Musicas } from './../musicas.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-musicas-novo',
  templateUrl: './musicas-novo.page.html',
  styleUrls: ['./musicas-novo.page.scss'],
})
export class MusicasNovoPage implements OnInit {

  private API = "http://localhost:8000/api/musicas"

  formulario: FormGroup;

  constructor(
    public toastController: ToastController,
    private http: HttpClient,
    private formularioGroup: FormBuilder,
  ) { }

  ngOnInit() {
    this.createFormulario(new Musicas());
  }

  //-----CRIAR NOVO ALBUM-----
  private createFormulario(musica: Musicas) {
    this.formulario = this.formularioGroup.group({
      id: musica.id,
      nomeAlbum: ["", [Validators.required]],
      cantor: ["", [Validators.required,]],
      anoAlbum: ["", [Validators.required, Validators.maxLength(4), Validators.max(2020), Validators.pattern("[0-9]+$")]],
      qFaixa: ["", [Validators.required, Validators.maxLength(2), Validators.pattern("[0-9]+$")]],
      material: ["", [Validators.required]],
    })
  }

  get nomeAlbum(): FormControl { return <FormControl>this.formulario.get("nomeAlbum"); }
  get cantor(): FormControl { return <FormControl>this.formulario.get("cantor"); }
  get anoAlbum(): FormControl { return <FormControl>this.formulario.get("anoAlbum"); }
  get qFaixa(): FormControl { return <FormControl>this.formulario.get("qFaixa"); }
  get material(): FormControl { return <FormControl>this.formulario.get("material"); }

  public salvarMusica() {
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
      message: 'Album cadastrado com successo!',
      duration: 750,
      position: 'top',
      cssClass: ''
    });
    toast.present();
  }

}

