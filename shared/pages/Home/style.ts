import styled from "@emotion/styled";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    height: 100vh;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 24px;
    max-width: 754px;
    gap:80px;
    `;

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 56px;
    `;

export const Logo = styled.img`
    width: 48px;
    height: 48px;
    `;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    `;

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 53px;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    border: 1px solid #64FFDA;
    &:hover {
        background-color: #64FFDA;
        color: #121212;
    /* animation-name: slideIn;
    animation-duration: 1s;
    animation: slideIn 1s infinite alternate; 
    }

    @keyframes slideIn {
    0% {
        opacity: 100%;
    }
    100% {
       opacity: 0;
    }
    } */
}
    `;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    gap: 40px;
    `;

export const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 800;
    line-height:150%;
    `;

export const Subtitle = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    line-height:150%;
    `;

export const Text = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height:300%;
    color: #b1b1b1;
    `;

export const ContactLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    `;

export const SocialMediaLinks = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    `;

export const SocialMediaButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 53px;
    height: 53px;
    background-color:transparent;
    cursor: pointer;
    &:hover {
    border: 1px solid #64FFDA;
    }
    `;

export const SocialMediaIcon = styled.img`
    width: 21px;
    height: 21px;
    `;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #b1b1b1;
    `;

export const TextImageBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    gap:40px;
    @media (max-width: 738px) {
        justify-content: center;}
    `;

export const TextSide = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height:300%;
    color: #b1b1b1;
    width: 100%;
    max-width: 347px;

    @media (max-width: 738px) {
        max-width:none;

    }
    `;

export const ImageBox = styled.div`
    display: flex;
    width: 304px;
    `;

export const ImageBackLine = styled.div`
display: block;
    width: 304px;
    height:304px;
    border:1px solid #64FFDA;
    margin-top: 16px;
    `;

export const ImageContainer = styled.div`
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 304px;
    height:304px;
    position: absolute;
    margin-left: -16px;
    `;

export const Image = styled.img`
    width: 500px;
    height:auto;
`;

export const CardBox = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap:17px;
    max-width: 100%;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 96px;
    border: 1px solid #b1b1b1;
    cursor: pointer;
    &:hover {
        transition: 0.3s;
        border: 1px solid #64FFDA;
        border-bottom:6px solid #64FFDA;
    }

    @media (max-width: 741px) {
        width: 47%;
    }
    @media (max-width: 480px) {
        width: 100%;
    }
        
    `;

export const CardContent = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 24px;
    padding: 0 32px;
`;

export const CardIcon = styled.img`
    width: auto;
    height:auto;
`;

export const Works = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    `;

export const Companies = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
    `;

export const RolesAndDuration = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    `;

export const Roles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    margin-right: 46px;
    gap:16px;
    `;

export const Duration = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap:16px;
    `;

export const TagName = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height:300%;
    color: #64ffda;
    margin-bottom: -40px;
    `;

