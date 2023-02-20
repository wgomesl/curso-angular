import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-coponente',
  templateUrl: './segundo-coponente.component.html',
  styleUrls: ['./segundo-coponente.component.css']
})
export class SegundoCoponenteComponent {
  nome = "João";
  dataNascimento = "1995-01-01";
}
