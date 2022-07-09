import { within, userEvent } from '@storybook/testing-library';
import RaceTable from './RaceTable.svelte';

export default {
    title: 'RaceTable',
    component: RaceTable,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/svelte/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => ({
    Component: RaceTable,
    props: args,
});


export const RaceTableComponent = Template.bind({});

RaceTableComponent.args = {
    raceData: {

        racedata:{
            name:"10 km",
            date:"2021-11-27",
            competitionName:"Verdenscup",
            season:"2021/2022"
        },
        locations: {
            "1.1km": [
                {
                    rank: 1,
                    duration: "2:34.3",
                    person: {
                        name: "Frida Karlsson",
                        country: "Sweden"
                    }
                },
                {
                    rank: 2,
                    duration: "2:35.3",
                    timeDifference: "+1.0",
                    person: {
                        name: "Therese Johaug",
                        country: "Norway"
                    }
                }
            ],
            "3.1km": [
                {
                    rank: 1,
                    duration: "4.35.3",
                    person: {
                        name: "Frida Karlsson",
                        country: "Sweden"
                    }
                },
                {
                    rank: 2,
                    duration: "2:35.3",
                    timeDifference: "+1.0",
                    person: {
                        name: "Therese Johaug",
                        country: "Norway"
                    }
                }
            ]
        }
    }
}
