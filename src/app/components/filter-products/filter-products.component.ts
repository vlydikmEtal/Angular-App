import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-products',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-products.component.html',
  styleUrl: './filter-products.component.scss'
})
export class FilterProductsComponent {
  term: string = '';

  @Output() searchTermChanged = new EventEmitter<string>();

  onSearchChange() {
    this.searchTermChanged.emit(this.term);
  }
}
