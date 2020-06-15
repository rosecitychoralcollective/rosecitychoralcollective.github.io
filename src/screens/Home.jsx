/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import YouTube from 'react-youtube';
import translateString from '../utils/StringHelper';
import useTitle from '../hooks/useTitle';

const HomeScreen = ({classes}) => {
  const t = translateString;
  useTitle(t('Home-Page-Title'));

  return (
    <div>
      <h1 className={classes.preClick}>
        {t('Home-Page-Welcome-Header')}
      </h1>
      {_.range(1, 5).map((textId) => (
        <p>
          {t(`Home-Page-Welcome${textId}`)}
        </p>
      ))}
      <YouTube videoId="dQw4w9WgXcQ" />
      {
      // Disabled because the video is larger than size reqs.
      /* <video style={{ width: '100%', height: '100%' }} src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" controls>
        {t('Home-Page-Old-Browser')}
      </video> */}
    </div>
  );
};

HomeScreen.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default HomeScreen;
