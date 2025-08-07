import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { UserService } from '../../services/user.service';
import {  ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-from',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './user-from.component.html',
  styleUrl: './user-from.component.css'
})
export class UserFromComponent {

  private fb = inject(FormBuilder);
  private userService = inject(UserService);
  private router = inject(Router);
  private route = inject(ActivatedRoute)

  isEditMode = false;
  userId?: number;

  constructor(){
    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.isEditMode = true;
      this.userId = +id;
      this.userService.getUser(this.userId).subscribe((user)=> {
        this.form.patchValue({
          name: user.name,
          ranks: String(user.ranks),
          totalgames: String(user.totalGames),
          followers: String(user.followers),
          
        });
      });
      
    }
  }

  form = this.fb.group({
    name: ['', Validators.required],
    ranks: [ '', Validators.required],
    totalgames: ['', Validators.required],
    followers: ['', Validators.required],

  });

  onSubmit(){
    if(this.form.invalid) return;

    const formValue = this.form.value;

    const load = {
      name : formValue.name!,
      ranks: Number(formValue.ranks),
      totalGames: Number(formValue.totalgames),
      followers: Number(formValue.followers),

    };

    if(this.isEditMode && this.userId){
      this.userService.updateUser(this.userId, {id : this.userId, ...load}).subscribe(() => {
        this.router.navigate(['/']);
      })
    }else (this.userService.addUser(load).subscribe(()=> {
      this.router.navigate(['/']);
    }))

    
  }


}
