import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Home(){
  const Navigator = useNavigate();
  const navibar = () =>{
    Navigator("/booking")
  }
    return (
        <div>
        <div id="myCarousel" className="carousel slide container-fluid" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="bd-placeholder-img" width="100%" height="500" fill="#777" alt="" src="http://localhost:3000/Images/fest.jpg" aria-hidden="true" focusable="false"></img>

        <div className="container">
          <div className="carousel-caption text-start">
            <h1>Radiance Unveiled</h1>
            <p>A Spectacle of Elegance and Glamour</p>
            <p><a className="btn btn-lg btn-primary" href="##" onClick={navibar}>Book Event Now</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img className="bd-placeholder-img" width="100%" height="500" fill="#777" alt="" src="http://localhost:3000/Images/homeslide1.jpg" aria-hidden="true" focusable="false"></img>

        <div className="container">
          <div className="carousel-caption">
            <h1>Ring Ceremony</h1>
            <p>Eternalize your love with elegance at our enchanting ring ceremony event.</p>
            <p><a className="btn btn-lg btn-primary" href="##">Learn more</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img className="bd-placeholder-img" width="100%" height="500" fill="#777" alt="" src="http://localhost:3000/Images/bloodcamp.jpg" aria-hidden="true" focusable="false"></img>

        <div className="container">
          <div className="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p></p>
            {/* <p><a className="btn btn-lg btn-primary" href="##"></a></p> */}
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

  <div className="container marketing" style={{marginTop:50,marginBottom:50}}>

<div className="row">
  <div className="col-lg-4" style={{textAlign:"center"}}>
    <img className="bd-placeholder-img rounded-circle" width="140" height="140" alt="" src="http://localhost:3000/Images/catering.jpg" focusable="true"></img>

    <h2>Catering</h2>
    <p style={{textAlign:"justify"}}>Our catering service provides exquisite culinary experiences tailored to your unique preferences. From elegant weddings to corporate events, we offer a diverse menu selection, exceptional presentation, and impeccable service to ensure an unforgettable dining experience for you and your guests.</p>
    {/* <p><a className="btn btn-secondary" href="##">View details &raquo;</a></p> */}
  </div>
  <div className="col-lg-4" style={{textAlign:"center"}}>
    <img className="bd-placeholder-img rounded-circle" width="140" height="140" alt="" src="http://localhost:3000/Images/decor.jpg" focusable="true"></img>

    <h2>Decoration</h2>
    <p style={{textAlign:"justify"}}>Our event decoration service transforms any venue into a captivating and enchanting space. With meticulous attention to detail, creative designs, and a keen eye for aesthetics, we curate stunning decor elements that reflect your vision and create an ambiance that leaves a lasting impression on your guests.</p>
  </div>
  <div className="col-lg-4" style={{textAlign:"center"}}>
    <img className="bd-placeholder-img rounded-circle" width="140" height="140" alt="" src="http://localhost:3000/Images/organize.jpg" focusable="true"></img>

    <h2>Organization</h2>
    <p style={{textAlign:"justify"}}>Our event organization specializes in seamlessly orchestrating memorable occasions. With our extensive expertise, meticulous planning, and a network of trusted vendors, we handle every aspect, from venue selection to logistics, ensuring a flawless execution that surpasses your expectations and leaves you free to fully enjoy your event.</p>
  </div>
</div>
<hr className="featurette-divider"/>

<div className="row featurette" style={{marginTop:50}}>
  <div className="col-md-7">
    <h2 className="featurette-heading">Events <span className="text-muted"> It'll blow your mind.</span></h2>
    <p className="lead">Event organizers supervise the setup and aesthetics of the events they plan. They also manage the use of equipment, such as projector screens and sound systems. They find ways to keep the guests of the events engaged and entertained.1</p>
  </div>
  <div className="col-md-5">
    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="http://localhost:3000/Images/home2.webp" alt='error loading'/>

  </div>
</div>

<hr className="featurette-divider"/>

<div className="row featurette">
  <div className="col-md-7 order-md-2">
    <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
    <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
  </div>
  <div className="col-md-5 order-md-1">
  <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="http://localhost:3000/Images/home3.webp" alt='error loading'/>

  </div>
</div>

<hr className="featurette-divider"/>

<div className="row featurette">
  <div className="col-md-7">
    <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
    <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
  </div>
  <div className="col-md-5">
  <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="http://localhost:3000/Images/home1.webp" alt='error loading'/>

  </div>
</div>
</div>
        </div>
    )
}