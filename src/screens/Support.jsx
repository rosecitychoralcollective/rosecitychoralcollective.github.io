import React from 'react';
import useTitle from '../hooks/useTitle';
import translateString from '../utils/StringHelper';

const Support = () => {
  const t = translateString;
  useTitle(t('Support-Page-Title'));

  return (
    <div>
      <h1>Dues</h1>
      <p>Yo hook us up wit dat money fam.</p>
      <h1>Donate to us</h1>
      <p>Same as above but you haven&apos;t purchased singing rights.</p>
      <h2>“to speak to someone about donating time or items, please contact us (with link to contact page)</h2>
    </div>
  );
};

export default Support;
