import {Meta, StoryFn} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import {AppLink, AppLinkTheme} from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  args: {
    to: '/',
  },
} as Meta<typeof AppLink>;

const Template: StoryFn<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
};

export const InvertedSecondary = Template.bind({});

InvertedSecondary.args = {
  children: 'Text',
  theme: AppLinkTheme.INVERTED_SECONDARY,
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedSecondaryDark = Template.bind({});

InvertedSecondaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.INVERTED_SECONDARY,
};

InvertedSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
