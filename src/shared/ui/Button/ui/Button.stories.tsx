import {Meta, StoryFn} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import {Button, ButtonSize, ButtonTheme} from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Text',
};

export const Outline = Template.bind({});

Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};

export const OutlineSizeL = Template.bind({});

OutlineSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});

OutlineSizeXL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});

OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});

Background.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});

BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});

Square.args = {
  children: '>',
  square: true,
  theme: ButtonTheme.BACKGROUND,
};

export const SquareSizeL = Template.bind({});

SquareSizeL.args = {
  children: '>',
  square: true,
  theme: ButtonTheme.BACKGROUND,
  size: ButtonSize.L,
};

export const SquareSizeXL = Template.bind({});

SquareSizeXL.args = {
  children: '>',
  square: true,
  theme: ButtonTheme.BACKGROUND,
  size: ButtonSize.XL,
};
