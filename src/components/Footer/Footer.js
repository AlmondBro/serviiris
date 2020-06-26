import React from 'react';

//Import styled components
import { FooterStyled, FooterIrisWings } from './FooterStyledComponents.js';

const Footer = (props) => {
    return (
        <FooterStyled className="row footer-container">
            <div className="col" id="footer-col-1">
                <div className="row" id="footer-col1-row">
                    <div className="col" id="footer-col1-row-col1">
                        <FooterIrisWings
                            width   =   "178px"
                            height  =   "178px"
                        />
                    </div>

                    <address className="col" id="footer-address"> 
                        <a  href =   "#"
                            id  =   "footer-direction"
                        >
                            Carerra 24c #4-54 Cali, Valle del Cauca, Colombia
                        </a>
                        <a  href =   "mailto:iristeamco@gmail.com"
                            id  =   "footer-email"
                        >
                            iristeamco@gmail.com
                        </a>
                        <a  href    =   "https://wa.link/aloo0e"
                            id      =   "footer-phone">

                        </a>
                    </address>
                </div>
            </div>
            <div className="col" id="footer-col-2">
                Col 2
            </div>
            <div className="col" id="footer-col-3">
                Col 3
            </div>
        </FooterStyled>
    ); //end return statement

}; //end Footer

export default Footer;