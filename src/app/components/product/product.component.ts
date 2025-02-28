import { Component, Input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.inrerfaces';
import { CommonModule } from '@angular/common';
import { TruncateWordsPipe } from '../../data/pipes/truncateWords/truncate-words.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ CommonModule, TruncateWordsPipe ],
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
