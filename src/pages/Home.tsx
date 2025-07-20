import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Shield, Clock, Star, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

export function Home() {
  const features = [
    {
      icon: Calendar,
      title: 'Easy Booking',
      description: 'Schedule appointments with just a few clicks. No more waiting on hold or playing phone tag.'
    },
    {
      icon: Users,
      title: 'Verified Doctors',
      description: 'All healthcare providers are verified and approved by our admin team for your safety.'
    },
    {
      icon: Clock,
      title: 'Real-time Availability',
      description: 'See real-time availability and choose from open slots that fit your schedule.'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your medical information is protected with enterprise-grade security and privacy.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Patients' },
    { number: '500+', label: 'Verified Doctors' },
    { number: '50+', label: 'Specialties' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            DocSpot: Seamless Appointment
            <span className="text-blue-600"> Booking for Health</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Booking a doctor's appointment has never been easier. Schedule your appointments 
            from the comfort of your own home with our convenient online platform.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/doctors">
              Find Doctors
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/register">Get Started</Link>
          </Button>
        </div>

        <div className="mt-12">
          <img
            src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Doctor consultation"
            className="rounded-2xl shadow-2xl mx-auto max-w-4xl w-full"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white rounded-2xl p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold">{stat.number}</div>
              <div className="text-blue-100 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose DocSpot?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform offers advanced features to make healthcare booking simple and efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with DocSpot in just a few simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full text-2xl font-bold text-blue-600">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Sign Up</h3>
            <p className="text-gray-600">
              Create your account and complete your profile with basic information.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full text-2xl font-bold text-blue-600">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Find Doctors</h3>
            <p className="text-gray-600">
              Browse through verified doctors and filter by specialty, location, or availability.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full text-2xl font-bold text-blue-600">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Book & Meet</h3>
            <p className="text-gray-600">
              Schedule your appointment and meet with your doctor at the scheduled time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 md:p-12 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of patients who trust DocSpot for their healthcare needs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/register">
              Create Your Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}