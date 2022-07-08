import { within, userEvent } from '@storybook/testing-library';
import Counter from './Counter.svelte';

export default {
    title: 'Counter',
    component: Counter,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/svelte/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => ({
    Component: Counter,
    props: args,
});


export const CounterComponent = Template.bind({});
