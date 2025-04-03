import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resource-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './resource-list.component.html',
  styleUrl: './resource-list.component.css'
})
export class ResourceListComponent {
  resourceTitle= 'Clean Code: A Handbook of Agile Software Craftsmanship';
  desc= 'Focuses on writing clean, maintainable, and efficient code. It is a must-read for developers aiming to improve their coding practices.';
  category= 'Programming';
  isDisabled = true;
}