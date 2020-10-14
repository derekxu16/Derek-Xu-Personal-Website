import React from 'react';
import { Icon } from 'semantic-ui-react';
import { navigate } from 'gatsby';

export default function HomeButton() {
  return (
    <div className="floating-action" onClick={() => navigate('/')}>
      <Icon
        name="home"
        size="large"
        fitted
        style={{ display: 'block' }}
      />
    </div>
  );
}