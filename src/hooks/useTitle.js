import { useEffect, useState } from 'react';
import translateString from '../utils/StringHelper';

const useTitle = (titleString) => {
  const t = translateString;
  const TITLE_SUFFIX = `| ${t('Organization-Name')}`;

  const defaultTitle = titleString || t('Home-Page-Title');
  const [title, setTitle] = useState(`${defaultTitle} ${TITLE_SUFFIX}`);

  const changeTitle = (value) => {
    const v = `${t(value)} ${TITLE_SUFFIX}`;
    setTitle(v);
  };

  useEffect(() => {
    document.title = title;
  });

  return [title, changeTitle];
};

export default useTitle;
