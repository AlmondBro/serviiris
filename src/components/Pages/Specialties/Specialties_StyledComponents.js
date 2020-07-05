import styled from 'styled-components';

/* 
    .bg-iris-yellow {
        background-color: #FFF308;
    }

    .bg-iris-purple {
        background-color: #5425BA;
    }
*/

const SpecialtiesPageContainer = styled('section')`
    min-height: 100%;
    min-width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: auto; /* Align everything in the center */

    & > * {
        flex-grow: 1;
    }

    @media only screen and (min-width: 765px) and (max-width: 768px) {
        margin-top: 30px;
    }
`; //end homepagecontainer

const SpecialitesSection = styled('section')`
    position: relative;
    z-index: 0;
    background: #FFF308;

    margin-bottom: 3px;

    ::after {
        content: "";

        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        z-index: 0;
  
        background-image: none;
        /* url("./assets/img/nyc-grey.webp"); */
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        opacity: 0.1;
        max-width: 100%;
        min-height: 100%;
        overflow-y: hidden;
        width: 100%;

        margin: 0 auto;
      
    }
`;

const SpecialitesSectionRow = styled('div')`
    position: auto;
    min-width: 100%;

    margin: auto;
    
    display: flex;
    flex-direction: row;
    justify-content: center;

`;
const SpecialtiesArticle = styled('article')`
    position:  relative;
    z-index: 1;
    

    margin: 1% 0.4%;
    margin-bottom: 5px;
    padding: 3% 1%;

    background-color: white;
    /* rgba(84,37,186,1); */

    border-radius: 12px;

    color: white;

    h3 {
        color: black;

        text-align: center;

        margin: 0;
        margin-bottom: 15px;
        padding: 0;

        font-weight:  bold;
    }

    p {
        font-size: 1.1em;
        padding: 0% 20%;
    }        
`;

const SpecialtiesArticleButton = styled('button')`
    /* color: white; */
    background-color: #5425BA;
    border: 0;
    border-radius: 12px;

    max-width: 150px;

    padding: 5px 15px;
    margin: 0 auto;

    border: 1px solid #5425BA;

    transition: color 500ms, background-color 500ms, border-color 500ms;

    :hover, :active, :visited {
        /* color: #5425BA; */
        background-color: white;

        border: 1px solid #5425BA;
    } 
    a {
        color: white;
        text-decoration: none;

        transition: color 500ms, background-color 500ms, border-color 500ms;

    }

    a:hover {
        color: #5425BA;
    }
`;
 
export { SpecialtiesPageContainer, SpecialitesSection, SpecialitesSectionRow, SpecialtiesArticle, SpecialtiesArticleButton };