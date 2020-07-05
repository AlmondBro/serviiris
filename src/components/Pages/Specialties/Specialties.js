import React from 'react';

import { SpecialtiesPageContainer, SpecialitesSection, SpecialitesSectionRow, SpecialtiesArticleColumn, } from './Specialties_StyledComponents.js';

const Specialties = (props) => {
    return (
        <SpecialtiesPageContainer id="row no-gutters specialties-page-container">
            <SpecialitesSection className="col-12 specialties-section" id="specialties-section">
                <SpecialitesSectionRow className="row no-gutters">
                    <SpecialtiesArticleColumn/>
                    <SpecialtiesArticleColumn/>
                    <SpecialtiesArticleColumn/>
                    <SpecialtiesArticleColumn/>
                    
                </SpecialitesSectionRow>
            </SpecialitesSection>
            
        </SpecialtiesPageContainer>
    );  //end return statement
}; //end Conocenos() component

export default Specialties;