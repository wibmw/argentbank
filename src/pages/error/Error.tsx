import React from 'react'
import { Link, useLocation } from 'react-router-dom'

/**
 * React Component: Error Page
 *
 * @module
 * @returns {*}
 */
const Error = () => {
  return (
    <React.Fragment>
      {/** *********** Error 404 section ******************/}
      <section id='error404'>
        {/** *********** Error Title ******************/}
        <h1>404</h1>
        {/** *********** Error Message ******************/}
        <h2>{'Oups! La page que vous demandez n\'existe pas.'}</h2>
        {/** *********** Link to Home page ******************/}
        <Link to={'/'}>
          <u>Retourner à la page d’accueil</u>
        </Link>
      </section>
    </React.Fragment>
  )
}
export default Error