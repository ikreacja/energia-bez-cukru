
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">Strona, której szukasz, nie istnieje.</p>
      <Link to="/">
        <Button className="transition-all hover:shadow-lg bg-red-500 hover:bg-red-600">
          Wróć do strony głównej
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
