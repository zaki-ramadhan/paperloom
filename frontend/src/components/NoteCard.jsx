import { Link } from 'react-router';
import { PenSquareIcon, TrashIcon } from 'lucide-react';

import { formatDate } from '@/lib/utils';

const NoteCard = ({ note }) => {
    return (
        <Link to={`/note/${note._id}`} className='card relative bg-gradient-to-br from-base-100 to-base-300 hover:shadow-xl transition-all duration-200 border-t-8 border-primary rounded-4xl rounded-tr-lg overflow-hidden after:absolute after:inset-0 after:bg-radial-[at_50%_120%] after:from-primary after:to-primary/0 after:to-80% after:opacity-6'>

            <div className="card-body border border-stone-800/60">
                <h3 className='card-title text-base-content text-xl'>{note.title}</h3>
                <p className='text-base-content/70 line-clamp-3'>{note.content}</p>

                <div className='card-actions justify-between items-center mt-6 z-10'>
                    <span className='text-sm text-base-content/60'>
                        {formatDate(new Date(note.createdAt))}
                    </span>
                    <div className="flex items-center gap-1">
                        <button className='btn btn-ghost btn-xs px-2.5 py-4.5 hover:bg-stone-800 hover:border hover:border-stone-700 active:bg-stone-700'>
                            <PenSquareIcon className="size-4" />
                        </button>
                        <button className='btn btn-ghost btn-xs text-error px-2.5 py-4.5 hover:bg-stone-800 hover:border hover:border-stone-700 active:bg-stone-700'>
                            <TrashIcon className="size-4" />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default NoteCard
