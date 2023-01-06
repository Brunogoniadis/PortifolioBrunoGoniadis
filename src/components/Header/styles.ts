import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 8%;
    
	position: fixed;
    top: 0;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-left:10%;
    padding-right: 10%;

    background-color: var(--color-primary);
    border-bottom: 1px solid var(--color-border);

    z-index: 1001;
    .descriptionPages{
        display: flex;
        
        flex-direction: row;

        gap: 0.5rem;
    }

`