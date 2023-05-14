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
    <Layout title="Team Profile Generator">
      <Container>
        <Title>
        Team-profile-management <Badge>2023-2023</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/TPM.png" alt="icon" />
        </Center>
        <P>
        Built a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.
  
          You can quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>
          Created a command-line application that dynamically generates a professional README.md file from a user’s input using the Inquirer package
          </ListItem>
          <ListItem>
            {' '}
            use of the Inquirer package, ensure that you install and use Inquirer version 8.2.4. To do so, use the following command in your project folder: npm i inquirer@8.2.4.
          </ListItem>
          <ListItem>
          The application will be invoked by using the following command:
  
          node index.js
          </ListItem>
          <ListItem>
          Uses Jest to an external site. For running the unit tests and InquirerLinks to an external site. for collecting input from the user. 
          </ListItem>
          <ListItem>
          generated HTML’s appearance and functionality. 
          </ListItem>
          <ExternalLinkIcon mx="2px" />
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>VS Code</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Object-Oriented Programming, GraphQL,  JavaScript,Node.js, Inquirer,Jest</span>
          </ListItem>
          <ListItem>
            <Meta>Download</Meta>
            <Link href="https://github.com/craftersol728/Team-profile-management">
            Team-profile-management on GitHub
            </Link>
  
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>2023/1</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  