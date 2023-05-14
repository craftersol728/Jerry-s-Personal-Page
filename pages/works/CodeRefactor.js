import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    UnorderedList,
    Center,
    Image
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, Meta } from '../../components/work'
  import P from '../../components/paragraph'

  const Work = () => (
    <Layout title="CodeRefactor">
      <Container>
        <Title>
        Challenge Types Code Refactor <Badge>2023-2023</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/01-html-css-git-homework-demo.png" alt="icon" />
        </Center>
        <P>
        This is a short, simple description of a feature told from the perspective of the person who is requesting the new capability, usually a user or customer of the system.
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>This is an image or animation that demonstrates the design and functionality of the web application that I built.</ListItem>
          <ListItem>One of the most common tasks for front-end and junior developers is to take existing code and refactor it (recall that to refactor code is to improve it without changing what it does) to meet a certain set of standards or implement a new technology. In this Challenge, a marketing agency has hired you to refactor an existing site to make it more accessible.</ListItem>
          <ListItem>
          All links are functioning correctly.
          </ListItem>
          <ListItem>
          Reworked the CSS to make it more efficient by consolidating CSS selectors and properties, organizing them to follow the semantic structure of the HTML elements, and including comments before each element or section of the page.
          </ListItem>
          <ExternalLinkIcon mx="2px" />
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web browser</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS</span>
          </ListItem>
          <ListItem>
            <Meta>Download</Meta>
            <Link href="https://github.com/craftersol728/Hoission-Websitre-deisgn-">
            Hoission-Websitre-deisgn
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>2022/10</span>
          </ListItem>
        </List>

      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'