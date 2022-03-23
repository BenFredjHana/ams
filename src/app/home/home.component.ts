import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logo:string="https://play-lh.googleusercontent.com/vr1isZKzTtlok9P81H6cR98iqpPhkuQHJp19Z5kPej3QlhNTnLohXpqcgMqrQpyegA";
  etudiants: string[]=[];
  nom="mon composant";
  mesPosts: any;
  displayed: boolean=true;

  constructor(private service: UsersService, private servicePost: PostsService) {
    console.log("constructeur");
   }

  ngOnInit(): void {
    console.log("constructeur");
    //console.log(this.service.getStudent());
    this.etudiants=this.service.getStudent();

    //Web service observable: cad on lui attend till he gets informations
    this.servicePost.getPosts().subscribe( //si on a une methode exterieur on utilise subscribe
      data => {
        //console.log(data);
        this.mesPosts= data;
        //console.log(this.mesPosts);
      }
    )
  }
  display(){
    //alert("done")
    this.displayed=!this.displayed;
  }
}
