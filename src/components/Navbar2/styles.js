import styled from "styled-components";

import { Navbar } from "react-bootstrap";

export const Navbar2 = styled(Navbar)` 
 align-items: flex-end !important;
    .navbar-brand{
        >img{
            width: 90px;
        }
    }

    .navigation-menu{
        margin-right: 30px;
    }

    .nav-link{
        font-size: 12px !important;
        font-weight: 700;
        color: #213b73 !important;
        margin-left: 20px;
    }

    .dropdown-item {
        font-size: 10px;
        color: #213b73;
        font-weight: 400;
    }

    .login-insiders{
        background: url(../../assets/images/user.png) no-repeat left center;
        background-size: 12px 11px!important;       
    }
`;