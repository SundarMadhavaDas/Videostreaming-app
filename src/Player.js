import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default class Player extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoId: this.props.match.params.id,
      videoData: {},
      video: null,
      progress: '0%',
      playbackRate: 1,
      volume: 1,
      isMouseDown: false,
      videos : []
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(`http://localhost:4000/video/${this.state.videoId}/data`);
      const data = await res.json();
      this.setState({ videoData: data });
    } catch (error) {
      console.log(error);
    }
    try {
      const response = await fetch('http://localhost:4000/collections');
      const data = await response.json();
      this.setState({ videos: [...data] });
    } catch (error) {
      console.log("error",error);
     }
    
    let vP = document.getElementById("videoPlayer");
    this.enableAutoplay(vP);
  }

  enableAutoplay(vP) {
    vP.autoplay = true;
    vP.muted = false;
    vP.load();
  }

  vidplay() {
       const video = document.getElementById("videoPlayer");
       const button = document.getElementById("play");
       if (video.paused) {
          video.play();
          button.textContent = "||";
       } else {
          video.pause();
          button.textContent = ">";
       }
  }

  restart() {
      let vP = document.getElementById("videoPlayer");
      vP.currentTime = 0;
  }

  skip(forawd) {
    console.log(forawd)
    let video = document.getElementById("videoPlayer");
    video.currentTime += forawd;
  }
  
  updateVideoId(id) {
    this.setState({ ...this.state, videoId: id });
    const video = document.getElementById("videoPlayer");
    video.load();
  }

  render() {
    const { video, progress, playbackRate, volume } = this.state;
    return (
      <div className="row" style={{ marginTop: 80}}>
        {/* <Header /> */}
        <div className="col-md-8" style={{  marginLeft: 50, borderRadius : '500px', height: 300, width:300}}>
          <video id="videoPlayer" controls width="30" height="176" muted autoPlay crossOrigin="anonymous" webkit-playsinline="" style={{ borderRadius : 20}}>
          <source src={`http://localhost:4000/video/${this.state.videoId}`} type="video/mp4"></source>
          <track label="English" kind="captions" srcLang="en" src={`http://localhost:4000/video/${this.state.videoId}/caption`} default></track>
          </video>
            
          <div id="buttonbar">
            <button id="restart" onClick={(e) => this.restart()}>[]</button> 
            <button id="rew" onClick={ (e) =>this.skip(-10)}>&lt;&lt;</button>
            <button id="play" onClick={(e) => this.vidplay() }>&gt;</button>
            <button id="fastFwd" onClick={(e) => this.skip(10)}>&gt;&gt;</button>
          </div>
           <h4>{this.state.videoData.title}</h4>
        </div>
        <div className="col-md-3" style={{marginLeft: 20, maxHeight: '50rem', 'overflowY': 'scroll'}}>
        
          {this.state.videos.map(video =>
            <div className="col-sm-12" key={`id${Math.random()}${video.id}`}>
                <Link to={`/player/${video.id}`} >
                  <div className="card border-1" onClick={(e) => this.updateVideoId(video.id)}>
                    <img src={`http://localhost:4000/video/${video.id}/poster`} alt={video.title} />
                    <div className="card-body">
                      <p>{video.title}</p>
                      <p>{video.duration}</p>
                    </div>
                  </div>
                </Link>
              </div>
              )}
       
        </div>
       
        {/* <Footer /> */}
      </div>
    )
  }
}
