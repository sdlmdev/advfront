import {Meta, StoryFn} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import MainPage from './MainPage';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as Meta<typeof MainPage>;

const Template: StoryFn<typeof MainPage> = (args) => <MainPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
