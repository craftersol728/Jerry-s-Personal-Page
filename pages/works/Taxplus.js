import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center,
    Image
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'


  const Work = () => (
    <Layout title="bbb">
      <Container>
        <Title>
          Tax Plus <Badge>2023-2023</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/taxplus.png" alt="icon" />
        </Center>
        <P>
          Full stack web dev for taxplus
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>Project built with React.js for my current boss</ListItem>

          <ExternalLinkIcon mx="2px" />
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web browser</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Javascript</span>
          </ListItem>
          <ListItem>
            <Meta>Download</Meta>
            <Link href="https://github.com/craftersol728/template">
              Github Source
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Link</Meta>
            <Link href="https://taxplus-zeta-ivory.vercel.app">
              Deployed Site
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>2023/05/21</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>More Details</Center>
        </Heading>
        <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/taxplus1.png" alt="BBB" />
        <WorkImage src="/images/works/taxplus2.png" alt="BBB" />
        <WorkImage src="/images/works/taxplus3.png" alt="BBB" />
      </SimpleGrid>

      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'