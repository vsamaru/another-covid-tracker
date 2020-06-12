import React from 'react'
import { Card, Typography, CardContent, Grid } from '@material-ui/core'

import './Numbers.css'

const Numbers = ({ data: { cases, deaths, recovered } }) => {
    return (
        <div>
            <Grid container spacing={2} justify="center">
                <Grid item component={Card} className="card">
                    <CardContent>
                        <Typography >Cases</Typography>
                        <Typography variant="h4">{ cases }</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className="card">
                    <CardContent>
                        <Typography >Deaths</Typography>
                        <Typography variant="h4">{ deaths }</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className="card">
                    <CardContent>
                        <Typography >Recoverd</Typography>
                        <Typography variant="h4">{ recovered }</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
        // <div>
        //     <h1>Cases</h1>
        //     <h1>Deaths</h1>
        //     <h1>Recoverd</h1>
        // </div>
    )
}

export default Numbers