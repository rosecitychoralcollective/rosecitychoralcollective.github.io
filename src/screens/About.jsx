import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Grid } from '@material-ui/core';
import _ from 'lodash';
import translateString from '../utils/StringHelper';
import Resources from '../resources/resources';
import useTitle from '../hooks/useTitle';

const About = ({classes}) => {
  const t = translateString;
  useTitle(t('About-Screen-Title'));

  const board = [
    {
      title: 'President',
      resource: 'molly',
      text: 'President-Description',
    },
    {
      title: 'Officer',
      resource: 'zosia',
      text: 'Zosia',
    },
    {
      title: 'Officer',
      resource: 'annie',
      text: 'Vice-President',
    },
  ];

  return (
    <div>
      <h1 className={classes.preClick}>About Us</h1>
      <img src={Resources.performance} width="700" height="550" alt="group singing" />
      <h2 className={classes.postClick}>A note from our director:</h2>
      {_.range(1, 7).map((num) => (
        <p>
          {t(`About-Screen-Text${num}`)}
        </p>
      ))}
      <p>
        {t('About-Screen-Text7')}
        <br />
        {t('About-Screen-Text8')}
      </p>
      <h2>Our board of directors</h2>
      <div>
        <Grid container spacing={3}>
          {board.map((off) => (
            <div className={classes.avatar}>
              <Avatar alt={t(`About-Screen-${off.title}`)} src={Resources[off.resource]}>{off.resource.substring(0, 1).toUpperCase()}</Avatar>
              {t(`About-Screen-${off.text}`)}
            </div>
          ))}
        </Grid>
      </div>
    </div>
  );
};

About.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default About;
