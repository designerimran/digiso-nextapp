
import React from 'react';
import Marquee from 'react-fast-marquee';

const Ticker = () => {
  const ticker = ["Web Design", "Web Development", "UI/UX Design"]
  return (
    <Marquee gradient={false} speed={100} pauseOnHover play={true} className="ticker" >
      {ticker.map((item, index) => (
        <div key={index} className="flex ">
          <div className="ticker-item xl:p-10 md:p-6 p-4" >{item}</div>
          <div className="ticker-item xl:p-10 md:p-6 p-4" >#</div>
        </div>
      ))}
    </Marquee>
  );
};

export default Ticker;
