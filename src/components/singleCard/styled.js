import styled from "styled-components";

const SingleCardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #181818;
  border-radius: 4px;
  padding: 16px;
  position: relative;
  flex-direction: column;
  cursor: pointer;
  transition: .3s;
  max-width: 200px;
  margin-right: 20px;
  margin-bottom: 10px;
  height: fit-content;

  .cover {
    width: 180px;
    height: 180px;
    object-fit: cover;
    object-position: center;
  }

  .song {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: normal;
    line-height: 24px;
    text-transform: none;
    width: 100%;
    text-align: left;
  }

  .artist {
    color: #b3b3b3;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: normal;
    line-height: 24px;
    text-transform: none;
    width: 100%;
    text-align: left;
  }
  
  .coverWrap {
    position: relative;
    margin-bottom: 16px;
    .playButton {
      width: 40px;
      height: 40px;
      background-color: #1db954;
      border-radius: 50%;
      min-width: 40px;
      position: absolute;
      bottom: 10px;
      right: 10px;
      border: none;
      opacity: 0;
      transition: .4s;
      transform: translateY(20px);
      cursor: pointer;
      svg {
        width: 16px;
        height: 16px;
        object-position: center;
        object-fit: contain;
      }
    }
  }

  &:hover {
    background: #282828;
    .coverWrap {
      .playButton {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }
`

export {
  SingleCardWrap
}