import React from 'react';

import { SpecialtiesPageContainer, SpecialitesSection, SpecialitesSectionRow, SpecialtiesArticleColumn, } from './Specialties_StyledComponents.js';

import serviceColumnsJSON from './services-data.json';

const Specialties = (props) => {

    const generateSpecialtiesColumns  = (jsonFile) => {
        const serviceColumnsObjectArray = jsonFile;
        
        return serviceColumnsObjectArray["serviceColumns"].map( (serviceColumn, index) => {
            return  (   
                        <SpecialtiesArticleColumn
                            id          =   { serviceColumn.id }
                            imageAlt    =   { serviceColumn.imageAlt }
                            image       =   { serviceColumn.image }
                            buttonTitle =   { serviceColumn.buttonTitle }
                            title       =   { serviceColumn.title }
                            description =   { serviceColumn.description }
                            Key         =   { index }
                        />
                    ); //end inner return statement
        }); //end forEach()
    }; //end generateSpecialtiesColumns()

    return (
        <SpecialtiesPageContainer id="row no-gutters specialties-page-container">
            <SpecialitesSection className="col-12 specialties-section" id="specialties-section">
                <SpecialitesSectionRow className="row no-gutters">
                    {
                        // Generate the service columns
                        generateSpecialtiesColumns(serviceColumnsJSON)
                    }
                </SpecialitesSectionRow>
            </SpecialitesSection>
            
        </SpecialtiesPageContainer>
    );  //end return statement
}; //end Conocenos() component

export default Specialties;