import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  students: string[]=["Hana", "Ibtissem", "Marwa", "Mohamed"];
  constructor() { }

  getStudent() //si on veut préciser type de retour on met:  getStudent(): string{}
  {
    return this.students;
  }
}
