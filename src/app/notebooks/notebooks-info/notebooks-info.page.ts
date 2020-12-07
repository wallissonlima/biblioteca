import { Notebooks } from './../notebooks.model';
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { map, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-notebooks-info',
  templateUrl: './notebooks-info.page.html',
  styleUrls: ['./notebooks-info.page.scss'],
})
export class NotebooksInfoPage implements OnInit {

  private API = "http://localhost:8000/api/notebooks/"

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
    this.createFormulario(new Notebooks());
    this.popularDadosForm();
  }

  public isDesable() {
    this.disable = !this.disable;
  }

  // ------------ATUALIZAR NOTEBOOK-----------
  public popularDadosForm() {
    this.route.params.pipe(
      map((params: any) => params.id),
      switchMap(id => this.loadById(id))
    )
      .subscribe(notebook => this.editFormulario(notebook));
  }

  private loadById(id) {
    return this.http.get(this.API + id).pipe(take(1));
  }

  private editFormulario(notebook) {
    this.formulario.patchValue({
      id: notebook.id,
      nome: notebook.nome,
      marca: notebook.marca,
      modelo: notebook.modelo,
      processador: notebook.processador,
      hd: notebook.hd,
      ram: notebook.ram,
      so: notebook.so,
    })
  }
  // ----------------------------------------
  //-------------CRIAR NOVO LIVRO------------
  private createFormulario(notebook: Notebooks) {
    this.formulario = this.formularioGroup.group({
      id: notebook.id,
      nome: ["", [Validators.required]],
      marca: ["", [Validators.required,]],
      modelo: ["", [Validators.required,]],
      processador: ["", [Validators.required]],
      hd: ["", [Validators.required]],
      ram: ["", [Validators.required]],
      so: ["", [Validators.required]],
    })
  }
  // ----------------------------------------
  get nome(): FormControl { return <FormControl>this.formulario.get("nome"); }
  get marca(): FormControl { return <FormControl>this.formulario.get("marca"); }
  get modelo(): FormControl { return <FormControl>this.formulario.get("modelo"); }
  get processador(): FormControl { return <FormControl>this.formulario.get("processador"); }
  get hd(): FormControl { return <FormControl>this.formulario.get("hd"); }
  get ram(): FormControl { return <FormControl>this.formulario.get("ram"); }
  get so(): FormControl { return <FormControl>this.formulario.get("so"); }
  // ----------------------------------------
  //-------------SALVAR O PUT----------------
  public salvarNotebook() {
    this.http.put(this.API + this.formulario.value.id, this.formulario.value).pipe(take(1)).subscribe(
      success => {console.log('sucesso ao atualizar'); this.router.navigateByUrl('/notebooks')},
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
      message: 'Notebook alterado com successo!',
      duration: 750,
      position: 'top',
      cssClass: ''
    });
    toast.present();
  }
  // ----------------------------------------
}
