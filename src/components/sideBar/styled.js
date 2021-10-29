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
  
  .logo {
    height: 40px;
    width: 100%;
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
            fill: #fff!important;
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