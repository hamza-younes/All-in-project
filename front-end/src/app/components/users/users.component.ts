import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

  users: User[] = [];

  private userService = inject(UserService);

  ngOnInit(): void {
      this.loadUsers();
  }

  loadUsers(){
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    })
  }

  deleteUser(id: number){
    if(confirm('are you sure?')){
      this.userService.deleteUser(id).subscribe(() => {
        this.loadUsers();
      })
    }
  }
}
