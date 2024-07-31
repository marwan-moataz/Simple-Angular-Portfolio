import { Component } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {}
