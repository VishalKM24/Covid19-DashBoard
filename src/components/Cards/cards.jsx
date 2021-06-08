import React from 'react';
import {Card, Typography, Grid, CardContent} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './cards.module.css';
import cx from 'classnames';

const cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
     if(!confirmed)
        return 'Loading...';

    return (
        <>
            <div className={styles.container}>
                <Grid container spacing={3} justify='center'>
                    <Grid item component={Card} xs={8} md={3} className={cx(styles.card, styles.infected)}>
                        <CardContent>
                            <Typography color='textSecondary' gutterBottom>INFECTED</Typography>
                            <Typography variant='h5'>
                                <CountUp start={0} end={confirmed.value} duration={5} seprator="," />
                            </Typography>
                            <Typography color='textSecondary'>{new Date(lastUpdate).toString()}</Typography>
                            <Typography variant='body2'>No of active cases</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={8} md={3} className={cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography color='textSecondary' gutterBottom>RECOVERED</Typography>
                            <Typography variant='h5'>
                            <CountUp start={0} end={recovered.value} duration={5} seprator="," />
                            </Typography>
                            <Typography color='textSecondary'>{new Date(lastUpdate).toString()}</Typography>
                            <Typography variant='body2'>No of active cases</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={8} md={3} className={cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography color='textSecondary' gutterBottom>DEATH</Typography>
                            <Typography variant='h5'>
                            <CountUp start={0} end={deaths.value} duration={5} seprator="," />
                            </Typography>
                            <Typography color='textSecondary'>{new Date(lastUpdate).toString()}</Typography>
                            <Typography variant='body2'>No of active cases</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default cards;
