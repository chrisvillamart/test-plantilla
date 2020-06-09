import { Component, OnInit } from '@angular/core';
import { ObjectsService } from '../services/objects.service';
import { Users } from '../models/users.model';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent implements OnInit {

  users: Users[] = []; //Objeto para almacenar la información que se obtendrá del servicio
  constructor(private objectsService: ObjectsService) { }
  
	ngOnInit() {
    this.getUsers();//Llamada al servicio al iniciar el componente
  } 
  getUsers(){
    //Obtención de los datos desde el endpoint
		this.objectsService.get().subscribe((data: any[])=>{  
			this.users = data;  
		})  
  }

}
