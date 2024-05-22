import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ReactiveForms';
  reactiveForm=FormGroup;

  ngOnInit(){
    this.reactiveForm =new FormGroup({
      name:new FormControl(null),
      password:new FormControl(null)
    })
  }
}
