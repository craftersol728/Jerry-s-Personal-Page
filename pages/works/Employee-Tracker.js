import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    UnorderedList,
    Center,
    Heading,
    SimpleGrid,
    Image
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Employee-Tracker">
      <Container>
        <Title>
        Employee-Tracker <Badge>2023-2023</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/ET.png" alt="icon" />
        </Center>
        <P>
        Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS).
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>
          Built a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.
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
            <span>Node.js, Inquirer, and MySQL.</span>
          </ListItem>
          <ListItem>
            <Meta>Youtube</Meta>
            <Link href="https://youtu.be/d1h5N9QP9_E">
            Employee-Tracker Video
            </Link>
            <Meta>Scource</Meta>
            <Link href="https://github.com/craftersol728/Employee-Tracker">
            Employee-Tracker
            </Link>

            <Heading as="h4" fontSize={16} my={6}>
          <Center>Addtional images</Center>
        </Heading>
        <SimpleGrid columns={1} gap={1}>
        <WorkImage src="/images/works/ET2.png" alt="ET2" />
      </SimpleGrid>
  
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
  