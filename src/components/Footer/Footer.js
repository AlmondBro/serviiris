import React from 'react';

//Import styled components
import { FooterStyled, FooterIrisWings, FontAwesomeIconStyled, FooterColumn, FooterColumnAddress, FooterLink } from './FooterStyledComponents.js';

//Import FontAwesome icon library
import { faEnvelope, faPhone, faComment, faMapMarked   } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
    return (
        <FooterStyled className="container-fluid" id="footer-container" >
            <div className="row">
                <FooterColumn className="col-md-4 footer-col" id="footer-col-1" borderRight>
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
                <FooterColumn className="col-md-4 footer-col" id="footer-col-2" borderRight>
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
                <FooterColumn 
                    className   =   "col-md-4 footer-col" 
                    id          =   "footer-col-3" 
                    fontSize    =   "2.5em"
                    flexRow    
                    socialMediaColumn
                > 
                    <FooterLink href="#" className="extra-mobile-icons"> 
                        <FontAwesomeIconStyled 
                            icon    = { faPhone }  
                            color           =   "white"
                            backgroundColor =   "transparent"
                            padding         =   "0px"
                            borderRadius    =   "25px"
                        />
                    </FooterLink>
                    <FooterLink href="#" className="extra-mobile-icons"> 
                        <FontAwesomeIconStyled 
                            icon    = { faEnvelope }  
                            color           =   "white"
                            backgroundColor =   "transparent"
                            padding         =   "0px"
                            borderRadius    =   "25px"
                        />
                    </FooterLink>
                    <FooterLink href="#" id="footer-link-whatsapp"> 
                        <FontAwesomeIconStyled 
                            icon            =   { faWhatsapp } 
                            color           =   "white"
                            backgroundColor =   "transparent"
                            padding         =   "0px"
                            borderRadius    =   "25px"

                        />   
                    </FooterLink>
                    <FooterLink href="#"> 
                        <FontAwesomeIconStyled 
                            icon            =   { faFacebook } 
                            color           =   "white"
                            backgroundColor =   "transparent"
                            padding         =   "0px"
                            borderRadius    =   "25px"
                        />   
                    </FooterLink>
                    <FooterLink href="#"> 
                        <FontAwesomeIconStyled 
                            icon    = { faInstagram }  
                            color           =   "white"
                            backgroundColor =   "transparent"
                            padding         =   "0px"
                            borderRadius    =   "25px"
                        />
                    </FooterLink>
                    <FooterLink href="#" className="extra-mobile-icons"> 
                        <FontAwesomeIconStyled 
                            icon    = { faComment }  
                            color           =   "white"
                            backgroundColor =   "transparent"
                            padding         =   "0px"
                            borderRadius    =   "25px"
                        />
                    </FooterLink>
                </FooterColumn>
            </div>
        </FooterStyled>
    ); //end return statement

}; //end Footer

export default Footer;