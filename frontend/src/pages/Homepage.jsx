import { useEffect, useState, useRef } from 'react';
import toast from 'react-hot-toast';
import { ArrowUpRight, Github } from 'lucide-react';

import api from '@/lib/axios'
import Navbar from '@/components/Navbar';
import RateLimitedUI from '@/components/RateLimitedUI';
import NoteCard from '@/components/NoteCard';
import NoteFoundNote from '@/components/NoteFoundNote';
import Button from '@/components/Button';


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
    <main className='min-h-screen px-3 md:px-10 pb-10 bg-radial-[at_50%_0%] from-base-100/90 to-base-300 to-50%'>
      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      {/* loading */}
      {loading && <div className='max-w-7xl text-center mx-auto p-4 mt-6'>Loading notes...</div>}

      {/* hero section */}
      <section className='hero-section text-center min-h-120 flex flex-col justify-center items-center gap-6'>
        <Button isPrimary={false} className='group border border-stone-700 h-fit  pl-1.5 pr-2.5 py-0.5 rounded-full cursor-pointer duration-200 hover:border-stone-400 hover:bg-stone-800 active:bg-stone-700'>
          <Github className='inline size-4.5 mr-0.5 rounded-full bg-stone-900 p-1.5 box-content duration-200  group-hover:bg-stone-700/80 group-hover:text-white/80' />
          <a href="https://github.com/zaki-ramadhan/paperloom?tab=readme-ov-file#readme-ov-file" target='_blank' rel="noopener noreferrer" className='btn btn-primary font-urbanist font-light text-base bg-transparent text-white/40 border-0 px-0 group-hover:text-white'>Visit me on Github</a>
          <ArrowUpRight className='inline size-5 ml-0.5 text-white/40 duration-200 group-hover:text-white' />
        </Button>

        <h1 className='text-7xl font-urbanist font-medium max-w-3xl'>Let's start managing your daily notes <span className='text-primary'>easily</span>.</h1>
        <p className='text-xl text-white/40'>A clean space to write, organize, and revisit what matters every day.</p>
        <div className='flex gap-2 items-center'>
          <Button onClick={handleScroll} className="hover:outline-offset-3 text-base px-8 py-0.5">Let's Get Started!</Button>
          <a href="https://github.com/zaki-ramadhan/paperloom?tab=readme-ov-file#readme-ov-file" target='_blank' rel="noopener noreferrer" className='group'>
            <Github className='inline size-6 rounded-full w-fit h-fit p-2 bg-transparent border-2 border-primary/10 text-primary box-content duration-200 group-hover:bg-primary/20 group-hover:border-primary group-active:bg-primary/30' />
          </a>
        </div>
      </section>

      {/* empty note */}
      {notes.length === 0 && !isRateLimited && <NoteFoundNote />}

      {/* the notes */}
      {notes.length > 0 && !isRateLimited && (
        <div ref={targetScroll} className='group/outer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-6 md:mt-12'>
          {notes.map(note => (
            <NoteCard key={note._id} note={note} setNotes={setNotes} />
          ))}
        </div>
      )}
    </main>
  )
}

export default Homepage
