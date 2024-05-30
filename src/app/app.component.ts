import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'lazy-loading-sample';

  ngOnInit(): void {
    this.triggerClientError();
    this.triggerHttpError();
  }

  triggerClientError(): void {
    throw new Error('This is a client-side error');
  }

  triggerHttpError(): void {
    // Simulate an HTTP error
    throw { status: 404, message: 'This is a simulated HTTP error' };
  }

}
