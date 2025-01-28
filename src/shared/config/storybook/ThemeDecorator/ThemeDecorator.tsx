import {StoryFn} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => {
  const Decorator = (StoryComponent: StoryFn) => (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );

  Decorator.displayName = 'ThemeDecorator';

  return Decorator;
};
