import React, { useState } from 'react';
import styled from '@emotion/styled';
import Create from '../../../services/create-song-service';
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
const AddSongForm: React.FC<{  onAddSong: () => void }> = ({ onAddSong }) => {
  const [title, setTitle] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');
  const [artist, setArtist] = useState('');
  const [error, setError] = useState('');

  const handleSubmit =  (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !album || !genre || !artist) {
      setError('All fields are required');
      return;
    }
    setError('');
    // const newSong = { title, album, genre, artist };
    const formData = {title,album,genre,artist};
         // Pass the form data to the service
    const res = Create( formData );
    res
      .then((response) => response.json())
      .then((data) => {
      console.log("see data")
         console.log(data);
        // If Error is returned from the API server, set the error message
        if (data.error) {
            setError('Failed to add song. Please try again.');
        } else {
            onAddSong();
            setTitle('');
            setAlbum('');
            setGenre('');
            setArtist('');
        } 
      })
      // Handle Catch
      .catch( ( error ) =>
      {
        console.log( "See the error below" )
        setError('Failed to add song. Please try again.');
        console.log(error)
      });
  };

  return (
    <FormContainer>
      <h3>Add Song</h3>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Title:</Label>
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Album:</Label>
          <Input type="text" value={album} onChange={(e) => setAlbum(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Genre:</Label>
          <Input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Artist:</Label>
          <Input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
        </FormGroup>
        <Button type="submit">Add Song</Button>
      </form>
    </FormContainer>
  );
};

export default AddSongForm;
