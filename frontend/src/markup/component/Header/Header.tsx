/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component for routing

const headerStyles = css`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const buttonStyles = css`
  background-color: #555;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none; /* Remove underline when used as a link */
  margin-left: 10px; /* Add margin for spacing */
`;

const Header: React.FC = () => {
  return (
    <div css={headerStyles}>
      <h1>My Music App</h1>
      <div>
        <Link to="/statistics" css={buttonStyles}>Statistics</Link>
        {/* Add additional buttons or links here */}
        <Link to="/profile" css={buttonStyles}>Profile</Link>
      </div>
    </div>
  );
};

export default Header;
