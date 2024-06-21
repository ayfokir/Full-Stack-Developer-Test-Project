import React, { useState } from "react";
import Table from "../component/Table/Table";
import getSongs from "../../services/get-songs.service";
import { useEffect } from "react";
import formDataType from "../../utils/FormType";
// const data = [
//     { title: "Bohemian Rhapsody", artist: "Queen", album: "A Night at the Opera", genre: "Rock" },
//     { title: "Billie Jean", artist: "Michael Jackson", album: "Thriller", genre: "Pop" },
//     { title: "Imagine", artist: "John Lennon", album: "Imagine", genre: "Rock" },
//     { title: "Smells Like Teen Spirit", artist: "Nirvana", album: "Nevermind", genre: "Grunge" },
//     { title: "Hotel California", artist: "Eagles", album: "Hotel California", genre: "Rock" },
//     { title: "Hey Jude", artist: "The Beatles", album: "The Beatles (White Album)", genre: "Rock" },
//     { title: "Like a Rolling Stone", artist: "Bob Dylan", album: "Highway 61 Revisited", genre: "Rock" },
//     { title: "Stairway to Heaven", artist: "Led Zeppelin", album: "Led Zeppelin IV", genre: "Rock" },
//     { title: "Thriller", artist: "Michael Jackson", album: "Thriller", genre: "Pop" },
//     { title: "Smells Like Teen Spirit", artist: "Nirvana", album: "Nevermind", genre: "Grunge" }
//   ];

const columns = [
  { header: "Title", accessor: "title" },
  { header: "Artist", accessor: "artist" },
  { header: "Album", accessor: "album" },
  { header: "Genre", accessor: "genre" },
];

const Home: React.FC = () => {
  const [data, setData] = useState<formDataType[]>([]);

  useEffect(() => {
    const fetshSongs = async () => {
      const songs = await getSongs();
      setData(songs.songs);
      console.log("see songs");
      console.log(songs);
    };
    fetshSongs();
  }, []);
  const handleDeleteSong = async (id: string) => {
    setData(data?.filter((song: formDataType) => song._id !== id));
  };
  return (
    <div>
      <Table data={data} columns={columns} onDeleteSong={handleDeleteSong} />
    </div>
  );
};

export default Home;
