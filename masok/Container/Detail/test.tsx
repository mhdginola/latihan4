import st from './Detail.module.css';

export default function Detail2(){
    return(        
            <div className={st.container}>                
                    <div className="product-page">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                        <div className="product-main-image">
                            <img src="assets/pages/img/products/cctv-deon-2.jpg" alt="Cool green dress with red bell" className="img-responsive" data-BigImgsrc="assets/pages/img/products/cctv-deon-2.jpg"/>
                        </div>
                        <div className="product-other-images">
                            <a href="assets/pages/img/products/deon.png" className="fancybox-button" rel="photos-lib"><img alt="Berry Lace Dress" src="assets/pages/img/products/deon.png"/></a>
                            <a href="assets/pages/img/products/deon.png" className="fancybox-button" rel="photos-lib"><img alt="Berry Lace Dress" src="assets/pages/img/products/deon.png"/></a>
                            <a href="assets/pages/img/products/deon.png" className="fancybox-button" rel="photos-lib"><img alt="Berry Lace Dress" src="assets/pages/img/products/deon.png"/></a>
                        </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                        <h1>Smart Indoor Static Cam</h1>
                        <div className="price-availability-block clearfix">	
                            <div className="availability">
                            Availability: <strong>In Stock</strong>
                            </div>
                        </div>
                        <div className="description">
                            <p>SPECS</p>
                                        <span className="lnr lnr-camera"></span>
                                        <a href="#"><h4>Camera</h4></a>
                                        <p>
                                        Image Sensor :1/3" 2Megapixel CMOS Effective Pixels :1920 (H) x 1080 (V) Shutter :1/15~1/10.000s Min. Illuminance :Color 0.1Lux@F2.0 Black/White 0.01 Lux@F2.0 
                                        IR Distance :Night Visibility up to 10m Day / Night :Auto (ICR)/Color/B/W WDR :DWDR Lens :3.6mm@F2.0, 100°
                                        </p>
                                    </div>
                                    <div className="single-course">
                                        <span className="lnr lnr-cog"></span>
                                        <a href="#"><h4>General</h4></a>
                                        <p>
                                            Operating Temperature :-20° to 50° C Power Supply : DC 5V/1A Consumption :4.5 W max. Adjust Angle :Tilt 0~60°/Pan:0~355°
                                        Storage :SD Card (Max. 128GB),Cloud Storage, NVR Dimensions :76x76x124 mm Net Weight :200gr
                                        </p>
                                    </div>							
                                </div>
                                <div className="col-lg-3 course-right">
                                    <div className="single-course">
                                        <span className="lnr lnr-apartment"></span>
                                        <a href="#"><h4>Network</h4></a>
                                        <p>
                                            Alarm Trigger :AI Motion Detection,Crying Detection Communication Protocol :HTTP,DHCP,DNS,TCP/IP,RTSP Interface Protocol :Private Wireless :2.4G WiFi(IEEE802.11 b/g/n) Supported Mobile Phone OS :iOS 9 or above,Android 5.0 or above
                                        Security :AES128
                                        </p>
                                    </div>
                                    <div className="single-course">
                                        <span className="lnr lnr-phone"></span>
                                        <a href="#"><h4>Video & Audio</h4></a>
                                        <p>
                                            Compression :H264 Bit Rate :32Kbps~2Mbps Audio Input/Output :Built-in Mic/Speaker Frame Rate :1~25Hz
                                        </p>
                                    </div>				
                        </div>
                        </div>
                    </div>                
            </div>        
    )
}