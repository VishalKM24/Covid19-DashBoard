import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 345,
        maxWidth: 345,
    },
    media: {
        height: 200,
        paddingTop: '56.25%', // 16:9
        paddingLeft: '50%',
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <CssBaseline />
            <Container fixed>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', width: '100wh' }} />
                <Box bgcolor="text.secondary">
                <Box display="flex" flexDirection="row" >
                    <Card className={classes.root} >
                        <CardHeader
                            title="COUNTRY"
                            subheader="INDIA"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                
                    </Typography>
                        </CardContent>
                    </Card>&emsp;&emsp;
                <Card className={classes.root}>
                        <CardHeader
                            title="TOTAL"
                            subheader="RECOVERED"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {data.recovered}
                    </Typography>
                        </CardContent>
                    </Card>&emsp;&emsp;
                <Card className={classes.root}>
                        <CardHeader
                            title="TOTAL"
                            subheader="CONFIRMED"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {data.confirmed}
                    </Typography>
                        </CardContent>
                    </Card>
                </Box><br />
                <Box display="flex" flexDirection="row">
                    <Card className={classes.root}>
                        <CardHeader
                            title="TOTAL"
                            subheader="DEATH"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {data.deaths}
                    </Typography>
                        </CardContent>
                    </Card>&emsp;&emsp;
                <Card className={classes.root}>
                        <CardHeader
                            title="TOTAL"
                            subheader="ACTIVE"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {data.active}
                    </Typography>
                        </CardContent>
                    </Card>&emsp;&emsp;
                <Card className={classes.root}>
                        <CardHeader
                            title="LAST"
                            subheader="UPDATED"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {data.lastupdatedtime}
                    </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
            </Container>
            
        </>
    );
}
