import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
// import { withInfo } from '@storybook/addon-info';
import { text, boolean, number, select } from '@storybook/addon-knobs/react';

//Components
import { Welcome } from '@storybook/react/demo';
import Button from '../src/components/form/Button'
import Checkbox from '../src/components/form/Checkbox'

const storyDecorator = function(storyFn, storyObj) { return <div><h1 className='storybook-title'>{storyObj.name}</h1>{storyFn()}</div> };

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('All Buttons',
    () => <Button onClick={action('clicked')} type={select('type', ['primary','secondary'])} >{text('Label', 'Click Me')}</Button>);
storiesOf('Checkbox', module)//.addDecorator(storyDecorator)
.addParameters({
  info: {
    // Make a default for all stories in this book,
    inline: true, // where the components are inlined
    styles: {
      header: {
        h1: {
          color: 'red', // and the headers of the sections are red.
        },
      },
    },
  },
})
  .add('All checkboxes', 
    () => <div className='ad-story-checkbox'> 
            <Checkbox 
              text='Check Me' 
              disabled={boolean('disabled',false)} 
              readonly={boolean('readonly')} ></Checkbox>
            <section class="sb-segmented-group">
              <Checkbox text='Unchecked' ></Checkbox>
              <Checkbox text='Checked' checked='true'></Checkbox>
              <Checkbox text='Disabled' disabled='true'></Checkbox>
            </section>
            </div>,{
    components: { Button },
    info: 'This story has additional text added to the info!', // Still inlined and with red headers!
  })


