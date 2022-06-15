import styled from "@emotion/styled";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    height: 100vh;
    background-color: #111;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 24px;
    max-width: 1280px;
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

export const NavItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 0 16px;
    font-size: 1rem;
    font-weight: 400;
    color: #b1b1b1;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
        color: #f7f7f7;
        background-color: #2e2e2e;
    }
    `;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    gap: 32px;
    margin-top: 56px;
    `;

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    line-height:2.2rem;
    color: #f7f7f7;
    `;

export const Text = styled.p`
    font-size: 0.875rem;
    line-height:1.4rem;
    color: #b1b1b1;
    `;