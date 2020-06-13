import React from 'react'
import { Card, Typography, CardContent, Grid } from '@material-ui/core'

import './Numbers.css'

const Numbers = ({ data: { cases, deaths, recovered } }) => {
    if(cases) { 
        return (
        <div>
            <Grid container spacing={2} justify="center">
                <Grid item component={Card} className="card">
                    <CardContent>
                        <Typography >Cases</Typography>
                        <Typography variant="h4">{ cases.toLocaleString('en') }</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className="card">
                    <CardContent>
                        <Typography >Deaths</Typography>
                        <Typography variant="h4">{ deaths.toLocaleString('en') }</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className="card">
                    <CardContent>
                        <Typography >Recoverd</Typography>
                        <Typography variant="h4">{ recovered.toLocaleString('en') }</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
        )}
        else {
            return <div>Loading</div>
        }
    
}

export default Numbers