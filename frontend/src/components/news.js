import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  CardMedia,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const News = () => {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:7777/news");
        const data = await response.json();
        setPosts(data); // automatisch sortiert absteigend per Backend
      } catch (error) {
        console.error("Fehler beim Laden der News:", error);
      }
    };
    fetchNews();
  }, []);

  const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setImageFile(file);
    setImage(URL.createObjectURL(file)); // Vorschau
  }
};

  const handleDelete = async (id) => {
  try {
    await fetch(`http://localhost:7777/news/${id}`, {
      method: "DELETE",
    });
    setPosts((prev) => prev.filter((post) => post.id !== id));
  } catch (err) {
    console.error("Fehler beim Löschen:", err);
    alert("Fehler beim Löschen");
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
    setPosts([newPost, ...posts]);
    setText("");
    setImage(null);
    setImageFile(null);
  } catch (err) {
    console.error("Upload fehlgeschlagen:", err);
    alert("Upload fehlgeschlagen");
  }
};

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      spacing={2}
      marginTop={5}
    >
      <Grid item sx={{ width: "100%", maxWidth: 600 }}>
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
      </Grid>

      <Grid item sx={{ width: "100%", maxWidth: 600 }}>
        {posts.map((post) => (
          <Card key={post.id} sx={{ mt: 2, position: "relative" }}>

            {post.image && (
              <CardMedia
                component="img"
                image={post.image}
                alt="Post Bild"
                sx={{ maxHeight: 400, objectFit: "contain" }}
              />
            )}
            <CardContent>
              <Typography variant="body1">{post.text}</Typography>
            </CardContent>
            <IconButton
    aria-label="Löschen"
    onClick={() => handleDelete(post.id)}
    sx={{ position: "absolute", top: 8, right: 8 }}
  >
    <DeleteIcon />
  </IconButton>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};

export default News;