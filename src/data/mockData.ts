import { Doctor, Appointment, User } from '../types';

export const mockDoctors: Doctor[] = [
  {
    id: '1',
    email: 'dr.smith@docspot.com',
    name: 'Dr. Sarah Smith',
    role: 'doctor',
    phone: '+1 (555) 123-4567',
    avatar: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Cardiology',
    experience: 15,
    location: 'New York, NY',
    rating: 4.9,
    reviewCount: 127,
    bio: 'Dr. Smith is a board-certified cardiologist with over 15 years of experience in treating heart conditions.',
    education: 'MD from Harvard Medical School',
    languages: ['English', 'Spanish'],
    consultationFee: 200,
    isApproved: true,
    createdAt: new Date('2023-01-15'),
    availability: [
      { id: '1', date: '2024-01-15', startTime: '09:00', endTime: '10:00', isAvailable: true },
      { id: '2', date: '2024-01-15', startTime: '10:00', endTime: '11:00', isAvailable: true },
      { id: '3', date: '2024-01-15', startTime: '14:00', endTime: '15:00', isAvailable: false },
    ]
  },
  {
    id: '2',
    email: 'dr.johnson@docspot.com',
    name: 'Dr. Michael Johnson',
    role: 'doctor',
    phone: '+1 (555) 234-5678',
    avatar: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Dermatology',
    experience: 12,
    location: 'Los Angeles, CA',
    rating: 4.8,
    reviewCount: 89,
    bio: 'Specializing in skin health and cosmetic dermatology with a focus on patient care.',
    education: 'MD from UCLA Medical School',
    languages: ['English'],
    consultationFee: 180,
    isApproved: true,
    createdAt: new Date('2023-02-20'),
    availability: [
      { id: '4', date: '2024-01-16', startTime: '11:00', endTime: '12:00', isAvailable: true },
      { id: '5', date: '2024-01-16', startTime: '15:00', endTime: '16:00', isAvailable: true },
    ]
  },
  {
    id: '3',
    email: 'dr.williams@docspot.com',
    name: 'Dr. Emily Williams',
    role: 'doctor',
    phone: '+1 (555) 345-6789',
    avatar: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Pediatrics',
    experience: 8,
    location: 'Chicago, IL',
    rating: 4.9,
    reviewCount: 156,
    bio: 'Dedicated pediatrician committed to providing comprehensive care for children of all ages.',
    education: 'MD from Johns Hopkins University',
    languages: ['English', 'French'],
    consultationFee: 150,
    isApproved: true,
    createdAt: new Date('2023-03-10'),
    availability: [
      { id: '6', date: '2024-01-17', startTime: '08:00', endTime: '09:00', isAvailable: true },
      { id: '7', date: '2024-01-17', startTime: '13:00', endTime: '14:00', isAvailable: true },
    ]
  }
];

export const mockUser: User = {
  id: 'user1',
  email: 'john.doe@email.com',
  name: 'John Doe',
  role: 'customer',
  phone: '+1 (555) 987-6543',
  avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  createdAt: new Date('2023-12-01')
};

export const mockAppointments: Appointment[] = [
  {
    id: 'apt1',
    patientId: 'user1',
    doctorId: '1',
    date: '2024-01-15',
    time: '09:00',
    status: 'confirmed',
    reason: 'Routine check-up',
    notes: 'Annual physical examination',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: 'apt2',
    patientId: 'user1',
    doctorId: '2',
    date: '2024-01-20',
    time: '14:00',
    status: 'pending',
    reason: 'Skin consultation',
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-12')
  }
];