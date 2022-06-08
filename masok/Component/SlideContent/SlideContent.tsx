import Image from "next/image";
import st from './SlideContent.module.css';

export default function SlideContent(){
    return(
        <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5000">
                {/* <img src="/images/bgb2.jpg" className="d-block w-100" alt="..."/> */}
                    <div className={st.ccgg}>
                        <Image src="/images/Artboard1.png" layout="fill" alt="back" objectFit="cover" quality={75} priority/>     
                    </div>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Lighting</h5>
                    <p>a smarter way of living</p>
                </div>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                {/* <img src="/images/bgb2.jpg" className="d-block w-100" alt="..."/> */}
                    <div className={st.ccgg}>
                        <Image src="/images/Artboard2.png" layout="fill" alt="back" objectFit="cover" quality={75} priority/>     
                    </div>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Electrical</h5>
                    <p>a smarter way of living</p>
                </div>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                {/* <img src="/images/bgb2.jpg" className="d-block w-100" alt="..."/> */}
                    <div className={st.ccgg}>
                        <Image src="/images/Artboard3.jpg" layout="fill" alt="back" objectFit="cover" quality={75} priority/>     
                    </div>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Security</h5>
                    <p>a smarter way of living</p>
                </div>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                {/* <img src="/images/bgb2.jpg" className="d-block w-100" alt="..."/> */}
                    <div className={st.ccgg}>
                        <Image src="/images/Artboard4.jpg" layout="fill" alt="back" objectFit="cover" quality={75} priority/>     
                    </div>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Smart Home</h5>
                    <p>a smarter way of living</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
                    {/* <div className="d-block w-100">
                        <Image src="/images/bgb2.jpg" width={100} height={100} className="d-block w-100" alt="back"/>     
                    </div> */}
        </div>
    )
}