import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

import Navbar from '@/components/Navbar';
import RateLimitedUI from '@/components/RateLimitedUI';
import NoteCard from '@/components/NoteCard';

const Homepage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch data
  useEffect(() => {
    const getNotes = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/notes');
        console.log(res.data);
        setNotes(res.data)
        setIsRateLimited(false) // no need to set rate limiter while successfully fetching data
      } catch (error) {
        console.error("Error fetching notes.");
        if (error.response.status === 429) { // 429 is "Too Many Request" / rate limited
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false); // after success or failed fetch data, remove the loading
      }
    }

    getNotes();
  }, []);

  return (
    <div className='min-h-screen'>
      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      {/* loading */}
      {loading && <div className='max-w-7xl text-center mx-auto p-4 mt-6'>Loading notes...</div>}

      {/* the notes */}
      {notes.length > 0 && !isRateLimited && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {notes.map((note) => {
            <NoteCard key={notes._id} note={note} />
          })}
        </div>
      )}
    </div>
  )
}

export default Homepage
