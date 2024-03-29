import React, { Fragment, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Search from './Search'
import LogoPucp from '../../assets/img/logo-pucp.webp'
import LogoUnq from '../../assets/img/logo-unq.webp'
import { BsBook } from 'react-icons/bs'
// Redux
import { useDispatch } from 'react-redux'
import { cleanRepeatDetailsAction } from '../../actions/repeatActions'
import { cleanEstimateDetailsAction } from '../../actions/estimateActions'

const Home = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    const cleanRepeatDetails = () => dispatch(cleanRepeatDetailsAction())
    cleanRepeatDetails()
    const cleanEstimateDetails = () => dispatch(cleanEstimateDetailsAction())
    cleanEstimateDetails()
  }, [])

  return (
    <Fragment>
      <section id="top" className="bg-gray-100">
        <div className="intro">
          <div className="overlay">
            {/* <div className="p-16 px-4 sm:px-20 sm:py-28 md:px-24 md:py-32 lg:px-54 xl:px-72 2xl:px-96"> */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-20 sm:py-28 md:px-24 md:py-32 lg:px-32">
              <div className="bg-white shadow-2xl rounded-xl">
                <div className="text-center p-4 sm:p-8">
                  <h1 className="text-lg leading-5 sm:text-2xl sm:leading-6 md:text-3xl md:leading-7 font-bold text-gray-3 mb-4">
                    Tool for the analysis of conformational diversity in repeating protein structures
                  </h1>
                  <Search />
                  <br />
                  <p className="text-xs leading-3 sm:text-lg sm:leading-5 md:text-xl md:leading-6 font-medium text-primary-dark">
                    Enter a repeating protein chain to look up its conformational diversity information in the database
                    or estimate its conformational diversity by adding its repeat region
                  </p>
                  <br />
                  <button
                    className="py-2 px-5 text-white font-medium rounded-md cursor-pointer bg-primary-dark border-2 border-primary-dark hover:bg-primary-light focus:outline-none"
                    onClick={() => history.push('/tutorial')}
                  >
                    <BsBook className="inline mr-2" />
                    <span className="text-xs leading-3 sm:text-sm sm:leading-5 md:leading-6 font-medium text-white">
                      How to evaluate?
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-40 sm:pb-16">
        {/* <div className="max-w-7xl mx-auto py-12 px-8 sm:px-20 sm:py-28 md:px-24 md:py-32 lg:px-54 xl:px-72 2xl:px-96"> */}
        <div className="max-w-7xl mx-auto px-8 py-12 sm:px-20 sm:py-28 md:px-24 md:py-32 lg:px-32">
          <div className="text-center mb-10">
            <h1 className="text-lg leading-5 sm:text-2xl sm:leading-6 md:text-3xl md:leading-7 font-bold text-gray-3">
              Collaborating universities
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div title="Pontificia Universidad Católica del Perú">
              <a href="https://www.pucp.edu.pe/" target="_blank" rel="noreferrer">
                <img src={LogoPucp} alt="pucp" className="w-80 sm:w-96" />
              </a>
            </div>
            <div title="Universidad Nacional de Quilmes">
              <a href="http://www.unq.edu.ar/" target="_blank" rel="noreferrer">
                <img src={LogoUnq} alt="unq" className="w-80 sm:w-96" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home
