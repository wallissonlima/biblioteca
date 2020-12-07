import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Clientes } from '../clientes.model';
import { map, switchMap, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-clientes-info',
  templateUrl: './clientes-info.page.html',
  styleUrls: ['./clientes-info.page.scss'],
})
export class ClientesInfoPage implements OnInit {

  private API = "http://localhost:8000/api/clientes/"

  formulario: FormGroup;
  disable: boolean = true;

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    public toastController: ToastController,
    private formularioGroup: FormBuilder,
  ) { }

  ngOnInit() {
    this.createFormulario(new Clientes());
    this.popularDadosForm();
  }

  public isDesable() {
    this.disable = !this.disable;
  }

  // ------------ATUALIZAR CLIENTE-----------
  public popularDadosForm() {
    this.route.params.pipe(
      map((params: any) => params.id),
      switchMap(id => this.loadById(id))
    )
      .subscribe(cliente => this.editFormulario(cliente));
  }

  private loadById(id) {
    return this.http.get(this.API + id).pipe(take(1));
  }

  private editFormulario(cliente) {
    this.formulario.patchValue({
      id: cliente.id,
      nome: cliente.nome,
      email: cliente.email,
      cpf: cliente.cpf,
      celular: cliente.celular,
      cep: cliente.cep,
      logradouro: cliente.logradouro,
      bairro: cliente.bairro,
      cidade: cliente.cidade,
      uf: cliente.uf,
    });
  }
  // ----------------------------------------

  // ----------CRIAR NOVO CLIENTE------------
  private createFormulario(cliente: Clientes) {
    this.formulario = this.formularioGroup.group({
      id: cliente.id,
      nome: [cliente.nome, Validators.required],
      email: [cliente.email, [Validators.required, Validators.email]],
      cpf: [cliente.cpf, [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern("[0-9]+$")]],
      celular: [cliente.celular, [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern("[0-9]+$")]],
      cep: [cliente.cep, [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern("[0-9]+$")]],
      logradouro: [cliente.logradouro, Validators.required],
      bairro: [cliente.bairro, Validators.required],
      cidade: [cliente.cidade, Validators.required],
      uf: [cliente.uf, Validators.required],
    })
  }
  // ----------------------------------------

  get nome(): FormControl { return <FormControl>this.formulario.get("nome"); }
  get email(): FormControl { return <FormControl>this.formulario.get("email"); }
  get cpf(): FormControl { return <FormControl>this.formulario.get("cpf"); }
  get celular(): FormControl { return <FormControl>this.formulario.get("celular"); }
  get cep(): FormControl { return <FormControl>this.formulario.get("cep"); }
  get logradouro(): FormControl { return <FormControl>this.formulario.get("logradouro"); }
  get bairro(): FormControl { return <FormControl>this.formulario.get("bairro"); }
  get cidade(): FormControl { return <FormControl>this.formulario.get("cidade"); }
  get uf(): FormControl { return <FormControl>this.formulario.get("uf"); }


  public salvarCliente() {
    this.http.put(this.API + this.formulario.value.id, this.formulario.value).pipe(take(1)).subscribe(
      success => {console.log('sucesso ao atualizar'); this.router.navigateByUrl('/clientes')},
      error => {console.log('erro ao atualizar')}
    )
  }

  public resetar() {
    this.formulario.reset();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      color: 'success',
      message: 'Cliente alterado com successo!',
      duration: 750,
      position: 'top',
      cssClass: ''
    });
    toast.present();
  }

  // -------------CONSULTAR CEP--------------
  public consultaCEP() {
    console.log('OI');
    let cep = this.formulario.get('cep').value;
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');
    //Verifica se campo ceppossui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .subscribe(dados => this.popularDadosFormCep(dados));
      }
    }
  }

  private popularDadosFormCep(dados) {
    this.formulario.patchValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf
    })
  }
  // ------------------------------------------
}
