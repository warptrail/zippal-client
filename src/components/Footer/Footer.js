import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

class Footer extends Component {
    

    
    render() {
        return (
            <div className='Footer_Container'>
                <nav className='Footer_Nav_Container'>
                    <Link to='/'>Homepage</Link>
                    <Link to='/'>About</Link>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Policy</Link>
                    <a href='https://github.com/thinkful-ei-quail/zippal-client' target='_blank' rel='external noopener noreferrer'><FontAwesomeIcon className='Footer__github' icon={['fab','github']} alt='link to client github repo'/></a>
                </nav>
            </div>
        )
    }
}

export default Footer