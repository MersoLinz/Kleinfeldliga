import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  CardMedia,
} from "@mui/material";

const News = () => {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handlePost = () => {
    if (!text && !image) {
      alert("Bitte gib einen Text ein oder wähle ein Bild aus.");
      return;
    }
    const newPost = {
      id: Date.now(),
      text,
      image,
    };
    setPosts([newPost, ...posts]); // Neuestes zuerst
    setText("");
    setImage(null);
  };

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      {/* Post Editor */}
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

      {/* Feed */}
      <Grid item sx={{ width: "100%", maxWidth: 600 }}>
        {posts.map((post) => (
          <Card key={post.id} sx={{ mt: 2 }}>
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
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};

export default News;
