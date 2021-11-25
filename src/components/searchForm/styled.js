import styled from "styled-components";

const SearchItem = styled.div`
  position: absolute;
  //left: 0;
  top: 20px;
  background-color: #fff;
  display: flex;
  align-items: center;
  border: 0;
  border-radius: 500px;
  color: #000;
  padding: 10px;
  margin-left: 40px;
  min-width: 350px;
  input {
    border: none;
    background-color: transparent;
  }
  svg {
    margin-right: 20px;
  }
`

export {
  SearchItem
}