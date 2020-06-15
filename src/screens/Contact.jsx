import React from 'react';
import translateString from '../utils/StringHelper';
import useTitle from '../hooks/useTitle';

const Contact = () => {
  const t = translateString;
  useTitle(t('Contact-Page-Title'));

  return (
    <div>
      <h1>
        Contact us
      </h1>
      <h2>
        Email:
        {' '}
        <a
          href="mailto:rosecitychoralcollective@gmail.com"
        >
          rosecitychoralcollective@gmail.com
        </a>
      </h2>
      <h2>
        Facebook:
        {' '}
        <a
          href="https://www.facebook.com/rosecitychoralcollective"
        >
            @rosecitychoralcollective
        </a>
      </h2>
      <h2>
        Phone: 503-867-5309. Ask for Jenny.
      </h2>
    </div>
  );
};

export default Contact;
