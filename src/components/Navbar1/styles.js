import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import languageIcon from "../../assets/images/language.png"

export const Navbar1 = styled(Navbar)`
    padding: 0px !important;
	background-color: #e5e5e5;
	color: #213b73 !important;

	.language-toggle {
		background: (${languageIcon}) no-repeat left center;
		background-size: 12px 11px!important;

		.btn {
			border-radius: 0 !important;
			background-color: transparent !important;
			color: #213b73 !important;
			border: none !important;
			font-size: 10px !important;
			animation: none !important;
		}
		.dropdown-toggle {
			margin-left: 4px;
			font-weight: 400;
		}
		.dropdown-toggle:focus {
			box-shadow: none !important;
		}
		.dropdown-menu{
			top: calc(100% + .25rem);
			background-color: white;
			padding: .75rem;
			border-radius: 0;
			box-shadow: 0 2px 5px 0 rgba($color: #000000, $alpha: .1);
		}

		.dropdown-item {
			font-size: 10px;
			color: #213b73;
			font-weight: 700;
		}
	}

	.navigation-menu{
		.nav-link {
			font-size: 10px;
			font-weight: 400;
			color: #213b73 !important;
			margin-right: 20px;
			
		}
	}

`;