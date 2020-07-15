import React from 'react';

import { SpecialtiesPageContainer, SpecialtiesArticleColumn } from './Specialties_StyledComponents.js';

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
        <SpecialtiesPageContainer className="row no-gutters">
        {
            // Generate the service columns
            generateSpecialtiesColumns(serviceColumnsJSON)
        }
        </SpecialtiesPageContainer>
    );  //end return statement
}; //end Conocenos() component

export default Specialties;