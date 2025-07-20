import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockDoctors } from '../data/mockData';
import { Doctor } from '../types';
import { useAuth } from '../context/AuthContext';
import { DoctorCard } from '../components/doctors/DoctorCard';
import { DoctorFilters } from '../components/doctors/DoctorFilters';
import { BookingModal } from '../components/appointments/BookingModal';
import toast from 'react-hot-toast';

export function Doctors() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const filteredDoctors = useMemo(() => {
    return mockDoctors.filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty = selectedSpecialty === 'All Specialties' || 
                              doctor.specialty === selectedSpecialty;
      const matchesLocation = selectedLocation === 'All Locations' || 
                             doctor.location === selectedLocation;
      
      return matchesSearch && matchesSpecialty && matchesLocation && doctor.isApproved;
    });
  }, [searchTerm, selectedSpecialty, selectedLocation]);

  const handleBookAppointment = (doctor: Doctor) => {
    if (!isAuthenticated) {
      toast.error('Please sign in to book an appointment');
      navigate('/login');
      return;
    }
    
    setSelectedDoctor(doctor);
    setIsBookingModalOpen(true);
  };

  const handleBookingSubmit = async (appointmentData: any) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('Appointment request submitted successfully!');
    setIsBookingModalOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Find Your Doctor
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Browse through our network of verified healthcare providers and book your appointment today.
        </p>
      </div>

      <DoctorFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedSpecialty={selectedSpecialty}
        onSpecialtyChange={setSelectedSpecialty}
        selectedLocation={selectedLocation}
        onLocationChange={setSelectedLocation}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            onBookAppointment={handleBookAppointment}
          />
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No doctors found matching your criteria. Try adjusting your filters.
          </p>
        </div>
      )}

      {selectedDoctor && (
        <BookingModal
          doctor={selectedDoctor}
          isOpen={isBookingModalOpen}
          onClose={() => {
            setIsBookingModalOpen(false);
            setSelectedDoctor(null);
          }}
          onBook={handleBookingSubmit}
        />
      )}
    </div>
  );
}