import React from "react";
import heroLeft from "../../assets/images/hero-left.svg";
import heroRight from "../../assets/images/hero-right.svg";
import bolotonaHero from "../../assets/images/bolotona-hero.svg";
import { Hero, HeroText } from "./styles.js"


export function MyHero() {
	return (
		<>
		    <Hero>
				<div className="hero-core" style={{backgroundImage: `url(${heroLeft}), url(${bolotonaHero}) ,url(${heroRight})`}}>
					<HeroText>Alugue um carro com a <br /> Alamo e Drive Happy®</HeroText>
				</div>
			</Hero>
		</>	
	);
}
