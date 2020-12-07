import { Clientes } from './../clientes.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-clientes-novo',
  templateUrl: './clientes-novo.page.html',
  styleUrls: ['./clientes-novo.page.scss'],
})
export class ClientesNovoPage implements OnInit {

  private API = "http://localhost:8000/api/clientes"

  formulario: FormGroup;

  constructor(
    public toastController: ToastController,
    private http: HttpClient,
    private formularioGroup: FormBuilder,
  ) { }

  ngOnInit() {
    this.createFormulario(new Clientes());
  }

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
      message: 'Cliente cadastrado com successo!',
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
        if(validacep.test(cep)) {
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
