import { Button } from '@material-ui/core'
import React from 'react'

export default function CustomButton(props) {

        const {children,background="#37a000",color="#fff",padding="7.5px, 30px"} = props

    return (
        <>
            <Button variant="contained"
                style={{
                padding: padding,
                backgroundColor: background,
                color: color,
                textTransform: "capitalize",
                }}
            >
                {children}
            </Button> 
        </>
    )
}
