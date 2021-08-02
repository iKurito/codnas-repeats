import { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import ReactLoading from 'react-loading'
import data from '../../data/repeats.json'

const Estimate = ({ history }) => {
  const [email, setEmail] = useState('')
  const params = useParams()
  const [loading, setLoading] = useState(false)
  const [verified, setVerified] = useState(false)
  const [checked, setChecked] = useState(false)

  const { id } = params

  useEffect(() => {
    console.log(id)
    const pdbId = `${id.substring(0, 4).toLowerCase()}${id.substring(4, 6)}`
    console.log(pdbId)
    if (data.some((item) => item.pdb_id === pdbId)) {
      const idx = data.findIndex((item) => item.pdb_id === pdbId)
      console.log(data[idx])
      if (data[idx].num_conf < 10) {
        setChecked(true)
      } else {
        console.log('correr en background')
      }
      setLoading(true)
      setVerified(true)
    } else {
      setLoading(true)
    }
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    if (!regex.test(email)) {
      console.log('ERROR')
    } else {
      const timer = setTimeout(() => history.push('/home'), 2000)
      return () => clearTimeout(timer)
    }
  }

  return (
    <Fragment>
      <div className="pt-6 pb-40">
        <div className="px-4 sm:px-16 lg:px-32 xl:px-48 2xl:px-60 mx-auto">
          <div className="max-w-full px-1 mx-auto lg:px-4">
            {!loading && (
              <div className="pt-12 space-y-4">
                <div id="loader" style={{ textAlign: '-webkit-center' }}>
                  <ReactLoading type="spin" color="#d0646c" />
                </div>
                <div className="text-center">
                  <span>Loading...</span>
                </div>
              </div>
            )}
            {verified ? (
              checked ? (
                <h1>Buscar en base de datos</h1>
              ) : (
                <div className="py-5 sm:py-10 space-y-4">
                  <h1 className="text-gray-700 text-3xl md:text-4xl font-bold text-left">Request</h1>
                  <h2>Conformational diversity analysis will take time.</h2>
                  <h2>Enter your email and we will send you a prompt reply when the analysis is finished.</h2>
                  <form onSubmit={(e) => onSubmit(e)} className="space-y-4">
                    <input
                      className="block appearance-none border border-gray-300 w-full sm:w-64 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
                      placeholder="your-email@example.com"
                      type="email"
                      name="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      className="px-4 py-2 bg-primary-dark rounded hover:bg-opacity-90 text-white border-1"
                      onClick={(e) => onSubmit(e)}
                    >
                      Send
                    </button>
                  </form>
                </div>
              )
            ) : (
              <div className="py-5 sm:py-10 space-y-4">
                <h1 className="text-gray-700 text-3xl md:text-4xl font-bold text-left">Results Not Found</h1>
                <h2>The results you are looking for are not found.</h2>
                <h2>Try searching again or use the Go Back button below.</h2>
                <button
                  className="px-4 py-2 bg-primary-dark rounded hover:bg-opacity-90 text-white border-1"
                  onClick={() => history.push('/home')}
                >
                  Go back home
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

Estimate.propTypes = {
  history: PropTypes.any.isRequired,
}

export default Estimate
