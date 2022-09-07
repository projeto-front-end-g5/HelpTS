import styled, { StyledComponent} from "styled-components";

export const Container = styled.div `

    width:  100%;
    height: 35rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    .box-top{
        width: 60%;
        min-height: 4.6rem;
        max-height: 6rem;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border: none;
        border-left: 5px solid var(--blue);
        border-right: 5px solid var(--blue);
        border-radius: 5px;
        background-color: var(--grey-card);
    }
    .first-top{
        width: 30%;
        display: flex;
        align-items: center;
    }
    div>div>svg{
        width: 12rem;
        height: 10rem;
    }
    .title{
        font-family: 'Ubuntu';
        font-weight: 700;
        color: var(--blue);
        font-size: 1.3rem;

    }
    .second-top{
        font-family: 'Ubuntu';
        font-weight: 500;
        color: var(--grey-dark);
        font-size: 0.8rem;
    }
    .Icon{
        font-size: 0.2rem;
    }

    .box-bottom{
        width: 60%;
        height: 30rem;
        min-height:21.87rem;
        margin-top: 0.3rem;
        border: solid var(--blue) 0.15rem;
        border-radius: 5px;
        background-color: var(--grey-card);
    }
    
    .solution-box{
        border: 0.063rem solid var(--blue);
        width: 88%;
        min-height: 11rem ;
        >h1{
            font-family: 'Tajawal';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            color: var(--blue);
        }
    }

    .solution-code{
        border: 0.063rem solid var(--yellow);
        background-color: var(--grey-dark);
        width: 88%;
        min-height: 11rem ;
        >h1{
            font-family: 'Tajawal';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            color: var(--white);
        }
    }
    .second-title{
        font-family: 'Ubuntu';
        font-weight: 700;
        color: var(--blue);
        font-size: 1.2rem;
    }

    .likes{
        color:var(--grey-dark) ;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 500;
        font-size: 0.8rem;
    }
    .github{
        color:var(--grey-dark) ;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 500;
        font-size: 0.9rem;
    }



`

