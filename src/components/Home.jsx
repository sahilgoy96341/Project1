import React from 'react'
import vg from "../assets/vecteezy.jpg";
// import {AiFillGoogleCircle,
//     AiFillAmazonCircle,
//     AiFillYoutube,
//     AiFillInstagram} from 'react-icon/ai';
 const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>Whitestar.</h1>
        <p>Solution to all your problems</p>
      </main>
    </div>
    <div className='home2'>
        <img src={vg} alt='Graphics'/>
    <div>
    <p>
        We are your one and only solution to the tech problems you face everyday. We are the leading tech company whose aim to increase the problem solving ability in children.
    </p>
    </div>
    </div>
    <div className="home3" id='about'>
        <div>
            <h1>Who are we?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum incidunt rem consequuntur modi unde explicabo nihil. Harum voluptate quos laborum maiores fugiat consequatur non dignissimos. Illo modi nesciunt voluptate voluptatem quasi dignissimos veritatis itaque! Consequatur molestias nulla, expedita eum aliquid consectetur et voluptates asperiores cum a vel ipsa ut neque.</p>
        </div>
    </div>
        {/* <div className="home4">
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{animationDelay:"0.3s",}}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                    </div>
                    <div style={{animationDelay:"0.5s",}}>
                        <AiFillAmazonCircle/>
                        <p>Amazon</p>
                    </div>
                    <div style={{animationDelay:"0.7s",}}>
                        <AiFillYoutube/>
                        <p>Youtube</p>
                    </div>
                    <div style={{animationDelay:"0.9s",}}>
                        <AiFillInstagram/>
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
  </div> */}
    </>
  );
};

export default Home
