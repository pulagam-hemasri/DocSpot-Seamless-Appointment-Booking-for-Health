export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'doctor' | 'admin';
  phone?: string;
  avatar?: string;
  createdAt: Date;
}

export interface Doctor extends User {
  role: 'doctor';
  specialty: string;
  experience: number;
  location: string;
  rating: number;
  reviewCount: number;
  bio: string;
  education: string;
  languages: string[];
  consultationFee: number;
  availability: TimeSlot[];
  isApproved: boolean;
}

export interface TimeSlot {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  reason: string;
  notes?: string;
  documents?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AppointmentRequest {
  doctorId: string;
  date: string;
  time: string;
  reason: string;
  documents?: File[];
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}