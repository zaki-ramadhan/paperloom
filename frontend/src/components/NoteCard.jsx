import { Link } from 'react-router';
import { Flame, PenSquare, Trash, Clock } from 'lucide-react';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router";


import api from "@/lib/axios";

import { formatDate } from '@/lib/utils';
import Button from './Button';

const NoteCard = ({ note, setNotes }) => {
    const navigate = useNavigate();

    const handleDelete = async (e, id) => {
        e.preventDefault();

        if (!window.confirm("Are you sure you want to delete this note?")) return; // cancel delete

        // accepted delete
        try {
            await api.delete(`/notes/${id}`);
            // remove the deleted note real-time
            setNotes((prev) => prev.filter(note => note._id != id)) // make a new list without the deleted note
            toast.success("Your note has been deleted!");
            navigate("/"); // redirect to homepage
        } catch (error) {
            console.log("Error in handleDelete", error);
            toast.error("Failed to deleted note");
        }
    }
    return (
        //? i just found cool tricks to manipulate animation using 'Named Groups' / 'Arbitrary Group Names' e.g. group/outer and group/inner
        <Link to={`/notes/${note._id}`} className='card group/inner relative bg-gradient-to-br from-base-100 to-base-300 hover:shadow-lg transition-all duration-200 border-t-4 border-stone-800 rounded-2xl overflow-hidden hover:border-primary first:hover:border-orange-700    00 hover:scale-102 group-hover/outer:opacity-50 hover:opacity-100 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[0.2rem] before:rounded-full before:bg-primary first:hover:before:bg-orange-700 00 before:transition-all before:duration-150 hover:before:w-14 active:scale-100 after:absolute after:inset-0 after:bg-radial-[at_100%_120%] after:from-stone-900/80 after:to-stone-900/0 after:to-80% after:opacity-70 hover:after:from-stone-700 after:transition-colors after:duration-200'>

            <div className="card-body border border-stone-800/60">
                <div className='flex justify-between items-center gap-2'>
                    <h3 className='card-title text-base-content text-xl line-clamp-1'>{note.title}</h3>
                    <span className='hidden group-first/inner:inline p-1.5 rounded-full bg-orange-200/6 text-orange-600'><Flame/></span>
                </div>
                <span className='h-fit overflow-hidden'>
                    <p className='text-stone-500 text-base line-clamp-2 break-all'>{note.content}</p>
                </span>

                <div className='card-actions justify-between items-center group-first:mt-2 mt-6 z-10'>
                    <span className='card-date text-sm text-base-content/15 group-hover/inner:text-base-content/90 duration-200'>
                        <Clock className='inline size-3.5 mr-1.5 -mt-0.5' />
                        {formatDate(new Date(note.createdAt))}
                    </span>
                    <div className="flex items-center gap-1">
                        <span className='lg:tooltip' data-tip="Edit">
                            <Button isPrimary={false} className='edit-btn btn-ghost btn-xs px-2.5 py-4.5 hover:bg-stone-600/35 hover:border hover:border-stone-500 active:bg-stone-600/70'>
                                <PenSquare className="size-4" />
                            </Button>
                        </span>
                        <span className='lg:tooltip' data-tip="Delete">
                            <Button isPrimary={false} onClick={(e) => handleDelete(e, note._id)} className='delete-btn btn-ghost btn-xs text-error px-2.5 py-4.5 hover:bg-red-600/15 hover:border hover:border-red-600 active:bg-red-500/30'>
                                <Trash className="size-4" />
                            </Button>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default NoteCard
