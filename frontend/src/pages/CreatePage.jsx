import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { toast } from "react-hot-toast";

import Navbar from "@/components/Navbar";
import api from "@/lib/axios";
import Label from "@/components/Label";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required")
      return;
    }

    setLoading(true);

    try {
      await api.post("/notes", {
        title,
        content
      })
      toast.success("New note created successfully!");
      navigate("/"); // redirect to homepage
    } catch (error) {
      console.error("Failed to create new note")
      // set up rate limiter, in case user will spam clicking button
      if (error.response.status === 429) {
        toast.error("Slow down! You're creating new note too fast", {
          duration: 3000,
          icon: "💀"
        });
      } else {
        toast.error("Failed to create new note")
      }
    } finally {
      setLoading(false)
    }
    console.log({ title: title, content: content })
  }

  return (
    <main className="min-h-screen bg-base-200">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">

          {/* link to homepage */}
          <Button isLink isPrimary={false} className="btn-ghost mb-4">
            <ArrowLeft className="size-5" />
            Back to Notes
          </Button>

          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create New Note</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                {/* title note input */}
                <div className="form-control flex flex-col gap-4">
                  <Label htmlFor="title-input">Title</Label>
                  <Input type="text"
                    id="title-input"
                    placeholder="Note Title"
                    className="input input-bordered w-full p-5"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                {/* content note input */}
                <div className="form-control flex flex-col gap-4">
                  <Label htmlFor="content-input">Content</Label>
                  <TextArea
                    id="content-input"
                    placeholder="Write your note here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                {/* button */}
                <div className="card-actions justify-end">
                  <Button type="submit" disabled={loading}>
                    {!loading ? "Create Note" :
                      <span>
                        <span className="loading loading-spinner loading-xs mr-2"></span>
                        Creating...
                      </span>
                    }
                  </Button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default CreatePage
