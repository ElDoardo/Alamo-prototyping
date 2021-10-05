import styled from "styled-components";
import {Row, Col } from "react-bootstrap";

export const Footer = styled(Col)`
    font-family: "Poppins", sans-serif;
    margin-left: 50px !important;
`

export const FooterContent = styled(Row)`
    h4 {
        color: #596c95;
        font-size: 10px;
        font-weight: 700;
    }

    ul {
        li {
            list-style: none;
        }
    }

    a {
        text-decoration: none;
        color: #8c4c9e;
        font-size: 10px;
    }

    a::after {
        content: "›";
        font-weight: 700;
        margin-left: 5px;
    }
`;