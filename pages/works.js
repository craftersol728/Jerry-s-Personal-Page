import { Container, Heading,SimpleGrid/*Divider*/} from "@chakra-ui/react"; 
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import BBB from "../public/images/BBB.jpg";
import KittyKlickerGame from "../public/images/kokomi.png";
import Horiseon from "../public/images/works/01-html-css-git-homework-demo.png";
import PasswordGenerator from "../public/images/works/03-javascript-homework-demo.png";
import CodeQuiz from "../public/images/works/CodeQuiz.png";
import WDS from "../public/images/works/WDS.png";
import README from "../public/images/works/readmetest.png";
import TPM from "../public/images/works/TPM.png";
import NoteTaker from "../public/images/works/11-express-homework-demo-01.png";
import ET from "../public/images/works/ET.png";
import Ecom from "../public/images/works/E-com backend.png";
import TB from "../public/images/works/TB.png";
import Regex from "../public/images/works/Regex.png";
import SNAPI from "../public/images/works/18.png";
import JATE from "../public/images/works/JATE.png";
import REACT from "../public/images/works/REACT.png";


//---------------------------------------------------------------
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
                
                <Section>
                    <WorkGridItem id="CodeRefactor" title="Code-Refactor-Website" thumbnail={Horiseon}>
                        HTML and CSS code reactor for Horiseon
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="PasswordGenerator" title="PasswordGenerator" thumbnail={PasswordGenerator}>
                    An application that an employee can use to generate a random password based on criteria they&apos;ve selected.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="CodeQuiz" title="Code Quiz" thumbnail={CodeQuiz}>
                    Built a timed coding quiz with multiple-choice questions. 
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="Work Day Scheduler" title="Work Day Scheduler-Website" thumbnail={WDS}>
                    a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="Professional README Generator" title="Professional README Generator" thumbnail={README}>
                    Created a command-line application that dynamically generates a professional README.md file from a user&apos;s input using the Inquirer packageLinks to an external site..
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="Team Profile Generator" title="Team Profile Generator" thumbnail={TPM}>
                    Built a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="Note Taker" title="Note Taker" thumbnail={NoteTaker}>
                    Created an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="Employee-Tracker" title="Employee-Tracker" thumbnail={ET}>
                    Built a command-line application from scratch to manage a company&apos;s employee database, using Node.js, Inquirer, and MySQL.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="E-commerce-back-end" title="E-commerce-back-end" thumbnail={Ecom}>
                    Built the back end for an e-commerce site. You’ll take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="Tech Blog" title="Tech Blog" thumbnail={TB}>
                     A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="Regex Tutorial" title="Regex Tutorial" thumbnail={Regex}>
                    A tutorial that explains how a specific regular expression, or regex, functions by breaking down each part of the expression and describing what it does.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="Social Network API" title="Social Network API" thumbnail={SNAPI}>
                    An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. 
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="Text Editor" title="Text Editor" thumbnail={JATE}>
                    A text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="React Portfolio" title="React Portfolio" thumbnail={REACT}>
                    Created a portfolio, using your new React skills to help set you apart from other developers whose portfolios don’t use the latest technologies.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        
    )
}

export default Works;