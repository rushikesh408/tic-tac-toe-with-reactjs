import React from 'react'
import {FaTimes,FaPen,FaRegCircle} from 'react-icons/fa'

const Icon = ({name})=>{
    switch (name) {
        case 'cicle':
             return <FaRegCircle className="icons"/>
             break;
        case 'cross':
             return <FaTimes className="icons"/>
             break; 

        default:
            return <FaPen className="icons"/>
            break;
    }
}

export default Icon;