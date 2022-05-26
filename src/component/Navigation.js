import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navigation() {
  return (
    <>
      <div> </div>
      <Container>
        <ul>
          <li>
            <Link to="/enterName">
              <a href="#">Enter Name</a>
            </Link>
          </li>
          <li>
            <Link to="/showName">
              <a href="#">Show Name</a>
            </Link>
          </li>
          <li>
            <Link to="/deletedName">Deleted Name </Link>
          </li>
        
        </ul>
      </Container>
    </>
  );
}

export default Navigation;

const Container = styled.div`
  background-color: yellow;
  z-index: 50;

  ul {
    display: flex;
    justify-content: center;

    margin-bottom: 0;
    margin-top: 0;
  }
  li {
    text-decoration: none;
    list-style: none;
    padding: 20px;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;