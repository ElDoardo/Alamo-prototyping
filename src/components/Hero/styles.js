import styled from "styled-components";


export const Hero = styled.div`
    background-color: #5ab7e8;
    .hero-core{
        display: flex;
        justify-content: center;
        align-items: center;
        background: no-repeat left bottom, no-repeat center bottom, no-repeat right bottom;
        background-size: 20%, 90%, 20%;
        height: 270px;
    }

    @media(max-width: 576px){
        .hero-core{
            height: 91px;
        }
    }

    @media(max-width: 768px) and (min-width: 576px){
        .hero-core{
            height: 150.8px;
        }
    }

`;

export const HeroText = styled.h1`
    font-family: "Poppins", sans-serif;
    font-size: 52px;
    font-weight: 700;
    color: #213B73;
    text-align: center;

    @media(max-width: 576px){
        font-size: 22px;
    }

    @media(max-width: 768px) and (min-width: 576px){
        font-size: 36px;
    }
`;