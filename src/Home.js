import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      videos: []
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:4000/collections');
      const data = await response.json();
      this.setState({ videos: [...data] });
    } catch (error) {
      console.log("error",error);
    }
  }

  render() {
    return (
      <div className="App-header">
        <Header />
        <div className="">
          <div className="row">
              <div className="col-md-12" style={{height : 400}}>
                <Link to="/">
                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={`http://localhost:4000/video/3/poster`} className="d-block w-100" style={{height:400}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={`http://localhost:4000/video/2/poster`} className="d-block w-100" style={{height:400}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={`http://localhost:4000/video/1/poster`} className="d-block w-100" style={{height:400}} alt="..." />
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </Link>
              </div>
          </div>
        </div>
        <div className="container" style={{marginTop: 100}}>
          <div className="row">
            {this.state.videos.map(video =>
              <div className="col-md-4" key={`id${Math.random()}${video.id}`}>
                <Link to={`/player/${video.id}`}>
                  <div className="card border-0">
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
        </div>
        <Footer />
      </div>
    )
  }
}
