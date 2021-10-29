import styled from 'styled-components'

const SideBarWrap = styled.div`
  background-color: #000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-width: 241px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: #fff;
  padding: 24px 0 0;
  z-index: 50;

  .logo {
    height: 40px;
    width: fit-content;
    display: flex;
    justify-content: flex-start;
    padding: 0 24px;
    margin-bottom: 18px;

    svg {
      height: 40px;
      max-width: 131px;
      width: 100%;
      object-position: center;
      object-fit: contain;
    }
  }

  .create_playlist {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    margin-top: 24px;
    opacity: .7;
    padding: 0 24px;
    transition: .4s;
    cursor: pointer;
    margin-bottom: 15px;
    .icon {
      background-color: #fff;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16px;
    }

    span {
      font-size: 14px;
      font-weight: 700;
      letter-spacing: normal;
      line-height: 16px;
      text-transform: none;
      color: #fff;
    }

    &:hover {
      opacity: 1;
      transition: .4s;
    }
  }

  .liked_songs {
    background-color: transparent;
    border: none;
    opacity: .7;
    padding: 0 24px;
    display: flex;
    align-items: center;
    transition: .4s;
    cursor: pointer;
   .icon {
     background: linear-gradient(135deg, #450af5, #c4efd9);
     border-radius: 1px;
     width: 24px;
     height: 24px;
     border: none;
     display: flex;
     align-items: center;
     justify-content: center;
     margin-right: 16px;
     svg {
       width: 12px;
       height: 12px;
     }
   }
    span {
      font-size: 14px;
      font-weight: 700;
      letter-spacing: normal;
      line-height: 16px;
      text-transform: none;
      color: #fff;
    }
    &:hover {
      opacity: 1;
      transition: .4s;
    }
  }

  .border {
    width: 100%;
    max-width: 170px;
    margin: 24px auto 0;
    height: 1px;
    padding: 0 24px;
    background-color: #282828;
  }
`

const Navigation = styled.ul`
  width: 100%;
  padding-left: 0;

  li {
    list-style-type: none;
    padding: 0 8px;
    height: 40px;
    display: flex;
    align-items: center;

    a {
      padding: 0 16px;
      display: flex;
      align-items: center;
      text-decoration: none;

      span {
        color: #b3b3b3;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: normal;
        line-height: 16px;
        text-transform: none;
        text-decoration: none;
        margin-left: 15px;
      }

      &.active {
        background-color: #282828;
        border-radius: 8px;
        width: 100%;
        height: 100%;

        span {
          color: #fff;
        }

        svg {
          path {
            fill: #fff !important;
          }
        }
      }
    }
  }
`

export {
  SideBarWrap,
  Navigation
}