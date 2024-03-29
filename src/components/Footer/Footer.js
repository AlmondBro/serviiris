import React from 'react';

//Import styled components
import { FooterStyled, FooterIrisWings, FontAwesomeIconStyled, FooterColumn, FooterColumnAddress, FooterLink, CopyRightSection, CopyRightText, SocialMediaLinksContainer } from './FooterStyledComponents.js';

import { isMobileBrowser } from './../../utilities/utility-functions.js';

//Import FontAwesome icon library
import { faEnvelope, faPhone, faComment, faMapMarked   } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';




const Footer = (props) => {
    let mobileBrowser = isMobileBrowser();
    
    return (
        <FooterStyled className="container-fluid" id="footer-container" >
            <div className="row">
                <FooterColumn className="col-6 col-sm-6 col-md-4 footer-col" id="footer-col-1" borderRight>
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
                                // color   =   "#FFF308"
                            />
                        </div>

                        <FooterColumnAddress 
                            className="col-md-9" 
                            id="footer-address"  
                        >  
                        {/* https://goo.gl/maps/9qHmUKrdbDrU42NJ6 */}
                            <FooterLink  
                                target="blank_"
                                href =   {

                                    mobileBrowser ? 
                                        "https://www.waze.com/ul?ll=3.43611970%2C-76.54039180&navigate=yes"
                                    :   "https://goo.gl/maps/9qHmUKrdbDrU42NJ6"
                                }
                                id  =   "footer-direction"
                            >
                                    <FontAwesomeIconStyled icon={faMapMarked}/>
                                    <span id="small-padding">Carerra 24c #4-54 </span>
                                    <span>Cali, Valle del Cauca</span>
                                    <span>Colombia</span>
                            </FooterLink>
                            <FooterLink  
                                href            =   "mailto:iristeamco@gmail.com"
                                id              =   "footer-email"
                                spanPaddingLeft =   "8px"
                            >
                                    <FontAwesomeIconStyled icon={faEnvelope}/>
                                    <span>iristeamco@gmail.com</span>
                            </FooterLink>
                            <FooterLink  
                                href    =   "https://wa.link/aloo0e"
                                id      =   "footer-phone">

                            </FooterLink>
                        </FooterColumnAddress>
                    </div>
                </FooterColumn>
                <FooterColumn className="col-6 col-sm-6 col-md-4 footer-col" id="footer-col-2" borderRight>
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
                    className   =   "col-xs-12 col-md-4 footer-col" 
                    id          =   "footer-col-3" 
                    fontSize    =   "2.5em"
                    flexRow    
                    socialMediaColumn 
                > 
                    {/* <SocialMediaLinksContainer> */}
                    <FooterLink target="_blank"  href="https://wa.link/aloo0e" className="extra-mobile-icons" id="footer-link-phone"> 
                        <FontAwesomeIconStyled 
                            icon    = { faPhone }  
                            color           =   "white"
                            backgroundColor =   "transparent"
                            padding         =   "0px"
                            borderRadius    =   "25px"

                            flip            =   "horizontal"
                        />
                    </FooterLink>
                    <FooterLink target="_blank" href="mailto:iristeamco@gmail.com" className="extra-mobile-icons" id="footer-link-mail"> 
                        <FontAwesomeIconStyled 
                            icon    = { faEnvelope }  
                            color           =   "white"
                            backgroundColor =   "transparent"
                            padding         =   "0px"
                            borderRadius    =   "25px"
                        />
                    </FooterLink>
                    <FooterLink target="_blank" href="https://wa.link/aloo0e" id="footer-link-whatsapp"> 
                        <FontAwesomeIconStyled 
                            icon            =   { faWhatsapp } 
                            color           =   "white"
                            backgroundColor =   "transparent"
                            padding         =   "0px"
                            borderRadius    =   "25px"
                        />   
                    </FooterLink>
                    <FooterLink target="_blank" href="https://www.facebook.com/Iris-team-110184504117886/" id="footer-link-facebook"> 
                        <FontAwesomeIconStyled 
                            icon            =   { faFacebook } 
                            color           =   "white"
                            backgroundColor =   "transparent"
                            padding         =   "0px"
                            borderRadius    =   "25px"
                        />   
                    </FooterLink>
                    <FooterLink target="_blank" href="https://www.instagram.com/iristeam.co/?hl=es-la" id="footer-link-instagram"> 
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