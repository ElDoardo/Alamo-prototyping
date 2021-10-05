import React from "react";
import { Container } from "react-bootstrap";
import { PrimaryButton } from "./styles.js"

export function MyButton(){

    return(
        <>
            <Container className="mt-3">
                <PrimaryButton>
                    <Container>Go</Container>
                </PrimaryButton>
            </Container>
        </>
    )
}