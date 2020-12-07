import { Jornais } from './../jornais.model';
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { map, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-jornais-info',
  templateUrl: './jornais-info.page.html',
  styleUrls: ['./jornais-info.page.scss'],
})
export class JornaisInfoPage implements OnInit {

  private API = "http://localhost:8000/api/jornais/"

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
    this.createFormulario(new Jornais());
    this.popularDadosForm();
  }

  public isDesable() {
    this.disable = !this.disable;
  }

  // ------------ATUALIZAR JORNAL-----------
  public popularDadosForm() {
    this.route.params.pipe(
      map((params: any) => params.id),
      switchMap(id => this.loadById(id))
    )
      .subscribe(jornal => this.editFormulario(jornal));
  }

  private loadById(id) {
    return this.http.get(this.API + id).pipe(take(1));
  }

  private editFormulario(jornal) {
    this.formulario.patchValue({
      id: jornal.id,
      editora: jornal.editora,
      data: jornal.data,
      edicao: jornal.edicao,
      cidade: jornal.cidade,
      site: jornal.site,
    })
  }
  // ----------------------------------------
  //-------------CRIAR NOVO JORNAL------------
  private createFormulario(jornal: Jornais) {
    this.formulario = this.formularioGroup.group({
      id: jornal.id,
      editora: ["", [Validators.required]],
      data: ["", [Validators.required]],
      edicao: ["", [Validators.required]],
      site: ["", [Validators.required]],
      cidade: ["", [Validators.required]],
    })
  }
  // ----------------------------------------
  get editora(): FormControl { return <FormControl>this.formulario.get("editora"); }
  get data(): FormControl { return <FormControl>this.formulario.get("data"); }
  get edicao(): FormControl { return <FormControl>this.formulario.get("edicao"); }
  get site(): FormControl { return <FormControl>this.formulario.get("site"); }
  get cidade(): FormControl { return <FormControl>this.formulario.get("cidade"); }
  // ----------------------------------------
  //-------------SALVAR O PUT----------------
  public salvarJornal() {
    this.http.put(this.API + this.formulario.value.id, this.formulario.value).pipe(take(1)).subscribe(
      success => {console.log('sucesso ao atualizar'); this.router.navigateByUrl('/jornais')},
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
      message: 'Jornal alterado com successo!',
      duration: 750,
      position: 'top',
      cssClass: ''
    });
    toast.present();
  }
  // ----------------------------------------
}
