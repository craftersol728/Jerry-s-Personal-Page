import { Container, Heading,SimpleGrid,Divider} from "@chakra-ui/react"; 
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-items";

import BBB from "../public/images/BBB.jpg";
import KittyKlickerGame from "../public/images/kokomi.png";
const Works = () => {
    return (
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="BigBoyBudgeting" title="BigBoyBudgeting" thumbnail={BBB}>
                        A Passive Aggresive Budgeting App
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="KittyKlickerGame" title="KittyKlickerGame" thumbnail={KittyKlickerGame}>
                    Kitty Clicker is a clicker-style game that uses third party APIs to give motivational quotes and show the current weather on the background.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works;