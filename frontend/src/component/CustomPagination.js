import { Button } from '@material-ui/core'
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import React from 'react'


export default function CustomPagination({totalLeads,postPerPage,paginate}) {

    const pageNumbers = []

    for(let i=1;i <=Math.ceil(totalLeads/postPerPage);i++){
        pageNumbers.push(i)
    }

    return (
        <>
        <Button>
          <ArrowBack/>
        </Button>

          {pageNumbers.map(number=>(
              <Button
                color="primary"
                variant="outlined"  
                key={number} 
                onClick={()=>paginate(number)}
                style={{margin:"0px 7px"}}
              >
                {number}
              </Button>
          ))}  
          <Button>
            <ArrowForward/>
          </Button>

          {/* <Pagination count={pageNumbers.length} onChange={()=>paginate(1)}/> */}
        </>
    )
}
