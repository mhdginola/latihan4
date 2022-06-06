import Image from 'next/image';
import dataSpek from '../../Data/DataSpek/DataSpek';
import Spek from '../Spek/Spek';
import st from './DetailCard2.module.css';

const DetailCard2 =(props:any)=>{    
    let gt=props.thumb;
    const dtgg=dataSpek;                
    const it =dtgg[props.spg-1].map((item)=>
        <Spek
            key={item.id}
            sp={item.sp}
            dt={item.dt}
        />  
    )

    return(        
        <div className={st.container}>                                    
            <div className={st.imgdet}>
                <div>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button id="bght" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button id="bght" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button id="bght" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button id="bght" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="5000">
                            {/* <img src="/images/bgb2.jpg" className="d-block w-100" alt="..."/> */}
                                <div className={st.ccgg}>
                                    <Image src={props.thumb} layout="fill" alt="back" objectFit="contain" quality={75} priority/>     
                                </div>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                            {/* <img src="/images/bgb2.jpg" className="d-block w-100" alt="..."/> */}
                                <div className={st.ccgg}>
                                    <Image src={props.thumb1} layout="fill" alt="back" objectFit="contain" quality={75} priority/>     
                                </div>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                            {/* <img src="/images/bgb2.jpg" className="d-block w-100" alt="..."/> */}
                                <div className={st.ccgg}>
                                    <Image src={props.thumb2} layout="fill" alt="back" objectFit="contain" quality={75} priority/>     
                                </div>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                            {/* <img src="/images/bgb2.jpg" className="d-block w-100" alt="..."/> */}
                                <div className={st.ccgg}>
                                    <Image src={props.thumb3} layout="fill" alt="back" objectFit="contain" quality={75} priority/>     
                                </div>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>4 slide label</h5>
                                <p>Some representative placeholder content for the 4 slide.</p>
                            </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span id='mmssdd' aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 448 512">
                                    {/* <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --> */}
                                    <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" fill='#134A86'/></svg>
                            </span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span id='mmssdd' aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 448 512">
                                {/* <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --> */}
                                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" fill='#134A86'/></svg>
                            </span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                                {/* <div className="d-block w-100">
                                    <Image src="/images/bgb2.jpg" width={100} height={100} className="d-block w-100" alt="back"/>     
                                </div> */}
                    </div>
            </div>                            
            <div className={st.descdet}>
                <h1>{props.product_name}</h1>
                <div className="description">
                    <hr />
                    <h2>Specification</h2>
                    <table>
                        <tbody>
                            {it}
                        </tbody>                        
                    </table>                                                                        
                </div>
            </div>               
        </div>        
    )
}

export default DetailCard2;