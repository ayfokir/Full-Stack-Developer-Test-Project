import React, { useState } from "react";
import styled from "@emotion/styled";
import AddSongForm from "../Main/AddSong";
import formDataType from "../../../utils/FormType";
import EditSong from "../Main/EditSong";
import Delete from "../../../services/delete.song.service";
type TableProps = {
  data: Array<{ [key: string]: any }>;
  columns: Array<{ header: string; accessor: string }>;
  onDeleteSong: (id: string) => void;
};

const StyledHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeading = styled.h3`
  font-family: "Arial", sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #333;
`;

const StyledButton = styled.button`
  font-family: "Arial", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  padding: 11px 16px;
  cursor: pointer;
`;

const TableContainer = styled.div`
  width: 80%;
  overflow-x: auto;
  margin: 0 auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
  text-align: center;
`;

const StyledTd = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const DeleteButton = styled(Button)`
  background-color: #dc3545; /* Red color for delete button */
`;

const EditButton = styled(Button)`
  background-color: #28a745; /* Green color for edit button */
`;

const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  font-size: 14px;
  background-color: #ccc;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const Table: React.FC<TableProps> = ({ data, columns, onDeleteSong }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [updateSongs, setUpdateSongs] = useState<Partial<formDataType>>({});
  const handleCreateSongsClick = () => {
    setIsPopupOpen(true);
  };

  const handlePopupBackgroundClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      setIsPopupOpen(false);
      setIsEditPopupOpen(false);
    }
  };

  const handleDelete = async (id: string) => {
    // Implement the logic to delete a song
    console.log(`Deleting song at index ${id}`);
    try {
      console.log(`Deleting song at index ${id}`);
      const response = await Delete(id);
      console.log("See response", response);

      // Update state to remove the deleted song
      if (response && response.success) {
        onDeleteSong(id); // Call the parent component's delete handler
      } else {
        console.log("Failed to delete song");
      }
    } catch (error) {
      console.log("Error deleting song", error);
    }
  };

  const handleEdit = (row: Partial<formDataType>) => {
    // Implement the logic to edit a song
    console.log(`see the selected song pass to Edit Component`);
    console.log(row);
    setIsEditPopupOpen(() => true);
    setUpdateSongs(() => row);
    // setUpdateSongs(() => row)
    // if (!row.title || !row.album || !row.genre || !row.artist) {
    //   // setError('All fields are required');
    //   return;
    // }
    // // setError('');
    // // const newSong = { title, album, genre, artist };
    // const formData = {title: row.title, album: row.album, genre:row.genre, artist:row.artist};
    //      // Pass the form data to the service
    // const res = Edit( formData );
    // res
    //   .then((response) => response.json())
    //   .then((data) => {
    //   console.log("see data")
    //      console.log(data);
    //     // If Error is returned from the API server, set the error message
    //     if (data.error) {
    //         // setError('Failed to add song. Please try again.');
    //     } else {
    //       console.log("Successfully updated")
    //         // onAddSong();
    //         // setTitle('');
    //         // setAlbum('');
    //         // setGenre('');
    //         // setArtist('');
    //     //   // Handle successful response
    //     //   setSuccess(true);
    //     //   setServerError("");
    //     //   // Redirect to the employees page after 2 seconds
    //     //   // For now, just redirect to the home page
    //     //   setTimeout(() => {
    //     //     // window.location.href = '/admin/employees';
    //     //     window.location.href = "/";
    //     //   }, 2000);
    //     }
    //   })
    //   // Handle Catch
    //   .catch( ( error ) =>
    //   {
    //     console.log( "See the error below" )
    //     // setError('Failed to add song. Please try again.');
    //     console.log(error)
    //   });
  };

  return (
    <TableContainer>
      <StyledHeadingContainer>
        <StyledHeading>Songs Table</StyledHeading>
        <StyledButton onClick={handleCreateSongsClick}>
          Create Songs
        </StyledButton>
      </StyledHeadingContainer>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>No.</StyledTh> {/* Add No. column header */}
            {columns.map((column) => (
              <StyledTh key={column.accessor}>{column.header}</StyledTh>
            ))}
            <StyledTh>Actions</StyledTh>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <StyledTd>{rowIndex + 1}</StyledTd>{" "}
              {/* Display index + 1 as the "No." value */}
              {columns.map((column) => (
                <StyledTd key={column.accessor}>
                  {row[column.accessor]}
                </StyledTd>
              ))}
              <StyledTd>
                <ButtonContainer>
                  <EditButton onClick={() => handleEdit(row)}>Edit</EditButton>
                  <DeleteButton onClick={() => handleDelete(row._id)}>
                    Delete
                  </DeleteButton>
                </ButtonContainer>
              </StyledTd>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      {isPopupOpen && (
        <PopupBackground onClick={handlePopupBackgroundClick}>
          <PopupContent>
            <CloseButton onClick={() => setIsPopupOpen(false)}>
              &#10005;
            </CloseButton>
            <AddSongForm onAddSong={() => setIsPopupOpen(false)} />
          </PopupContent>
        </PopupBackground>
      )}
      {isEditPopupOpen && (
        <PopupBackground onClick={handlePopupBackgroundClick}>
          <PopupContent>
            <CloseButton onClick={() => setIsEditPopupOpen(false)}>
              &#10005;
            </CloseButton>
            <EditSong
              updateSong={updateSongs}
              onAddSong={() => setIsEditPopupOpen(false)}
            />
          </PopupContent>
        </PopupBackground>
      )}
    </TableContainer>
  );
};

export default Table;
