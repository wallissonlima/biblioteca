import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.page.html',
  styleUrls: ['./notebooks.page.scss'],
})
export class NotebooksPage implements OnInit {

  private API = "http://localhost:8000/api/notebooks/"
  private notebooksAPI: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.listarNotebooks();
  }

  private listarNotebooks() {
    this.http.get(this.API).subscribe(
      success => { this.notebooksAPI = success; },
      error => { console.log('erro') }
    )
  }

  public removerNotebooks(notebook) {
    console.log(notebook.id);
    this.http.delete(this.API + notebook.id).subscribe(
      success => { this.notebooksAPI = this.notebooksAPI.filter(value => { return value.id != notebook.id; }); },
      error => { console.log('erro ao deletar') },
    )
  }

  public onEdit(id) {
    this.router.navigate(['notebooks-info', id], { relativeTo: this.route })
  }

  ionViewWillEnter() {
    this.listarNotebooks();
  }
}
