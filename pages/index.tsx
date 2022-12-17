import { BarHoverButton, Button, Card, CardBox, CardContent, CardIcon, CenterContainer, Companies, ContactLinks, Container, Content, Duration, Header, Image, ImageBackLine, ImageBox, ImageContainer, Line, Logo, Main, Nav, Roles, RolesAndDuration, SocialMediaButton, SocialMediaIcon, SocialMediaLinks, Subtitle, TagName, Text, TextDiv, TextImageBox, TextSide, Title, Works } from "../shared/pages/Home/style"
import Typical from "react-typical"



export default function Home() {

  // const [animation, setAnimation] = useState(false)

  return (
    <>
    
    
    
    <Container>
      <Content>
        <Header>
          <Logo src="/assets/logo.svg" />
          <Nav>
            <a href="/assets/resume.pdf" target="_blank">
              <Button>
                Resume
                <BarHoverButton>
                  Resume
                </BarHoverButton>
              </Button>
            </a>
          </Nav>
        </Header>
        <Main>
          <Title>
            <Typical
              loop={Infinity}
              wrapper="p"
              steps={[
                "Front-end Developer creating thoughtful, intuitive interfaces",
                1000]}
            />
          </Title>
          <Text>I’m <span style={{ color: "#64ffda" }}>Felipe Stefenoni</span>, a brazilian based UI Designer and Front-end developer. I specialize in interface design applications from web and mobile with a focus on simplicity & usability.</Text>
          <ContactLinks>
            <SocialMediaLinks>
              <SocialMediaButton href="https://www.linkedin.com/in/felipelages/" target="_blank">
                <SocialMediaIcon src="/assets/iconLinkedin.svg" />
              </SocialMediaButton>
              <SocialMediaButton href="https://github.com/Lipping" target="_blank">
                <SocialMediaIcon src="/assets/iconGithub.svg" />
              </SocialMediaButton>
            </SocialMediaLinks>
            <a href="mailto:felipelagesstefenoni@gmail.com" target="_blank">
              <Button>
                Email me
                <BarHoverButton>
                  Email me
                </BarHoverButton>
              </Button>
            </a>
          </ContactLinks>
        </Main>
        <Line />
        <Main>
          <TextImageBox>
            <TextDiv>
              <Subtitle>About me</Subtitle>
              <TextSide>Hello! My name is Felipe Lages Stefenoni, I graduated as a Graphic Designer in 2019 at the Federal University of Espírito Santo. I’m passionate about the mix of design and technology, that’s why I decided to specialize in both areas. </TextSide>
            </TextDiv>
            <ImageBox>
              <ImageContainer>
                <Image src="assets/profile.jpeg" />
              </ImageContainer>
              <ImageBackLine />
            </ImageBox>
          </TextImageBox>
          <Text>Outside of work my hobbies include canoeing, exploring new places with my friends, playing video games, drawing, watching anime and sci-fi shows & movies, discovering new technologies and taking waaaaay too many photos of my cats, Ônix and Saphir.</Text>
        </Main>
        <Line />
        <Main>
          <Subtitle>Technologies</Subtitle>
          <Text>Here are a few technologies I’ve been working with recently:</Text>
          <CardBox>
            <Card>
              <CardContent>
                <CardIcon src="/assets/iconReact.svg" />
                <Text>React</Text>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <CardIcon src="/assets/iconJS.svg" />
                <Text>JavaScript</Text>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <CardIcon src="/assets/iconTS.svg" />
                <Text>TypeScript</Text>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <CardIcon src="/assets/iconHTML.svg" />
                <Text>HTML</Text>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <CardIcon src="/assets/iconCSS.svg" />
                <Text>CSS</Text>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <CardIcon src="/assets/iconNext.svg" />
                <Text>NextJS</Text>
              </CardContent>
            </Card>
          </CardBox>
        </Main>
        <Line />
        <Main>
          <Subtitle>Work</Subtitle>
          <Works>
            <Companies>
              <Text>Qualidata</Text>
              <Text>Metrobi Inc</Text>
              <Text>ATW Delivery Brands</Text>
              <Text>Freelancer</Text>
            </Companies>
            <RolesAndDuration>
              <Roles>
                <Text>Front-end Developer</Text>
                <Text>Product Designer</Text>
                <Text>UI Designer</Text>
                <Text>Freelancer</Text>
              </Roles>
              <Duration>
                <Text>2022 - now</Text>
                <Text>2022 - 2022</Text>
                <Text>2021 - 2022</Text>
                <Text>2018 - 2021</Text>
              </Duration>
            </RolesAndDuration>
          </Works>
        </Main>
        <Line />
        <Main>
          <Subtitle>Projects</Subtitle>
          <Text>Recently projects that I have worked on:</Text>
          <TextImageBox>
            <TextDiv>
              <TagName>Application</TagName>
              <Subtitle>Space Application</Subtitle>

              <TextSide>A franchising application with all the functionalities that the biggest Dark Kitchen worldwide needed with both franchisee and franchisor interfaces in web, mobile and desktop.</TextSide>
            </TextDiv>
            <a href="https://www.behance.net/gallery/147268559/Space-SaaS-UX-Study-Case" target="_blank"><ImageBox>
              <ImageContainer>
                <Image src="assets/projectSpace.webp" />
              </ImageContainer>
              <ImageBackLine />
            </ImageBox></a>
          </TextImageBox>
        </Main>
        <Main>
          <TextImageBox>
            <TextDiv>
              <TagName>Website</TagName>
              <Subtitle>Enlight WS</Subtitle>
              <TextSide>A website for the company that I found with co-workers. Enlight is a web company that takes ideas out of paper and help business improve in the technology century.</TextSide>
            </TextDiv>
            <a href="https://www.behance.net/gallery/146758559/Brand-Enlight-Web-Solutions" target="_blank"><ImageBox>
              <ImageContainer>
                <Image src="assets/projectEnlight.webp" />
              </ImageContainer>
              <ImageBackLine />
            </ImageBox></a>
          </TextImageBox>
        </Main>
        <Main>
          <TextImageBox>
            <TextDiv>
              <TagName>Branding</TagName>
              <Subtitle>Kuroi Kuma</Subtitle>
              <TextSide>A visual identity made for a telemedicine business for japanese founders. The identity focus on health-care and kanjis to englobe all the history and prestigious of the brand.</TextSide>
            </TextDiv>
            <a href="https://www.behance.net/gallery/147043375/Brand-Kuroi-Kuma" target="_blank"><ImageBox>
              <ImageContainer>
                <Image src="assets/projectKuroi.webp" />
              </ImageContainer>
              <ImageBackLine />
            </ImageBox></a>
          </TextImageBox>
        </Main>
        <Line />
        <Main>
          <CenterContainer>
            <TagName>What`s next?</TagName>
            <Subtitle>Get in touch</Subtitle>
            <Text>If you have any questions, please don’t hesitate to contact me.</Text>
            <a href="mailto:felipelagesstefenoni@gmail.com" target="_blank"><Button>Say Hello<BarHoverButton>Say Hello</BarHoverButton></Button></a>
            <Text>Designed with Figma & Built using React by Felipe Lages Stefenoni</Text>
          </CenterContainer>
        </Main>

      </Content>
    </Container>
    </>
  )
}
