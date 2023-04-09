import { extendTheme } from "@chakra-ui/react";
import {mode} from '@chakra-ui/theme-tools';

const styles = {
    global: (props) => ({
        body: {
            bg: mode('#f0e7db','#202023')(props),
        }
    })
}

const components = {
    Heading:{
        varients:{
            'section-title':{
                TextDecoration: 'underline',
                fontSize:20,
                textUnderlineOffset: 6,
                TextDecorationThickness: 4,
                textDecorationColor: '#525252',
                marginTop:3,
                MarginBottom:4,
                }
        }
    },
    Link:{
        baseStyle: props => ({
            color: mode('#3d7aed','#ff63c3')(props),
            textUnderlineOffset:3,
            })
        }
}

const fonts = {
    heading: "'M PLUS Rounded 1c', sans-serif",
}

const color = {
    glassTeal: '#88ccca',
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

const theme = extendTheme({
    styles,
    components,
    fonts,
    color,
    config
});

export default theme;