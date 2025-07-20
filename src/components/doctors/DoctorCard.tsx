import React from 'react';
import { Star, MapPin, Clock, DollarSign } from 'lucide-react';
import { Doctor } from '../../types';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';

interface DoctorCardProps {
  doctor: Doctor;
  onBookAppointment: (doctor: Doctor) => void;
}

export function DoctorCard({ doctor, onBookAppointment }: DoctorCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <img
            src={doctor.avatar}
            alt={doctor.name}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {doctor.name}
            </h3>
            <p className="text-sm text-blue-600 font-medium">{doctor.specialty}</p>
            <div className="flex items-center mt-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 ml-1">
                {doctor.rating} ({doctor.reviewCount} reviews)
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            {doctor.location}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            {doctor.experience} years experience
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <DollarSign className="h-4 w-4 mr-2" />
            ${doctor.consultationFee} consultation fee
          </div>
        </div>

        <p className="mt-3 text-sm text-gray-600 line-clamp-2">
          {doctor.bio}
        </p>

        <div className="mt-4 flex flex-wrap gap-1">
          {doctor.languages.map((language) => (
            <span
              key={language}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              {language}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <Button
            onClick={() => onBookAppointment(doctor)}
            className="w-full"
          >
            Book Appointment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}