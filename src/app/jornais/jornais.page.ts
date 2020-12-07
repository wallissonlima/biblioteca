import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jornais',
  templateUrl: './jornais.page.html',
  styleUrls: ['./jornais.page.scss'],
})
export class JornaisPage implements OnInit {

  private API = "http://localhost:8000/api/jornais/"
  private jornaisAPI: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.listarJornais();
  }

  //-------LISTAR JORNAIS DO BANCO-------
  private listarJornais() {
    this.http.get(this.API).subscribe(
      success => { 
        this.jornaisAPI = success;
        console.log('sucesso ao listar os jornais');
      },
      error => { 
        console.log('erro ao listar os jornais') 
      }
    )
  }
  //--------------------------------------
  //----------DELETAR JORNAIS------------
  public removerJornais(jornal) {
    this.http.delete(this.API + jornal.id).subscribe(
      success => { 
        this.jornaisAPI = this.jornaisAPI.filter(value => { return value.id != jornal.id; });
        console.log('sucesso ao deletar jornal'); 
      },
      error => { 
        console.log('erro ao deletar jornal');
      },
    )
  }
  //--------------------------------------
  //------ENVIAR JORNAL PARA EDITAR------
  public onEdit(id) {
    this.router.navigate(['jornais-info', id], {relativeTo: this.route});
    console.log('enviando jornal', id, 'para alterar');
  }
  //--------------------------------------
  //------CARREGAR LISTA ATUALIZADA-------
  ionViewWillEnter() {
    this.listarJornais();
    console.log('lista de joanrais atualizada')
  }
  //--------------------------------------
}