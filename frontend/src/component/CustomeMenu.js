import React from 'react'
import {Card, Menu,CardContent,Typography} from '@material-ui/core'

function CustomeMenu({anchorEl,handleClose,menuDesign,cart,removeCart}) {
    
    return (
        <>
        <Menu
        id="custom-menu"
        anchorEl={anchorEl}
        keepMounted
        className={menuDesign}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          {cart.length <=0 ?
            <p>Nothing Found</p>:
            cart.map(item=>
                <Card onClick={()=>removeCart(item.id)} key={Math.random()}>
                        <CardContent>
                            <Typography variant="h6">{item.title}</Typography>
                            <Typography variant="body2">{item.body}</Typography>
                        </CardContent>
                </Card>
            )
          }
      </Menu>
        </>
    )
}
  export default CustomeMenu