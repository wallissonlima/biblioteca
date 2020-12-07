import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.page.html',
  styleUrls: ['./livros.page.scss'],
})
export class LivrosPage implements OnInit {

  private API = "http://localhost:8000/api/livros/"
  private livrosAPI: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.listarLivros();
  }

  private listarLivros() {
    this.http.get(this.API).subscribe(
      success => { this.livrosAPI = success; },
      error => { console.log('erro') }
    )
  }

  public removerLivros(livro) {
    console.log(livro.id);
    this.http.delete(this.API + livro.id).subscribe(
      success => { this.livrosAPI = this.livrosAPI.filter(value => { return value.id != livro.id; }); },
      error => { console.log('erro ao deletar') },
    )
  }

  public onEdit(id) {
    this.router.navigate(['livros-info', id], {relativeTo: this.route})
  }

  ionViewWillEnter() {
    this.listarLivros();
  }
}
