import React from "react";

import * as Style from './styled';
import cover from '../../media/image/seether.jfif'

const SingleCard = () => {
  return (
    <Style.SingleCardWrap>
      <div className="coverWrap">
        <img src={cover} alt="cover" className="cover"/>
        <button className="playButton">
          <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true">
            <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor" />
          </svg>
        </button>
      </div>
      <div className="song">Fallen</div>
      <div className="artist">Seether</div>
    </Style.SingleCardWrap>
  )
}

export default SingleCard;