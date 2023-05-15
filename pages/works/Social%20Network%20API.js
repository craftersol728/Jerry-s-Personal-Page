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
    <Layout title="Social Network API">
      <Container>
        <Title>
        Social Network API <Badge>2023-2023</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/18.png" alt="icon" />
        </Center>
        <P>
        MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Over the last part of this course, you’ll use several of the technologies that social networking platforms use in their full-stack applications. Because the foundation of these applications is data, it’s important that you understand how to build and structure the API first.
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>
          Built an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. 
          </ListItem>
          <ListItem>
          In addition to using the Express.jsLinks to an external site. and MongooseLinks to an external site. packages, I also optionally use a JavaScript date library of my choice or the native JavaScript Date object to format timestamps.
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
            <span>Node.js,Sequelize,dotenv, NoSQL , and MySQL.</span>
          </ListItem>
          <ListItem>

            <Meta>Scource</Meta>
            <Link href="https://github.com/craftersol728/Best-Social-Network-API">
            Social Network API
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
  