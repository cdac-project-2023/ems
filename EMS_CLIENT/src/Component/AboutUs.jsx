import eventicon from './images/event1.jpg'
// import eventicon from '../images/event1.png';
import abouticon from './images/title_right.jpg';

function AboutUs(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                    <div className="img-responsive">
                        <img src={eventicon} alt="about Us" />
                    </div>
                </div>

                <div className="col-xl-6">
                    <div className="ps-xl-4">
                        <div className="title-area mb-35">
                            <div>
                                <h3 className='fst-italic' >About Us
                                    <img src={abouticon} alt=""
                                    style={{marginLeft:'20px'}} />
                                </h3>
                               <blockquote className='blockquote'>
                                <p>
                                EMS can be your one-stop Event Management Provider for Corporate Events & Individual Event. We offer comprehensive corporate event management and creative services.
                                </p>
                                <p>
                                If you looking for a top Event Management Company in India, then no need to look further then EMS Offer Events and Weddings Planner Services. Get the best team of event managers for organising your event through EMS.
                                </p>
                                <hr className='style1' />


                               </blockquote>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
        
    );
}
export default AboutUs