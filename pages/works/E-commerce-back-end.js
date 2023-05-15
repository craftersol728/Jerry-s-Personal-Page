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
  import { Title, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="E-commerce-back-end">
      <Container>
        <Title>
        E-commerce-back-end <Badge>2023-2023</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/E-com backend.png" alt="icon" />
        </Center>
        <P>
        Internet retail, also known as e-commerce, is the largest sector of the electronics industry, having generated an estimated US$29 trillion in 2017 (Source: United Nations Conference on Trade and Development). E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>
          Built the back end for an e-commerce site. You’ll take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.
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
            <span>Node.js,Sequelize,dotenv, Object-Relational Mapping, and MySQL.</span>
          </ListItem>
          <ListItem>

            <Meta>Scource</Meta>
            <Link href="https://github.com/craftersol728/E-commerce-back-end">
            E-com backend Video
            </Link>

            <Heading as="h4" fontSize={16} my={6}>
          <Center>Addtional images</Center>
        </Heading>
        <SimpleGrid columns={1} gap={1}>
        <Meta>Youtube</Meta>
            <Link href="https://youtu.be/arrVu_JyLWs">
            E-com backend Video
            </Link>
      </SimpleGrid>
  
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
  