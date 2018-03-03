import React, { Component } from 'react';
import Link from './Link';

const ALL_LINKS = [
  {
    id: '1',
    hash: 'ABC',
    url: 'http://google.com',
    description: 'Google shortlink'
  },
  {
    id: '2',
    hash: 'ABC2',
    url: 'http://google2.com',
    description: 'Google shortlink2'
  }
];

class LinkList extends Component {
  render() {
    return (
      <div>
        {ALL_LINKS.map(link => <Link key={link.id} link={link} />)}
      </div>
    );
  }
}

export default LinkList;
