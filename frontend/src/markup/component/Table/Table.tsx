import React, { useState } from 'react';
import styled from '@emotion/styled';
import AddSongForm from '../Main/AddSong';

type TableProps = {
  data: Array<{ [key: string]: any }>;
  columns: Array<{ header: string; accessor: string }>;
};

const StyledHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeading = styled.h3`
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #333;
`;

const StyledButton = styled.button`
  font-family: 'Arial', sans-serif;
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

const Table: React.FC<TableProps> = ({ data, columns }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCreateSongsClick = () => {
    setIsPopupOpen(true);
  };

  const handlePopupBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setIsPopupOpen(false);
    }
  };

  const handleDelete = (index: number) => {
    // Implement the logic to delete a song
    console.log(`Deleting song at index ${index}`);
  };

  const handleEdit = (index: number) => {
    // Implement the logic to edit a song
    console.log(`Editing song at index ${index}`);
  };

  return (
    <TableContainer>
      <StyledHeadingContainer>
        <StyledHeading>Songs Table</StyledHeading>
        <StyledButton onClick={handleCreateSongsClick}>Create Songs</StyledButton>
      </StyledHeadingContainer>
      <StyledTable>
        <thead>
          <tr>
            {columns.map((column) => (
              <StyledTh key={column.accessor}>{column.header}</StyledTh>
            ))}
            <StyledTh>Actions</StyledTh>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <StyledTd key={column.accessor}>{row[column.accessor]}</StyledTd>
              ))}
              <StyledTd>
                <ButtonContainer>
                  <EditButton onClick={() => handleEdit(rowIndex)}>Edit</EditButton>
                  <DeleteButton onClick={() => handleDelete(rowIndex)}>Delete</DeleteButton>
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
            <AddSongForm onAddSong={(song) => console.log(song)} />
          </PopupContent>
        </PopupBackground>
      )}
    </TableContainer>
  );
};

export default Table;
