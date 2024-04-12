import { Component } from '@angular/core';
import { Cliente } from './../../interfaces/Cliente';
import { ClienteService } from './../../service/cliente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  clientes:Cliente[]=[];
  constructor(private ClienteService: ClienteService){


  }

  listar():void{
    this.clientes = this.ClienteService.listar();
  }

  ngOInit():void{
    this.listar();
  }

}
