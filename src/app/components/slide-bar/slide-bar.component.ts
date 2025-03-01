import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slide-bar',
  standalone: true,
  imports: [],
  templateUrl: './slide-bar.component.html',
  styleUrl: './slide-bar.component.scss'
})
export class SlideBarComponent {
  @Output() categorySelected = new EventEmitter<string | null>();

  selectCategory(category: string | null) {
    this.categorySelected.emit(category);
  }
}
