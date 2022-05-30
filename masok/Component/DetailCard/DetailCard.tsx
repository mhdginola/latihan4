// import Image from 'next/image';
import st from './DetailCard.module.css';

const DetailCard =(props:any)=>{    
    return(        
        <div className={st.container}>                                    
            <div className={st.imgdet}>
                <div className={st.mainImg}>
                    <img className={st.picg} src={props.thumb} alt="Cool green dress with red bell"/>
                    {/* <Image 
                        src={props.thumb}
                        width={300}
                        height={300}
                        alt='img'                        
                    /> */}
                </div>
                <div className={st.bellImg}>
                    <img className={st.picgb} alt="Berry Lace Dress" src={props.thumb}/>
                    <img className={st.picgb} alt="Berry Lace Dress" src={props.thumb}/>
                    <img className={st.picgb} alt="Berry Lace Dress" src={props.thumb}/>
                </div>                
            </div>                            
            <div className={st.descdet}>
                <h1>{props.product_name}</h1>
                <div className="description">
                    <hr />
                    <p>SPECS</p>       
                    <h4 className={st.blo}>General</h4>                                         
                    <p>
                        Image Sensor :1/3" 2Megapixel CMOS Effective Pixels :1920 (H) x 1080 (V) Shutter :1/15~1/10.000s Min. Illuminance :Color 0.1Lux@F2.0 Black/White 0.01 Lux@F2.0 
                        IR Distance :Night Visibility up to 10m Day / Night :Auto (ICR)/Color/B/W WDR :DWDR Lens :3.6mm@F2.0, 100°
                    </p>
                    <h4 className={st.blo}>General</h4>
                    <p>
                        Operating Temperature :-20° to 50° C Power Supply : DC 5V/1A Consumption :4.5 W max. Adjust Angle :Tilt 0~60°/Pan:0~355°
                        Storage :SD Card (Max. 128GB),Cloud Storage, NVR Dimensions :76x76x124 mm Net Weight :200gr
                    </p>
                    <h4 className={st.blo}>Network</h4>
                    <p>
                        Alarm Trigger :AI Motion Detection,Crying Detection Communication Protocol :HTTP,DHCP,DNS,TCP/IP,RTSP Interface Protocol :Private Wireless :2.4G WiFi(IEEE802.11 b/g/n) Supported Mobile Phone OS :iOS 9 or above,Android 5.0 or above
                        Security :AES128
                    </p>                            
                    <h4 className={st.blo}>Video & Audio</h4>
                    <p>
                        Compression :H264 Bit Rate :32Kbps~2Mbps Audio Input/Output :Built-in Mic/Speaker Frame Rate :1~25Hz
                    </p>                                                
                </div>
            </div>               
        </div>        
    )
}

export default DetailCard;