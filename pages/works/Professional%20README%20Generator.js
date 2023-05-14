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
  <Layout title="Professional README Generator">
    <Container>
      <Title>
        Professional README Generator <Badge>2023-2023</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/readmetest.png" alt="icon" />
      </Center>
      <P>
      When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.

        You can quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>
        Created a command-line application that dynamically generates a professional README.md file from a user’s input using the Inquirer package
        </ListItem>
        <ListItem>
          {' '}
          It solved the problem of me being lazy and not having money to buy an
          actual planner
        </ListItem>
        <ListItem>
        The application will be invoked by using the following command:

        node index.js
        </ListItem>
        <ListItem>
          It will have a clean, polished, and responsive user interface.
        </ListItem>
        <ListItem>
        Hi Jerry, thanks for submitting your assignment. I was able to review your GitHub repo alongside your walkthrough video demonstration. Great work on getting a functional README generator developed - this will prove quite useful in your tenure as a Web developer! Upon analyzing your submission as a whole I was able to confirm the following requirements were met: you demonstrated how to invoke your application, showcased all of the various different prompts, then demonstrated the final product. Great job including a badge and license within your README.
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
          <span>GraphQL, MERN, JavaScript,Node.js, Inquirer</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="https://github.com/craftersol728/Read-Me-Generator">
            ReadMeGenerator on GitHub
          </Link>

        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2022/12</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
