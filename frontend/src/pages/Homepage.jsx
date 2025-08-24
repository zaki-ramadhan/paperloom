import { useEffect, useState, useRef } from 'react';
import toast from 'react-hot-toast';
import { ArrowUpRight, Github } from 'lucide-react';

import api from '@/lib/axios'
import Navbar from '@/components/Navbar';
import RateLimitedUI from '@/components/RateLimitedUI';
import NoteCard from '@/components/NoteCard';


const Homepage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const targetScroll = useRef(null);

  // fetch data 
  useEffect(() => {
    const getNotes = async () => {
      try {
        const res = await api.get("/notes");
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

  // scroll effect
  const handleScroll = () => {
    targetScroll.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  return (
    <main className='min-h-screen px-3 md:px-10 pb-10'>
      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      {/* loading */}
      {loading && <div className='max-w-7xl text-center mx-auto p-4 mt-6'>Loading notes...</div>}

      {/* hero section */}
      <section className='hero-section text-center min-h-120 flex flex-col justify-center items-center gap-6'>
        <div  className='group border border-stone-700  pl-2 pr-4 py-1 rounded-full cursor-pointer duration-200 hover:border-stone-300 hover:bg-stone-900'>
          <Github className='inline size-5 mr-2 rounded-full bg-stone-900 p-2 box-content duration-200  group-hover:bg-stone-700/80' />
          <a href="https://github.com/zaki-ramadhan/paperloom?tab=readme-ov-file#readme-ov-file" target='_blank' className='btn btn-primary font-urbanist font-light text-base bg-transparent text-white/40 border-0 px-0 group-hover:text-white'>Visit us on Github</a>
          <ArrowUpRight className='inline size-5 ml-1 text-white/40 duration-200 group-hover:text-white'/>
        </div>

        <h1 className='text-7xl font-urbanist font-medium max-w-3xl'>Let's start managing your daily notes <span className='text-primary'>easily</span>.</h1>
        <p className='text-xl text-white/40'>A clean space to write, organize, and revisit what matters every day</p>
        <button onClick={handleScroll} className='btn cta-btn btn-primary font-medium'>Let's Get Started!</button>
      </section>

      {/* the notes */}
      {notes.length > 0 && !isRateLimited && (
        <div ref={targetScroll} className='group/outer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-6 md:mt-12'>
          {notes.map(note => (
            <NoteCard key={note._id} note={note} />
          ))}
        </div>
      )}
    </main>
  )
}

export default Homepage
