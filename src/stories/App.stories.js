import React from 'react';
import App from '../components/App';

export default {
  title: 'App',
  component: App,
};

const Template = args => <App {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  label: 'Hello Storybook!',
};
