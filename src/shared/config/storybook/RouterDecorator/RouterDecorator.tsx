import {StoryFn} from '@storybook/react';
import 'app/styles/index.scss';
import {BrowserRouter} from 'react-router-dom';

export const RouterDecorator = (StoryComponent: StoryFn) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
);
