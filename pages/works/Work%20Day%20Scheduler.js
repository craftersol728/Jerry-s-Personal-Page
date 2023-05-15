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
    <Layout title="Dark-Mode-24h-Schedual">
      <Container>
        <Title>
          Dark-Mode-24h-Schedual <Badge>2023-2023</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/WDS.png" alt="icon" />
        </Center>
        <P>
        A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>My motivation was to create a flushed out schedualer using local stoarge</ListItem>
          <ListItem> It solved the problem of me being lazy and not having money to buy an actual planner

          </ListItem>
          <ListItem>
          This app will run in the browser</ListItem>
            <ListItem>
            I learned how to use local stoarge and how to create elements and adding what i like to it with classListAdd</ListItem>
            <ListItem>
            It will have a clean, polished, and responsive user interface. 
          </ListItem>
          <ListItem>
          Amazing work Jerry! Absolutely hit the nail on the head with this assignment regarding the requirements. Each timeblock contains an input field and save button, clicking a time block&apos;s save button saves the input text to local storage allowing the text to persist when the application is refreshed, and each timeblock is color coded to indicate whether it is in a past, present, or future hour. Your repo follows good practices for naming conventions, indentations, and file structure. Keep up the good work!
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
            <span>HTML, CSS, JavaScript,Moment.js ,jQuery</span>
          </ListItem>
          <ListItem>
            <Meta>Download</Meta>
            <Link href="https://github.com/craftersol728/Dark-Mode-24h-Schedual">
            Schedualer
            </Link>
            <Meta>Link</Meta>
            <Link href="https://craftersol728.github.io/Dark-Mode-24h-Schedual/">
            Schedualer 
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>2022/11</span>
          </ListItem>
        </List>

      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'