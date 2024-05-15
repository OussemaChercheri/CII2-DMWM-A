import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {
  constructor(private router: Router) {}

  createPost() {
    // Check if user is logged in (you might have a service or authentication mechanism)
    const isLoggedIn = this.isLoggedIn(); // Implement your own logic here

    // If user is not logged in, redirect to login page
    if (!isLoggedIn) {
      this.router.navigate(['/login']); // Adjust the route according to your application
    } else {
      // If user is logged in, navigate to create post page
      this.router.navigate(['/crud']); // Adjust the route according to your application
    }
  }

  isLoggedIn(): boolean {
    // Implement your own logic to check if user is logged in
    // Return true if logged in, false otherwise
    return true; // For demonstration, always return true
  }
}
