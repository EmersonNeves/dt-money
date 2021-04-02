import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #f0f2f5;
    --shape: #fff;

    --red: #e52410;
    --green: #33dd95;
    --blue: #011499;
    --dark-green:#1e9965;
    --white: #fff;
    --grey: #969ca0;

    --blue-light: #2145FF;

    --text-title: #363F5F;
    --text-body: #969cb3; 
    --border: #d7d7d7;

    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%
        }
        @media (max-width: 720px){
            font-size: 87.5%
        }
    }
    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    bottom, p, input, textarea, button, td{
        font-family: "Poppins", sans-serif;
        font-weight:400;
    }

    h1, h2, h3, h4, h5, strong{
        font-family: "Poppins", sans-serif;
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        flex-direction: center;
        justify-content: center;

    }

    .react-modal-content{
        width: 100%;
        max-width: 487px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 1rem;
        max-height: 500px;
        top: 8rem;  
    }

    .react-modal-close{
        position: absolute;
        right: 2.8rem;
        top: 1.4rem;
        border: 0;
        background: transparent;
        transition: 0.9s;
        
        &:hover{
            filter: brightness(0.5);
        }
    }
`;
