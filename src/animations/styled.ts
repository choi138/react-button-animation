import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #282c34;
    color: white;
    // child effect-container class
     .effect-container {
        position: relative;
        overflow: hidden;
        --effect-name: ripple;
        --effect-duration: 1000ms;
        --effect-top: 0px;
        --effect-left: 0px;
        --effect-height: 100px;
        --effect-width: 100px;
        --effect-color: #fff;
    }
     .effect-container::before{
        content: "";
        position: absolute;
        opacity: 0.3;
        top: var(--effect-top);
        left: var(--effect-left);
        height: var(--effect-height);
        width: var(--effect-width);
        border-radius: 50%;
        transform: scale(0);
        background: var(--effect-color);
    }
     .effect-container.active::before{
        border-radius: 50%;
        animation: ripple var(--effect-duration) linear forwards;
    }

    @keyframes ripple {
        from {
        transform: scale(0);

        } to {
            transform: scale(6);
            opacity: 0;
        }
    }
`;

export const Title = styled.h1`
    font-size: 48px;
`;

export const ButtonDiv = styled.div`
    display: block;
    width: 200px;
    border-radius: 40px;
    margin: 50px auto;
`;

export const Button = styled.button`
    display: block;
    cursor: pointer;
    width: 200px;
    border-radius: 40px;
    border: none;
    padding: 20px;
    font-size: 35px;
    background-color: #4CAF50;
    color: white;
    overflow: hidden;
    background: linear-gradient(
        90deg,
        #9383C5,
        #56E3FA
    );
`;