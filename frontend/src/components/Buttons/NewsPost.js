import React, { useState } from "react";
import {
  Card,
  TextField,
  Button,
  CardMedia,
} from "@mui/material";

const NewsPost = ({ onNewPost }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImage(URL.createObjectURL(file)); // Vorschau
    }
  };

  const handlePost = async () => {
    if (!text && !image) {
      alert("Bitte gib einen Text ein oder wähle ein Bild aus.");
      return;
    }

    const formData = new FormData();
    formData.append("text", text);
    if (imageFile) formData.append("image", imageFile);

    try {
      const response = await fetch("http://localhost:7777/news", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Fehler beim Hochladen");
      }

      const newPost = await response.json();
      onNewPost(newPost);
      setText("");
      setImage(null);
      setImageFile(null);
    } catch (err) {
      console.error("Upload fehlgeschlagen:", err);
      alert("Upload fehlgeschlagen");
    }
  };

  return (
    <Card sx={{ p: 2 }}>
      <TextField
        label="Text"
        multiline
        rows={3}
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="outlined" component="label" fullWidth sx={{ mb: 2 }}>
        Bild auswählen
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleImageChange}
        />
      </Button>
      {image && (
        <CardMedia
          component="img"
          image={image}
          alt="Vorschau"
          sx={{ mb: 2, maxHeight: 300, objectFit: "contain" }}
        />
      )}
      <Button variant="contained" onClick={handlePost} fullWidth>
        Posten
      </Button>
    </Card>
  );
};

export default NewsPost;
