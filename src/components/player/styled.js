import styled from 'styled-components'

const PlayerWrap = styled.div`
  position: fixed;
  z-index: 51;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #181818;
  border-top: 1px solid #282828;
`

const Info = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 16px;

  .cover {
    width: 56px;
    height: 56px;
    object-fit: cover;
    object-position: center;
    margin-right: 14px;
  }

  .titleBlock {
    display: flex;
    flex-direction: column;

    .song {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 16px;
      text-transform: none;
    }

    .artist {
      font-size: 11px;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 16px;
      text-transform: none;
      color: rgb(179, 179, 179);
    }
  }

  .like {
    background-color: transparent;
    border: none;
    height: 32px;
    min-width: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    cursor: pointer;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`

const Controls = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  .player-controls {
    .player-controls__buttons {
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      justify-content: center;
      .controls {
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        margin: 0 8px;
        cursor: pointer;

        svg {
          width: 16px;
          height: 16px;
        }

        &:hover svg path {
          fill: #fff !important;
        }
      }

      .play {
        background-color: #fff;
        border-radius: 50%;
        transition: .4s;

        &:hover {
          transform: scale(1.06);
          transition: .4s;
        }

        &:hover svg path {
          fill: #000 !important;
        }
      }
    }

    .playback-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .start,
      .end {
        font-size: 11px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 16px;
        text-transform: none;
        color: rgb(179, 179, 179);
      }
      .timeline {
        background-color: #535353;
        height: 4px;
        width: 100%;
        margin: 0 10px;
        max-width: 488px;
        min-width: 488px;
        position: relative;
        .progress {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 40%;
          height: 100%;
          background-color: #b3b3b3;
          cursor: pointer;
        }
      }
    }
  }
`

const Volume = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 16px;
  .volume {
    background-color: transparent;
    border: none;
    height: 32px;
    min-width: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    cursor: pointer;
    svg {
      width: 16px;
      height: 16px;
    }
  }
  .volumeLine {
    background-color: #535353;
    height: 4px;
    width: 100%;
    margin: 0 10px;
    max-width: 100px;
    min-width: 100px;
    position: relative;
    .progress {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 40%;
      height: 100%;
      background-color: #b3b3b3;
      cursor: pointer;
    }
  }
`

export {
  PlayerWrap,
  Info,
  Controls,
  Volume
}