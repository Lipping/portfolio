import { Button, Card, CardBox, CardContent, CardIcon, Companies, ContactLinks, Container, Content, Duration, Header, Image, ImageBackLine, ImageBox, ImageContainer, Line, Logo, Main, Nav, Roles, RolesAndDuration, SocialMediaButton, SocialMediaIcon, SocialMediaLinks, Subtitle, TagName, Text, TextImageBox, TextSide, Title, Works } from "../shared/pages/Home/style"
import Typical from "react-typical"


export default function Home() {
  return (
    <Container>
      <Content>
        <Header>
          <Logo src="/assets/logo.svg"/>
          <Nav>
            <a href="/assets/iconTwitter.svg" download><Button>Resume</Button></a>
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
        <Text>I’m Felipe Stefenoni, a brazilian based UI Designer and Front-end developer. I specialise in interface design applications from web and mobile with a focus on simplicity & usability.</Text>
        <ContactLinks>
          <SocialMediaLinks>
            <SocialMediaButton href="https://twitter.com/Lipping10" target="_blank"><SocialMediaIcon src="/assets/iconTwitter.svg"></SocialMediaIcon></SocialMediaButton>
            <SocialMediaButton href="https://www.linkedin.com/in/felipelages/" target="_blank"><SocialMediaIcon src="/assets/iconLinkedin.svg"></SocialMediaIcon></SocialMediaButton>
            <SocialMediaButton href="https://github.com/Lipping" target="_blank"><SocialMediaIcon src="/assets/iconGithub.svg"></SocialMediaIcon></SocialMediaButton>
          </SocialMediaLinks>
          <a href="mailto:felipelagesstefenoni@gmail.com"><Button>Email me</Button></a>
        </ContactLinks>
        </Main>
        <Line />
        <Main>
          <Subtitle>About me</Subtitle>
          <TextImageBox>
          <TextSide>Hello! My name is Felipe Lages Stefenoni, I graduated as a Graphic Designer in 2019 at the Federal University of Espírito Santo. I’m passionate about the mix of design and technology, that’s why I decided to specialise in both areas. </TextSide>
          <ImageBox>
            <ImageContainer>
              <Image src="assets/profile.jpeg" />
            </ImageContainer>
            <ImageBackLine />
          </ImageBox>
          </TextImageBox>
          <Text>Outside of work my hobbies include canoing, exploring new places with my friends, playing video games, drawing, watching anime and sci-fi shows & movies, discovering new technologies and taking waaaaay too many photos of my cats, Ônix and Saphir.</Text>
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
              <Text>Enlight Web Solutions</Text>
              <Text>ATW Delivery Brands</Text>
              <Text>Freelancer</Text>
            </Companies>
            <RolesAndDuration>
            <Roles>
              <Text>Co-Founder</Text>
              <Text>UI Designer</Text>
              <Text>Freelancer</Text>
            </Roles>
            <Duration>
              <Text>2022 - now</Text>
              <Text>2021 - now</Text>
              <Text>2018 - now</Text>
            </Duration>
            </RolesAndDuration>
          </Works>
        </Main>
        <Line />
        <Main>
          <Subtitle>Projects</Subtitle>
          <Text>Recently projects that I have worked on:</Text>
          <TagName>Application</TagName>
          <Subtitle>Space Application</Subtitle>
          <TextImageBox>
          <TextSide>A franchising application with all the functionalities that the biggest Dark Kitchen worldwide needed with both franchisee and franchisor interfaces in web, mobile and desktop.</TextSide>
          <ImageBox>
            <ImageContainer>
              <Image src="assets/profile.jpeg" />
            </ImageContainer>
            <ImageBackLine />
          </ImageBox>
          </TextImageBox>
        </Main>
        <Main>
        <TagName>Website</TagName>
          <Subtitle>Enlight WS</Subtitle>
          <TextImageBox>
          <TextSide>A website for the company that I found with co-workers. Enlight is a web company that takes ideas out of paper and help business improve in the technology century.  </TextSide>
          <ImageBox>
            <ImageContainer>
              <Image src="assets/profile.jpeg" />
            </ImageContainer>
            <ImageBackLine  />
          </ImageBox>
          </TextImageBox>
        </Main>
        <Main>
        <TagName>Branding</TagName>
          <Subtitle>Kuroi Kuma</Subtitle>
          <TextImageBox>
          <TextSide>A visual identity maded for a telemedicine business for japanese founders. The identity focus on health-care and kanjis to englobe all the history and prestigious of the brand.</TextSide>
          <ImageBox>
            <ImageContainer>
              <Image src="assets/profile.jpeg" />
            </ImageContainer>
            <ImageBackLine />
          </ImageBox>
          </TextImageBox>
        </Main>
        <Line />
        <Main>
          <TagName>What`s next?</TagName>
          <Subtitle>Get in touch</Subtitle>
          <Text>If you have any questions, please don’t hesitate to contact me.</Text>
          <a href="mailto:felipelagesstefenoni@gmail.com"><Button>Say Hello</Button></a>
        </Main>
        <Text>Designed with Figma & Built using React by Felipe Lages Stefenoni</Text>
      </Content>
    </Container>
  )
}
