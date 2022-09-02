import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    height: fit-content;
    background-color: var(--grey-card);
    margin-top: .9375rem;
    border-radius: .375rem;
    border: .125rem solid var(--blue);
    /* box-shadow: 0 0 .25rem .125rem hsl(242deg 59% 11% / 10%); */
    font-family: 'Tajawal';
    padding: .75rem;

    .cardComment--content{
        font-size: .875rem;
        border: .0625rem solid var(--blue);
        border-radius: .5625rem;
        margin-top: .625rem;
        height: fit-content;
        padding: .5rem;
    }
`

export const ContainerCommentTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
            font-weight: 300;
            font-size: 14px;
        }

    .cardComment--name{
        display: flex;
        gap: .9375rem;
        align-items: center;

        strong{
            background: red;
            color: white;
            border-radius: 100%;
            width: 1.5625rem;
            height: 1.5625rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Ubuntu'
        }

        p {
            color: var(--blue);
            font-weight: 700;
        }
    }
`
