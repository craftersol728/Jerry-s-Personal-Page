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
    <Layout title="Tech Blog">
      <Container>
        <Title>
        Tech Blog <Badge>2023-2023</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/TB.png" alt="icon" />
        </Center>
        <P>
        Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>
          Built a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.
          </ListItem>
          <ListItem>You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.</ListItem>
          
          
          <ExternalLinkIcon mx="2px" />
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>VS Code</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Node.js,Sequelize,dotenv, Model-View-Controller, and MySQL.</span>
          </ListItem>
          <ListItem>

            <Meta>Scource</Meta>
            <Link href="https://github.com/craftersol728/Tech-Blog-2.0">
            Tech Blog
            </Link>


  
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>2023/2</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  