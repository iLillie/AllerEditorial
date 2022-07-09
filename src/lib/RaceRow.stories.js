import { within, userEvent } from '@storybook/testing-library';
import RaceRow from './RaceRow.svelte';

export default {
    title: 'RaceRow',
    component: RaceRow,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/svelte/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => ({
    Component: RaceRow,
    props: args,
});


export const RaceRowComponent = Template.bind({});

RaceRowComponent.args = {
    rankObject: {
        rank:1,
        duration:"2:34.3",
        person: {
            name:"Frida Karlsson",
            country:"Sweden"
        }
    }
}
