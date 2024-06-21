import React, { useState } from "react";
import styled from "@emotion/styled";
import Create from "../../../services/create-song-service";
import formDataType from "../../../utils/FormType";
import Edit from "../../../services/edit-song-service";
import getSongs from "../../../services/get-songs.service";
const FormContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const EditSong: React.FC<{
  updateSong: Partial<formDataType>;
  onAddSong: () => void;
}> = ({ onAddSong, updateSong }) => {
  console.log("see selected song to be edited");
  console.log(updateSong);
  const [title, setTitle] = useState(updateSong?.title);
  const [album, setAlbum] = useState(updateSong?.album);
  const [genre, setGenre] = useState(updateSong?.genre);
  const [artist, setArtist] = useState(updateSong?.artist);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !album || !genre || !artist) {
      setError("All fields are required");
      return;
    }
    setError("");
    // const newSong = { title, album, genre, artist };
    const formData = { title, album, genre, artist, _id: updateSong._id };
    // Pass the form data to the service
    console.log("see updated song");
    console.log(updateSong);
    const res = Edit(formData);
    res
      .then((response) => response.json())
      .then((data) => {
        console.log("see data");
        console.log(data);
        // If Error is returned from the API server, set the error message
        if (data.error) {
          setError("Failed to add song. Please try again.");
        } else {
          onAddSong();
          setTitle("");
          setAlbum("");
          setGenre("");
          setArtist("");
        }
      })
      // Handle Catch
      .catch((error) => {
        console.log("See the error below");
        setError("Failed to add song. Please try again.");
        console.log(error);
      });
  };

  return (
    <FormContainer>
      <h3>Update Song</h3>
      {error && (
        <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
      )}
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Title:</Label>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Album:</Label>
          <Input
            type="text"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Genre:</Label>
          <Input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Artist:</Label>
          <Input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </FormGroup>
        <Button type="submit"> Update</Button>
      </form>
    </FormContainer>
  );
};

export default EditSong;
