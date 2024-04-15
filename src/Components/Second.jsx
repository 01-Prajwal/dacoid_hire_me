import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const Second = () => {
  return (
    <div className='wrap'>
    <Link to='/signin'>
        <span className='span'>skip</span>
    </Link>
    <div>

        <img className='img' src='https://s3-alpha-sig.figma.com/img/9958/8bb7/dbf14a6d26ec54e2ba9e71eaef184f6b?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wr3KQ~d1yUj8ihEHiaH7fqq2Bx87CveYvGg5WfoTnraj4r5QDk9Rs2g7PQ0NkiePRuEs015f2Scvkp9djImftRb7vIN0Q436lUOUi2Vz0HMN2YLBsrUwlsxwHK4~i~GT7KGdOrwjVV045VwrAdEFTsIHU5OFwbyLFidv7viJwMQL~Dj1dO58aVn70O0qclkztMmmGqgp5sbPUTTBET0FqbqH2YDMASEQdPn-Eamptqvrv8K6eu-nsZ5Tr9lKIAKKP4MB5iSZncm46y5fepqMHCd~cdCg13TMWcF-QtyOF1YrT3NN~w4WQDoFpdPZYcVqBqLyN6pDrkUSf-~AcMV5VQ__' />
    </div>
    <div className='para'>
        <h3>Track Your Goal</h3>
        <p>Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals</p>
    </div>
    <Link to='/signin'>

        <div className="arrow-div">

            <ArrowForwardIosIcon className='arrow' style={{ fontSize: "50px" }} />
        </div>
    </Link>
</div>
  )
}

export default Second