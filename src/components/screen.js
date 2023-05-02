import React from 'react';
import '../style-sheets/screen.css';

function  Screen ({ input }) {
  return (
    <div className='input'>
      {input}
  </div>
  );
}
// const Screen = ({ input }) => {
//   <div className='input'>
//     {input}
//   </div>
// };

export default Screen;