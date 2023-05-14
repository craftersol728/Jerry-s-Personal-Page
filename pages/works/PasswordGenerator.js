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
    <Layout title="Password Generator">
      <Container>
        <Title>
        Password Generator <Badge>2023-2023</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/03-javascript-homework-demo.png" alt="icon" />
        </Center>
        <P>
        This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>This web application allows you to generate a random password based on your own password criteria. You must choose a password length between 8 and 128 characters, then you will be prompted with other information such as including symbols, numbers, letters, etc.</ListItem>
          <ListItem>AS AN employee with access to sensitive data</ListItem>
          <ListItem>
            I WANT to randomly generate a password that meets certain criteria</ListItem>
                    <ListItem>
            SO THAT I can create a strong password that provides greater security</ListItem>
                    <ListItem>
          All links are functioning correctly.
          </ListItem>
          <ListItem>
          It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.
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
            <span>HTML, CSS, JavaScript</span>
          </ListItem>
          <ListItem>
            <Meta>Download</Meta>
            <Link href="https://github.com/craftersol728/Password-Generator">
            Password Generator
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