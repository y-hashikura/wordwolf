import React from 'react';
import { Container } from 'react-bootstrap';

export const ContainerCenter = ({children}) => {
    return (
        <Container className="d-flex flex-column text-center align-items-center" style={{ maxWidth: '400px', marginTop: '50px'}}>
            <div style={{width: '100%'}}>
                {children}
            </div>
        </Container>
    )
}