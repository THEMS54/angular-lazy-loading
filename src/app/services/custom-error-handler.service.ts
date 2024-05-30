import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandlerService implements ErrorHandler {

  constructor(private errorHandlerService: ErrorHandlerService) {} //We can create private errorHandlerService: ErrorHandlerService and pass it in constructor

  handleError(error: any): void {
    let errorMessage = '';

    if (error instanceof HttpErrorResponse) {
      // Server or connection error happened
      if (!navigator.onLine) {
        // Handle offline error
        errorMessage = 'No Internet Connection';
      } else {
        // Handle Http Error (error.status === 403, 404...)
        errorMessage = `HTTP Error: ${error.message}`;
      }
    } else {
      // Handle Client Error (Angular Error, ReferenceError...)
      errorMessage = `Client Error: ${error.message}`;
    }

    // Always log errors
    console.error(error);

    // Optionally, log the error to an external server
    this.errorHandlerService.logError(errorMessage);

    // Optionally, show a user-friendly message
    alert(errorMessage);
  }
}
