import { NotebookPen } from "lucide-react"
import { Link } from "react-router"

const NoteFoundNote = () => {
    return (
        <section className="not-found-section mt-16 w-full min-h-120 text-center bg-gradient-to-b from-base-300 to-base-200 border-2 border-t-6 border-stone-800 rounded-4xl grid place-content-center">
            <NotebookPen className="size-11 mx-auto p-5 box-content text-stone-300 bg-base-100 rounded-full border-2 border-stone-800"/>
            <h1 className="text-4xl mt-6">Let's create your first note!</h1>
            <h2 className="text-lg text-stone-500 mt-3">Your notebook is waiting… what’s on your mind today?</h2>
            <Link to={"/create"} className="btn cta-btn btn-primary mt-8 w-fit mx-auto px-6 hover:outline-2 hover:outline-offset-3 hover:outline-primary/50 active:outline-primary">Create My First Note</Link>
        </section>
    )
}

export default NoteFoundNote
