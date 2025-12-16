// Type definitions for the application

export interface ContactFormData {
  firstName: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  message: string;
  seatsRequired: string;
}

export const FormStatus = {
  IDLE: 'idle',
  SUBMITTING: 'submitting',
  SUCCESS: 'success',
  ERROR: 'error'
} as const;

export type FormStatus = typeof FormStatus[keyof typeof FormStatus];
