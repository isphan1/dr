import React from 'react'
import CustomModal from './CustomModal'
import Dashboard from './Dashboard'

export default function JobModal(props) {

    // const {modalOpen,closeModal,item} = props.location.modalProps

    return (
        <div>
            <Dashboard/>
            <CustomModal {...props}/>    
        </div>
    )
}
