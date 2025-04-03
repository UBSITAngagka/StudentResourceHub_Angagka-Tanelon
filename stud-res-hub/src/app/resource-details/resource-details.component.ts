import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resource-details',
  imports: [FormsModule,CommonModule],
  templateUrl: './resource-details.component.html',
  styleUrl: './resource-details.component.css'
})
export class ResourceDetailsComponent {
  isDisabled = true;
}