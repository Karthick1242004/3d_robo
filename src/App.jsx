import React, { useState, useEffect } from 'react';
import './App.css';
import Splines from './components/Splinescene/Splines';
import Navbar from './components/Navbar/Navbar';
import Loader from './components/Loader/Loader';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change this to the actual loading time of your app

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='spline'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className='navb'>
            <Navbar />
          </div>
          <div className='sp1'>
            <Splines />
            <div className='main'>
              <h1>Hello Everyone</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
}