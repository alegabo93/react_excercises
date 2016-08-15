import React from 'react';
import KabanBoard from './KabanBoard/KabanBoard';

let cardList = [
  {
    id: 1,
    title: 'Read the book',
    description: 'I should read the **whole** book',
    color: '#BD8D31',
    status: 'in-progress',
    tasks: []
  },
  {
    id: 2,
    title: 'Write some code',
    description: 'Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)',
    color: '#3A7E28',
    status: 'todo',
    tasks: [
      {
        id: 1,
        name: 'ContactList Example',
        done: true
      },
      {
        id: 2,
        name: 'Kaban Example',
        done: false
      },
      {
        id: 3,
        name: 'My own experiments',
        done: false
      }
    ]
  },
  {
    id: 3,
    title: 'Something else',
    description: 'I finsihed',
    color: '#58ACFA',
    status: 'done',
    tasks: []
  }
];

React.render(<KabanBoard cards={cardList} />, document.getElementById('root'));
