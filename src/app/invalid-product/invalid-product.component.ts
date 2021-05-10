import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invalid-product',
  templateUrl: './invalid-product.component.html',
  styleUrls: ['./invalid-product.component.css'],
})
export class InvalidProductComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  onBack() {
    this.router.navigate(['/products']);
  }
}
