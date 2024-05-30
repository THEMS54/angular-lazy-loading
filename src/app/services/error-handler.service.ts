import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  logError(message: string): void {
    // Log the error to the console or send it to a server
    console.error('Logged Error:', message);
  }

  showErrorNotification(message: string): void {
    // Show a user-friendly error message
    alert(message);
  }

}
