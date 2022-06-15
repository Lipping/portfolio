import { Container, Content, Header, Logo, Main, Nav, NavItem, Text, Title } from "../shared/pages/Home/style"


export default function Home() {
  return (
    <Container>
      <Content>
        <Header>
          <Logo src="/assets/logo.svg"/>
          <Nav>
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Projects</NavItem>
          </Nav>
        </Header>
        <Main>
        <Title>Product Designer creating thoughful, intuitive interfaces.</Title>
        <Text>I’m Dale-Anthony, a UK based product designer with over ten years of experience. I specialise in interface design for mobile and web-based applications with a focus on simplicity & usability.</Text>
        <Text>I’m currently working at Delicious Brains on some of the worlds best WordPress products. Before that, I worked at BaseKit where I helped shape the future of website builders and tools to help small businesses thrive online. I also build tools like Design Vault and Does.Design.</Text>
        {/* <ContactLinks>
          <SocialMediaLinks>
           <a href=""><img src="" alt="" /></a>
           <a href=""><img src="" alt="" /></a>
           <a href=""><img src="" alt="" /></a>
           <a href=""><img src="" alt="" /></a>
          </SocialMediaLinks>
          <Button>Email me</Button>
        </ContactLinks> */}
        </Main>
      </Content>
    </Container>
  )
}
