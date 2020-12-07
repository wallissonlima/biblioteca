import { Revistas } from './../revistas.model';
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { map, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-revistas-info',
  templateUrl: './revistas-info.page.html',
  styleUrls: ['./revistas-info.page.scss'],
})
export class RevistasInfoPage implements OnInit {

  private API = "http://localhost:8000/api/revistas/"

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
    this.createFormulario(new Revistas());
    this.popularDadosForm();
  }

  public isDesable() {
    this.disable = !this.disable;
  }

  // ------------ATUALIZAR REVISTA-----------
  public popularDadosForm() {
    this.route.params.pipe(
      map((params: any) => params.id),
      switchMap(id => this.loadById(id))
    )
      .subscribe(revista => this.editFormulario(revista));
  }

  private loadById(id) {
    return this.http.get(this.API + id).pipe(take(1));
  }

  private editFormulario(revista) {
    this.formulario.patchValue({
      id: revista.id,
      revista: revista.revista,
      titulo: revista.titulo,
      editora: revista.editora,
      edicao: revista.edicao,
      totPag: revista.totPag,
    })
  }
  // ----------------------------------------
  //------------CRIAR NOVA REVISTA-----------
  private createFormulario(revista: Revistas) {
    this.formulario = this.formularioGroup.group({
      id: revista.id,
      revista: ["", [Validators.required]],
      titulo: ["", [Validators.required,]],
      editora: ["", [Validators.required]],
      edicao: ["", [Validators.required]],
      totPag: ["", [Validators.required, Validators.maxLength(3), Validators.max(150), Validators.pattern("[0-9]+$")]],
    })
  }
  // ----------------------------------------
  get titulo(): FormControl { return <FormControl>this.formulario.get("titulo"); }
  get revista(): FormControl { return <FormControl>this.formulario.get("revista"); }
  get editora(): FormControl { return <FormControl>this.formulario.get("editora"); }
  get totPag(): FormControl { return <FormControl>this.formulario.get("totPag"); }
  get edicao(): FormControl { return <FormControl>this.formulario.get("edicao"); }
  // ----------------------------------------
  //-------------SALVAR O PUT----------------
  public salvarRevista() {
    this.http.put(this.API + this.formulario.value.id, this.formulario.value).pipe(take(1)).subscribe(
      success => {console.log('sucesso ao atualizar'); this.router.navigateByUrl('/revistas')},
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
      message: 'Revista alterada com successo!',
      duration: 750,
      position: 'top',
      cssClass: ''
    });
    toast.present();
  }
  // ----------------------------------------
}