import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import NewsPost from "../Buttons/NewsPost";

const News = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:7777/news");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Fehler beim Laden der News:", error);
      }
    };
    fetchNews();
  }, []);

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

  const handleNewPost = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <Grid container direction="column" alignItems="center" spacing={2} marginTop={5}>
      <Grid item sx={{ width: "100%", maxWidth: 600 }}>
        <NewsPost onNewPost={handleNewPost} />
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