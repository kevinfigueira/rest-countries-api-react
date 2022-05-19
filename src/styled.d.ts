import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            bg_1: string;
            bg_2: string;
            shadow: string;
            txt_1: string;
            txt_2: string;
        }
    }
}