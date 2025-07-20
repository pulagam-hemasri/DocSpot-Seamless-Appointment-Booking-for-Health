import React, { useState, useMemo } from 'react';
import { Calendar, Clock, Filter } from 'lucide-react';
import { mockAppointments, mockDoctors } from '../data/mockData';
import { Appointment } from '../types';
import { AppointmentCard } from '../components/appointments/AppointmentCard';
import { Button } from '../components/ui/Button';
import toast from 'react-hot-toast';

export function Appointments() {
  const [appointments, setAppointments] = useState(mockAppointments);
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredAppointments = useMemo(() => {
    if (statusFilter === 'all') return appointments;
    return appointments.filter(apt => apt.status === statusFilter);
  }, [appointments, statusFilter]);

  const handleCancelAppointment = async (appointmentId: string) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setAppointments(prev =>
        prev.map(apt =>
          apt.id === appointmentId
            ? { ...apt, status: 'cancelled' as const, updatedAt: new Date() }
            : apt
        )
      );
      
      toast.success('Appointment cancelled successfully');
    }
  };

  const handleRescheduleAppointment = (appointmentId: string) => {
    toast.info('Reschedule feature coming soon!');
  };

  const getAppointmentDoctor = (doctorId: string) => {
    return mockDoctors.find(doctor => doctor.id === doctorId);
  };

  const statusCounts = useMemo(() => {
    return {
      all: appointments.length,
      pending: appointments.filter(apt => apt.status === 'pending').length,
      confirmed: appointments.filter(apt => apt.status === 'confirmed').length,
      completed: appointments.filter(apt => apt.status === 'completed').length,
      cancelled: appointments.filter(apt => apt.status === 'cancelled').length,
    };
  }, [appointments]);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          My Appointments
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Manage your upcoming and past appointments with healthcare providers.
        </p>
      </div>

      {/* Status Filter */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center space-x-2 mb-4">
          <Filter className="h-5 w-5 text-gray-500" />
          <h2 className="text-lg font-semibold text-gray-900">Filter Appointments</h2>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {[
            { key: 'all', label: 'All', count: statusCounts.all },
            { key: 'pending', label: 'Pending', count: statusCounts.pending },
            { key: 'confirmed', label: 'Confirmed', count: statusCounts.confirmed },
            { key: 'completed', label: 'Completed', count: statusCounts.completed },
            { key: 'cancelled', label: 'Cancelled', count: statusCounts.cancelled },
          ].map(({ key, label, count }) => (
            <Button
              key={key}
              variant={statusFilter === key ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setStatusFilter(key)}
              className="flex items-center space-x-1"
            >
              <span>{label}</span>
              <span className="bg-white bg-opacity-20 px-1.5 py-0.5 rounded-full text-xs">
                {count}
              </span>
            </Button>
          ))}
        </div>
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((appointment) => {
            const doctor = getAppointmentDoctor(appointment.doctorId);
            if (!doctor) return null;

            return (
              <AppointmentCard
                key={appointment.id}
                appointment={appointment}
                doctor={doctor}
                onCancel={handleCancelAppointment}
                onReschedule={handleRescheduleAppointment}
              />
            );
          })
        ) : (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No appointments found
            </h3>
            <p className="text-gray-500 mb-4">
              {statusFilter === 'all' 
                ? "You don't have any appointments yet."
                : `No ${statusFilter} appointments found.`
              }
            </p>
            <Button asChild>
              <a href="/doctors">Book Your First Appointment</a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}