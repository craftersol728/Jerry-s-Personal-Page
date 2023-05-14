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
    <Layout title="Coding Quiz">
      <Container>
        <Title>
        Coding Quiz <Badge>2023-2023</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/CodeQuiz.png" alt="icon" />
        </Center>
        <P>
        This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>This web application allows you to generate a random password based on your own password criteria. You must choose a password length between 8 and 128 characters, then you will be prompted with other information such as including symbols, numbers, letters, etc.</ListItem>
          <ListItem> build a timed coding quiz with multiple-choice questions.</ListItem>
          <ListItem>
          This app will run in the browser</ListItem>
            <ListItem>
            will feature dynamically updated HTML and CSS powered by JavaScript code</ListItem>
            <ListItem>
            It will have a clean, polished, and responsive user interface. 
          </ListItem>
          <ListItem>
          Coding assessments are an important part of the interview process for developers. In fact, employers often use them to filter out job candidates with a cut-off score. To help you prepare, we’ve developed a set of technical interview questions that you can answer throughout the course. The difficulty level of these questions will increase as you become a more proficient developer. If you take advantage of these opportunities to practice, you should be well-prepared to shine during the technical interview process toward the end of this course!
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
            <Link href="https://github.com/craftersol728/Javascript-Quiz">
            Code Quiz
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