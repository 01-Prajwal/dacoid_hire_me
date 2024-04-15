import React from 'react'
import './first.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
const First = () => {
    return (
        <div className='wrap'>
            <Link to='/signin'>
                <span className='span'>skip</span>
            </Link>
            <div>

                <img className='img' src='https://s3-alpha-sig.figma.com/img/bd9b/3108/cb36b0b2aebaab8d7bad4ecbedf2a369?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X98NRcuTqs-LptbnMh8RugF2~giYfag76Pj4fDaCsYjiOxKMJAmU83mRTuBiDO--rZtkz8tgcqXe--QgR0XDTWiw3v3LSOmG1ty6G6aWVmj~1aqDWqMW0WQ0H9vT1ThnQYUm21xuvgiP31FNPy2JGIPek-rLc2gOU57w5pUncI0dkbC2XG~dHXLhmPJP2RGfxaPzPrXABntLnE6JVJtUKL5SNI3bToqm9hnpecsig~gIAJbwiF6otDKx1SRsB2giqMwv0Oz4N3dklR77Y2IKMrxtdBxRNY4nxASS8iW73pI4sp3CvgngfqAGrKgnSAc1fLXUjFDGSYNR~UwcgfB7Uw__' />
            </div>
            <div className='para'>
                <h3>Track Your Goal</h3>
                <p>Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals</p>
            </div>
            <Link to='/second'>

                <div className="arrow-div">

                    <ArrowForwardIosIcon className='arrow' style={{ fontSize: "50px" }} />
                </div>
            </Link>
        </div>
    )
}

export default First