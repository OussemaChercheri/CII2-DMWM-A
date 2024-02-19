import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Admin-Dashboard';
  handleSearch(query: string) {
    // Perform search action in the body with the provided query
    console.log("Search query:", query);
    // You can implement your search logic here
  }
}
