import { useEffect, useState } from 'react';
import Navbar from './../components/Navbar';
import RateLimitedUI from '../components/RateLimitedUI';

const Homepage = () => {
  const { isRateLimited, setIsRateLimited } = useState(true);
  const { note, setNote } = useState([]);
  const { loading, setLoading } = useState(true);

  // fetch data
  useEffect(() => {
    const getNotes = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/notes');
        const fetchedData = await res.json();
        console.log(fetchedData);
      } catch (error) {
        console.error("Error fetching notes.");
      }
    }
  }, []);

  return (
    <div className='min-h-screen'>
      <Navbar />

      {isRateLimited && <RateLimitedUI />}
    </div>
  )
}

export default Homepage
