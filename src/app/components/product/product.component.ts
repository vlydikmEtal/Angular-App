import { Component, Input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.inrerfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() product!: Profile;

  showDetails: boolean = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
