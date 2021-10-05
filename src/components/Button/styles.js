import styled from "styled-components";
import {Button} from "react-bootstrap";

export const StyledButton = styled(Button)`
    border: none;
    border-radius: 0;
    font-weight: 700;
    transition: none;
`;

export const YellowButton = styled(StyledButton)`
    background-color: #fef100;
    color: #213b73;
`;

export const VioletButton = styled(StyledButton)`
    background-color: #fef100;
    color: #ffffff;
`;
