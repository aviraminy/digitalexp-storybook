import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';



const storyDecorator = function(storyFn, storyObj) { return (
<div className='ad-story-wrapper'>
  <h1 className='ad-story-title'>{storyObj.name}</h1>
  {storyFn()}
</div>)};


// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withInfo({
 //  inline: true,
 styles: {
  header: {
    
    h1: {
      color: 'red', // and the headers of the sections are red.
    },
  },
},
})) 
addDecorator(withKnobs);

addDecorator(storyDecorator);
configure(loadStories, module);
