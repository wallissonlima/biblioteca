import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  private API = "http://localhost:8000/api/clientes/"
  private clientesAPI: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.listarClientes();
  }

  private listarClientes() {
    this.http.get(this.API).subscribe(
      success => { this.clientesAPI = success; },
      error => { console.log('erro') }
    )
  }

  public removerClientes(cliente) {
    console.log(cliente.id);
    this.http.delete(this.API + cliente.id).subscribe(
      success => { this.clientesAPI = this.clientesAPI.filter(value => { return value.id != cliente.id; }); },
      error => { console.log('erro ao deletar') },
    )
  }

  public onEdit(id) {
    this.router.navigate(['clientes-info', id], { relativeTo: this.route })
  }

  ionViewWillEnter() {
    this.listarClientes();
  }
}
