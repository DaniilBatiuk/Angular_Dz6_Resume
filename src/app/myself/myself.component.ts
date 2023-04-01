import { Component } from '@angular/core';

@Component({
  selector: 'app-myself',
  templateUrl: './myself.component.html',
  styleUrls: ['./myself.component.css']
})
export class MyselfComponent {
  FIO: string = "Daniil Batiuk Serchiyovich";
  phone: string = "380689050693";
  city: string = "Kremenchuk";
  email: string = "sportak50@gmail.com";
}
