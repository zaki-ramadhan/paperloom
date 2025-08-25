import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";
import { Loader, ArrowLeft, Trash } from "lucide-react";
import toast from "react-hot-toast";  

import api from '@/lib/axios';
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Label from "@/components/Label";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams(); // Get the "id" value from the fileURLToPath

  useEffect(() => {
    const getNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        toast.error("Failed to get note")
      } finally {
        setLoading(false);
      }
    }

    getNote();
  }, [id]); // Whenever the id changes, this will be updated

  if (loading) return <div className="min-h-screen bg-base-200 flex items-center justify-center">
    <Loader className="animate-spin size-10" />
  </div>

  const handleDelete = async (e, id) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to delete this note?")) return; // cancel delete

    // accepted delete
    try {
      await api.delete(`/notes/${id}`);
      toast.success("Your note has been deleted!");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to deleted note");
    }
  }

  const handleSave = async (e) => {
    e.preventDefault();

    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add a tittle or content");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="min-h-screen bg-base-200">
      <Navbar />

      <div className="container mx-auto px-4 py-8">

        <div className="max-w-2xl mx-auto">

          {/* card head */}
          <div className="card-head flex justify-between">
            <Button isLink isPrimary={false} className="btn-ghost mb-4">
              <ArrowLeft className="size-5" />
              Back to Notes
            </Button>
            <Button isPrimary={false} onClick={(e) => handleDelete(e, note._id)} className=" font-normal text-error px-3 py-4.5 hover:bg-red-600/15 border-[1.9px] border-red-900/40 hover:border-red-600 active:bg-red-500/30">
              <Trash className="size-4.5" />
              Delete Note
            </Button>
          </div>

          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Note Details</h2>
              <form onSubmit={handleSave} className="flex flex-col gap-6">

                {/* title note input */}
                <div className="form-control flex flex-col gap-4">
                  <Label htmlFor="title-input">Title</Label>
                  <Input type="text"
                    id="title-input"
                    placeholder="Note Title"
                    className="input input-bordered w-full p-5"
                    value={note.title}
                    onChange={(e) => setNote({...note, title:e.target.value})}
                  />
                </div>

                {/* content note input */}
                <div className="form-control flex flex-col gap-4">
                  <Label htmlFor="content-input">Content</Label>
                  <TextArea
                    id="content-input"
                    placeholder="Write your note here..."
                    value={note.content}
                    onChange={(e) => setNote({...note, content:e.target.value})}
                  />
                </div>

                {/* button */}
                <div className="card-actions justify-end">
                  <Button type="submit" disabled={saving}>
                    {!saving ? "Save Changes" :
                      <span>
                        <span className="loading loading-spinner loading-xs mr-2"></span>
                        Saving...
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

export default NoteDetailPage
