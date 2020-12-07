import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.page.html',
  styleUrls: ['./musicas.page.scss'],
})
export class MusicasPage implements OnInit {

  private API = "http://localhost:8000/api/musicas/"
  private musicasAPI: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.listarMusicas();
  }

  private listarMusicas() {
    this.http.get(this.API).subscribe(
      success => { this.musicasAPI = success; },
      error => { console.log('erro') }
    )
  }

  public removerMusicas(musica) {
    console.log(musica.id);
    this.http.delete(this.API + musica.id).subscribe(
      success => { this.musicasAPI = this.musicasAPI.filter(value => { return value.id != musica.id; }); },
      error => { console.log('erro ao deletar') },
    )
  }

  public onEdit(id) {
    this.router.navigate(['musicas-info', id], {relativeTo: this.route})
  }

  ionViewWillEnter() {
    this.listarMusicas();
  }
}
