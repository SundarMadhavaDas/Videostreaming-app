import * as React from 'react';
import './App.css';
import ReactPlayer from 'react-player';


function Player() {
  return (
    <>
      {/* <header className='header__section'>
        <p className='header__text'>Build a Video Player - Tutorial</p>
      </header> */}
      {/* <Container maxWidth="md"> */}
        <div className='playerDiv'>
              <ReactPlayer
                width={'100%'}
                height='100%'
                url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
                playing={true}
                  muted={true}
                  controls ={true}
              />
        </div>
      {/* </Container> */}
    </>
  );
}

export default Player;