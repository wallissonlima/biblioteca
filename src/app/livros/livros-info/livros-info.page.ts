import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Livros } from '../livros.model';
import { map, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-livros-info',
  templateUrl: './livros-info.page.html',
  styleUrls: ['./livros-info.page.scss'],
})
export class LivrosInfoPage implements OnInit {

  private API = "http://localhost:8000/api/livros/"

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
    this.createFormulario(new Livros());
    this.popularDadosForm();
  }

  public isDesable() {
    this.disable = !this.disable;
  }

  // ------------ATUALIZAR LIVRO-----------
  public popularDadosForm() {
    this.route.params.pipe(
      map((params: any) => params.id),
      switchMap(id => this.loadById(id))
    )
      .subscribe(livro => this.editFormulario(livro));
  }

  private loadById(id) {
    return this.http.get(this.API + id).pipe(take(1));
  }

  private editFormulario(livro) {
    this.formulario.patchValue({
      id: livro.id,
      autores: livro.autores,
      titulo: livro.titulo,
      editora: livro.editora,
      ano: livro.ano,
      idioma: livro.idioma,
      totPag: livro.totPag,
      genero: livro.genero,
      categoria: livro.categoria,
      sinopse: livro.sinopse,
    })
  }
  // ----------------------------------------
  //-------------CRIAR NOVO LIVRO------------
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
  // ----------------------------------------
  get titulo(): FormControl { return <FormControl>this.formulario.get("titulo"); }
  get autores(): FormControl { return <FormControl>this.formulario.get("autores"); }
  get editora(): FormControl { return <FormControl>this.formulario.get("editora"); }
  get ano(): FormControl { return <FormControl>this.formulario.get("ano"); }
  get idioma(): FormControl { return <FormControl>this.formulario.get("idioma"); }
  get genero(): FormControl { return <FormControl>this.formulario.get("genero"); }
  get categoria(): FormControl { return <FormControl>this.formulario.get("categoria"); }
  get totPag(): FormControl { return <FormControl>this.formulario.get("totPag"); }
  get sinopse(): FormControl { return <FormControl>this.formulario.get("sinopse"); }
  // ----------------------------------------
  //-------------SALVAR O PUT----------------
  public salvarLivro() {
    this.http.put(this.API + this.formulario.value.id, this.formulario.value).pipe(take(1)).subscribe(
      success => {console.log('sucesso ao atualizar'); this.router.navigateByUrl('/livros')},
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
      message: 'Livro alterado com successo!',
      duration: 750,
      position: 'top',
      cssClass: ''
    });
    toast.present();
  }
  // ----------------------------------------
}