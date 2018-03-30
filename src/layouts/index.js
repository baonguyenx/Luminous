import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import './index.css'


const ListLink = props => 
  <li style= {{ display: 'incline-block', overflow: 'hidden', padding:'5px'}}>
    <Link style={{textDecoration: 'none', color: 'rgb(249, 250, 252)',}}
          to={props.to}>
      {props.children}
    </Link>
  </li>


const TemplateWrapper = ({ children }) => (
  <div>
    {/*Document head, Helmet*/}
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    
    <div className='container'>

      <nav>
        <div className='header'>
          <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
            <h1>It's Nguyen.</h1>
          </Link>
          <p> Code. Science. Brag.</p>
        </div>



        <div className='navlinks'>
          <ul style={{ listStyle: 'none', float: 'left'}}>
            <ListLink to ='/Code/'> Code and Tech </ListLink>
            <ListLink to ='/Science/'> Science </ListLink>
            <ListLink to ='/Personal/'> Personal </ListLink>
          </ul>
        </div>


        <div className='footer'>
        </div>



      </nav>

      <section>
        {children()}
      </section>

    </div>

  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
