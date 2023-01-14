import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
` 
export const Icon = styled.div`
    position: absolute;
    top:-90%;
    left: 88%;
    transform: translateY(-50%);
    z-index:1001;
`

export const Container = styled.div`
    
    div {
        height: 54px;
        
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
    
        color: black;

        margin-top: 2vh;
        input {
            width: 100%;
            height: 100%;
            padding: 20px;
            padding-right: 30px;
            border: 1.25px solid;
            display: flex;
            color: black;
            border-radius: 5px;
            border-color: var(--color-border);
        :focus{
            border: 2px solid var(--primary-color);
        }
        }
        label {
            display: flex;
            align-items: center;
            height: 100%;
    
            position: absolute;
            top: 0;
            padding-left: 20px;
            transition: top 0.5s, left 0.3s; 
        }
        input:is(:focus, :not(:placeholder-shown)) + label {
            top: -10px;
            left: 10px;
            
            height: fit-content;
            padding: 3px 10px;
            border-radius: 14px;
            background-color: var(--color-containerPages);
            color: var(--color-text);
            font-size: 12px;
            transition: 0.25s ;
        }
    
        input:focus ~ svg {
            color: var(--color-secondary);
        }
    
        svg {
            width: 18px;
            height: 18px;
            position: absolute;
            left: 20px;
            bottom: -5px
        }
    }
    
    p.error-input {
        margin-top: 2px;
        position: absolute;
        text-align: left;
        color: var(--error-color)
    }

    
`;