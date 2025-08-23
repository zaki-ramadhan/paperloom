import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import { ArrowLeftIcon } from "lucide-react";
import { toast } from "react-hot-toast";
import Navbar from "@/components/Navbar";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!title.trim || !content.trim) {
    //   toast.error("All fields are required")
    //   console.info(backendUrl)
    //   return;
    // }

    setLoading(true);

    try {
      await axios.post(backendUrl, {
        title,
        content
      })
      toast.success("New note created successfully!");
      navigate("/"); // redirect to homepage
    } catch (error) {
      console.error("Failed to create new note")
      toast.error("Failed to create new note")
    } finally {
      setLoading(false)
    }
    console.log({ title: title, content: content })
  }

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>

          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create New Note</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                {/* title note input */}
                <div className="form-control flex flex-col gap-4">
                  <label htmlFor="title-input" className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input type="text"
                    id="title-input"
                    placeholder="Note Title"
                    className="input input-bordered w-full p-5"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                {/* content note input */}
                <div className="form-control flex flex-col gap-4">
                  <label htmlFor="content-input" className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea
                    id="content-input"
                    placeholder="Write your note here..."
                    className="textarea textarea-bordered w-full h-32 p-5"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                {/* button */}
                <div className="card-actions justify-end">
                  <button type="submit" className="btn btn-primary hover:outline-2 hover:outline-primary/50 active:outline-primary" disabled={loading}>
                    {!loading ? "Create Note" :
                      <span>
                        <span className="loading loading-spinner loading-xs mr-2"></span>
                        Creating...
                      </span>
                    }
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CreatePage
