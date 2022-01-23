// @flow
import * as React from 'react';
export function Card({image,title,description,selected,clickHandler}) {
  return (
    <div onClick={clickHandler} className={selected?'card card-selected':'card'} >
        <div style={{'-webkit-mask': "url("+image+") no-repeat",}} className={selected?'card-selected-image icon':'icon'}alt="" />
        <div className='card-title'>{title}</div>
        <div className='description'>{description}</div>
    </div>
  );
};