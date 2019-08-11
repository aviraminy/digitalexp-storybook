import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { text, boolean, number, select } from '@storybook/addon-knobs/react';

//Components
import { Welcome } from '@storybook/react/demo';
import Button from '../src/components/form/Button'
import Checkbox from '../src/components/form/Checkbox'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', withInfo('This is an informational paragraph you can use to describe your component')(
    () => <Button onClick={action('clicked')} type={select('type', ['primary','secondary'])} >{text('Label', 'Click Me')}</Button>));
storiesOf('Checkbox', module)
  .add('with text', withInfo('This is a Checkbox informational paragraph you can use to describe your component')(
    () => <Checkbox text='check me' ></Checkbox>))
    

