import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { Welcome } from '@storybook/react/demo';
import Button from '../src/components/form/Button'
import { text, boolean, number, select } from '@storybook/addon-knobs/react';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', withInfo('This is an informational paragraph you can use to describe your component')(
//     () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   )
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('primary', withInfo('This is an informational paragraph you can use to describe your component')(
    () => <Button onClick={action('clicked')} type={select('type', ['primary','secondary'])} >{text('Label', 'Click Me')}</Button>))
  .add('secondary', withInfo('This is an informational paragraph you can use to describe your component')(
    () => <Button onClick={action('clicked')} type='secondary'>Secondary Button</Button>))
  .add('primary-negative', withInfo('This is an informational paragraph you can use to describe your component')(
    () => <Button onClick={action('clicked')} type='primary-negative'>Secondary Button</Button>));
    

