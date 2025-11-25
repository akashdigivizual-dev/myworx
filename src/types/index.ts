// Type definitions for the application

export interface ContactFormData {
  firstName: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  message: string;
}

export enum FormStatus {
  IDLE = 'idle',
  SUBMITTING = 'submitting',
  SUCCESS = 'success',
  ERROR = 'error'
}
