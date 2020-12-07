import { Musicas } from './../musicas.model';
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { map, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-musicas-info',
  templateUrl: './musicas-info.page.html',
  styleUrls: ['./musicas-info.page.scss'],
})
export class MusicasInfoPage implements OnInit {

  private API = "http://localhost:8000/api/musicas/"

  formulario: FormGroup;
  disable: boolean = true;

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private formularioGroup: FormBuilder,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
    this.createFormulario(new Musicas());
    this.popularDadosForm();
  }

  public isDesable() {
    this.disable = !this.disable;
  }

  // ------------ATUALIZAR ALBUM-----------
  public popularDadosForm() {
    this.route.params.pipe(
      map((params: any) => params.id),
      switchMap(id => this.loadById(id))
    )
      .subscribe(musica => this.editFormulario(musica));
  }

  private loadById(id) {
    return this.http.get(this.API + id).pipe(take(1));
  }

  private editFormulario(musica) {
    this.formulario.patchValue({
      id: musica.id,
      nomeAlbum: musica. nomeAlbum,
      cantor: musica.cantor,
      anoAlbum: musica.anoAlbum,
      qFaixa: musica.qFaixa,
      material: musica.material,
    })
  }
  // ----------------------------------------
  //-------------CRIAR NOVO ALBUM------------
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
  // ----------------------------------------
  get nomeAlbum(): FormControl { return <FormControl>this.formulario.get("nomeAlbum"); }
  get cantor(): FormControl { return <FormControl>this.formulario.get("cantor"); }
  get anoAlbum(): FormControl { return <FormControl>this.formulario.get("anoAlbum"); }
  get qFaixa(): FormControl { return <FormControl>this.formulario.get("qFaixa"); }
  get material(): FormControl { return <FormControl>this.formulario.get("material"); }
  // ----------------------------------------
  //-------------SALVAR O PUT----------------
  public salvarMusica() {
    this.http.put(this.API + this.formulario.value.id, this.formulario.value).pipe(take(1)).subscribe(
      success => {console.log('sucesso ao atualizar'); this.router.navigateByUrl('/musicas')},
      error => {console.log('erro ao atualizar')}
    )
  }
  // ----------------------------------------
  public resetar() {
    this.formulario.reset();
  }
  // ----------------------------------------
  async presentToast() {
    const toast = await this.toastController.create({
      color: 'success',
      message: 'Album alterado com successo!',
      duration: 750,
      position: 'top',
      cssClass: ''
    });
    toast.present();
  }
  // ----------------------------------------
}
