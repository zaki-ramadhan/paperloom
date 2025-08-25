import { useState } from "react"
import { useNavigate, useParams } from "react-router";

const NoteDetailPage = () => {
  const [note, setNote] = useState();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  console.log("This is the id", id)
  return (
    <>
      Note Detail Page
    </>
  )
}

export default NoteDetailPage
