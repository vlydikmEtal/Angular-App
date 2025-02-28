import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { Profile } from './data/interfaces/profile.inrerfaces';
import { ProfileService } from './data/services/profile.service';
import { FilterProductsPipe } from './data/pipes/filter-products.pipe';
import { FilterProductsComponent } from './components/filter-products/filter-products.component';
import { SlideBarComponent } from './components/slide-bar/slide-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, FilterProductsPipe, FilterProductsComponent, SlideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  products: Profile[] = [];
  search: string = '';

  ProfileService = inject(ProfileService);

  constructor() {
    this.ProfileService.getTestProduct().subscribe((val) => {
      this.products = val;
    });
  }

  updateSearchTerm(term: string) {
    this.search = term;
  }
}
