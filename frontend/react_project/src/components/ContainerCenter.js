import React from 'react';
import { Container } from 'react-bootstrap';


export const ContainerCenter = ({children}) => {
    return (
        <Container className="text-center" style={{ maxWidth: '400px', marginTop: '50px' }}>
            {children}
        </Container>
    )
}