
import _ from 'lodash';
import React from 'react';


const pepTalk = [
  'Βάσταξε', 'Πόμινε', 'Υπομονήν τζαι κράτην'
];

export class Load extends React.Component {
  render() {
    return (
      <div className="loading">
        <div className="loading__spinner"/>
        {pepTalk[_.random(pepTalk.length - 1)]}
      </div>
    );
  }
}
