import React from 'react';

//Import styled components
import { FooterStyled, FooterIrisWings, FontAwesomeIconStyled, FooterColumn, FooterColumnAddress, FooterLink } from './FooterStyledComponents.js';

//Import FontAwesome icon library
import { faEnvelope, faMapMarked, faCameraRetro, faPhoneSquare  } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
    return (
        <FooterStyled className="container-fluid" id="footer-container" >
            <div className="row">
                <FooterColumn className="col" id="footer-col-1" borderRight>
                    <div className="row" id="footer-col1-row">
                        <div 
                            className="col-md-3" 
                            id="footer-col1-row-col1" 
                            borderRight
                        >
                            <FooterIrisWings
                                width   =   "178px"
                                height  =   "178px"
                            />
                        </div>

                        <FooterColumnAddress 
                            className="col-md-9" 
                            id="footer-address"  
                        >  
                            <FooterLink  
                                href =   "#"
                                id  =   "footer-direction"
                            >
                                    <FontAwesomeIconStyled icon={faMapMarked}/>
                                    <span id="small-padding">Carerra 24c #4-54 </span>
                                    <span>Cali, Valle del Cauca Colombia</span>
                            </FooterLink>
                            <FooterLink  
                                href =   "#"
                                id  =   "footer-direction"
                            >
                                    <FontAwesomeIconStyled icon={faEnvelope}/>
                                    iristeamco@gmail.com
                            </FooterLink>
                            <FooterLink  
                                href    =   "https://wa.link/aloo0e"
                                id      =   "footer-phone">

                            </FooterLink>
                        </FooterColumnAddress>
                    </div>
                </FooterColumn>
                <FooterColumn className="col" id="footer-col-2" borderRight>
                    <FooterLink href="/conocenos">
                        Conócenos
                    </FooterLink>
                    <FooterLink href="/servicios">
                        Servicios
                    </FooterLink>
                    <FooterLink href="/Contactanos">
                        Contáctanos
                    </FooterLink>
                </FooterColumn>
                <FooterColumn className="col" id="footer-col-3">
                    <FooterLink href="#"> 
                        <FontAwesomeIconStyled icon={faWhatsapp}/>   
                    </FooterLink>
                    <FooterLink href="#"> 
                        <FontAwesomeIconStyled icon={faFacebook}/>   
                    </FooterLink>
                    <FooterLink href="#"> 
                        <FontAwesomeIconStyled icon={faInstagram}/>
                    </FooterLink>
                </FooterColumn>
            </div>
           
        </FooterStyled>
    ); //end return statement

}; //end Footer

export default Footer;