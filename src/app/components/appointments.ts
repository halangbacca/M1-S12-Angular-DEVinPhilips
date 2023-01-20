export interface Appointments {
  id?: number;
  patientId?: number;
  motive: string;
  date: string;
  time: string;
  description: string;
  medication: string;
  precautions: string;
}
