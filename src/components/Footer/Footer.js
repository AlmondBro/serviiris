import React from 'react';

//Import styled components
import { FooterStyled, FooterIrisWings, FontAwesomeIconStyled, FooterColumn, FooterColumnAddress, FooterLink, CopyRightSection, CopyRightText, SocialMediaLinksContainer } from './FooterStyledComponents.js';

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
                                id      =   "footer-iris-wings"
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
                    <CopyRightText id="copyright-text">
                        &copy; 2020 Iris
                    </CopyRightText>
                </FooterColumn>

                <FooterColumn 
                    className   =   "col-md-4 footer-col" 
                    id          =   "footer-col-3" 
                    fontSize    =   "2.5em"
                    flexRow    
                    socialMediaColumn
                > 
                    {/* <SocialMediaLinksContainer> */}
                    <FooterLink href="https://wa.link/aloo0e" className="extra-mobile-icons" id="footer-link-phone"> 
                        <FontAwesomeIconStyled 
                            icon    = { faPhone }  
                            color           =   "white"
                            backgroundColor =   "transparent"
                            padding         =   "0px"
                            borderRadius    =   "25px"

                            flip            =   "horizontal"
                        />
                    </FooterLink>
                    <FooterLink href="mailto:iristeamco@gmail.com" className="extra-mobile-icons" id="footer-link-mail"> 
                        <FontAwesomeIconStyled 
                            icon    = { faEnvelope }  
                            color           =   "white"
                            backgroundColor =   "transparent"
                            padding         =   "0px"
                            borderRadius    =   "25px"
                        />
                    </FooterLink>
                    <FooterLink href="https://wa.link/aloo0e" id="footer-link-whatsapp"> 
                        <FontAwesomeIconStyled 
                            icon            =   { faWhatsapp } 
                            color           =   "white"
                            backgroundColor =   "transparent"
                            padding         =   "0px"
                            borderRadius    =   "25px"
                        />   
                    </FooterLink>
                    <FooterLink href="https://www.facebook.com/Iris-Team-103434521342003/" id="footer-link-facebook"> 
                        <FontAwesomeIconStyled 
                            icon            =   { faFacebook } 
                            color           =   "white"
                            backgroundColor =   "transparent"
                            padding         =   "0px"
                            borderRadius    =   "25px"
                        />   
                    </FooterLink>
                    <FooterLink href="https://www.instagram.com/iristeam.co/?hl=es-la" id="footer-link-instagram"> 
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
                    {/* </SocialMediaLinksContainer> */}
                </FooterColumn>
            </div>
            {/* <CopyRightSection className="row" id="copyright-section">
                <div className="col-md-4 column-separators"></div>
                <div className="col-md-4 column-separators">
                    <CopyRightText id="copyright-text">
                        &copy; 2020 Iris
                    </CopyRightText>
                </div>
                <div className="col-md-4 column-separators"></div>
                
            </CopyRightSection> */}
        </FooterStyled>
    ); //end return statement

}; //end Footer

export default Footer;