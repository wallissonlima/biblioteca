import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-revistas',
  templateUrl: './revistas.page.html',
  styleUrls: ['./revistas.page.scss'],
})
export class RevistasPage implements OnInit {

  private API = "http://localhost:8000/api/revistas/"
  private revistasAPI: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.listarRevistas();
  }

  //-------LISTAR REVISTAS DO BANCO-------
  private listarRevistas() {
    this.http.get(this.API).subscribe(
      success => { 
        this.revistasAPI = success;
        console.log('sucesso ao listar as revistas');
      },
      error => { 
        console.log('erro ao listar as revistas') 
      }
    )
  }
  //--------------------------------------
  //----------DELETAR REVISTAS------------
  public removerRevistas(revista) {
    this.http.delete(this.API + revista.id).subscribe(
      success => { 
        this.revistasAPI = this.revistasAPI.filter(value => { return value.id != revista.id; });
        console.log('sucesso ao deletar revista'); 
      },
      error => { 
        console.log('erro ao deletar revista');
      },
    )
  }
  //--------------------------------------
  //------ENVIAR REVISTA PARA EDITAR------
  public onEdit(id) {
    this.router.navigate(['revistas-info', id], {relativeTo: this.route});
    console.log('enviando resvista', id, 'para alterar');
  }
  //--------------------------------------
  //------CARREGAR LISTA ATUALIZADA-------
  ionViewWillEnter() {
    this.listarRevistas();
    console.log('lista de revistas atualizada')
  }
  //--------------------------------------
}
