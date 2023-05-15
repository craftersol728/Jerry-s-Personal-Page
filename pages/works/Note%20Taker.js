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
    <Layout title="Note Taker">
      <Container>
        <Title>
        Note Taker <Badge>2023-2023</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/11-express-homework-demo-01.png" alt="icon" />
        </Center>
        <P>
        Created an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.
  
          You can quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>
          GET /api/notes should read the db.json file and return all saved notes as JSON.
          </ListItem>
          <ListItem>
            {' '}
            POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
          </ListItem>
          <ListItem>
            DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
            node index.js
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
            <span>JavaScript,Node.js, Express.js,JSON</span>
          </ListItem>
          <ListItem>
            <Meta>Link</Meta>
            <Link href="https://notetakerasdasd.herokuapp.com">
            Note Taker Link
            </Link>
            <Meta>Scource</Meta>
            <Link href="https://github.com/craftersol728/note-taker">
            Note Taker on GitHub
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
  