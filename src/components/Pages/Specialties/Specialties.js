import React from 'react';

import { SpecialtiesPageContainer, SpecialitesSection, SpecialitesSectionRow, SpecialtiesArticle, SpecialtiesArticleButton  } from './Specialties_StyledComponents.js';

const Specialties = (props) => {
    return (
        <SpecialtiesPageContainer id="row no-gutters specialties-page-container">
            <SpecialitesSection className="col-md-12 specialties-section" id="specialties-section">
                <SpecialitesSectionRow className="row no-gutters">
                <SpecialtiesArticle className="col" id="specialties-article">
                    <SpecialtiesArticleButton>
                        Mensajería Empresarial
                    </SpecialtiesArticleButton>
                    <h3>Trámites empresariales</h3>
                    <p> 
                        Consignaciones bancarias, radicación de facturas, comprobantes, 
                        entregas de paquetes y más.
                    </p>
                </SpecialtiesArticle>
                <SpecialtiesArticle className="col" id="specialties-article">
                    <SpecialtiesArticleButton>
                        Mensajería Empresarial
                    </SpecialtiesArticleButton>
                    <h3>Trámites empresariales</h3>
                    <p> 
                        Consignaciones bancarias, radicación de facturas, comprobantes, 
                        entregas de paquetes y más.
                    </p>
                </SpecialtiesArticle>
                <SpecialtiesArticle className="col" id="specialties-article">
                    <SpecialtiesArticleButton>
                        Mensajería Empresarial
                    </SpecialtiesArticleButton>
                    <h3>Trámites empresariales</h3>
                    <p> 
                        Consignaciones bancarias, radicación de facturas, comprobantes, 
                        entregas de paquetes y más.
                    </p>
                </SpecialtiesArticle>
                <SpecialtiesArticle className="col" id="specialties-article">
                    <SpecialtiesArticleButton>
                        Mensajería Empresarial
                    </SpecialtiesArticleButton>
                    <h3>Trámites empresariales</h3>
                    <p> 
                        Consignaciones bancarias, radicación de facturas, comprobantes, 
                        entregas de paquetes y más.
                    </p>
                </SpecialtiesArticle>
                </SpecialitesSectionRow>
            </SpecialitesSection>
            
        </SpecialtiesPageContainer>
    );  //end return statement
}; //end Conocenos() component

export default Specialties;