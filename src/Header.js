import {FaFacebook, FaSearch, FaFacebookMessenger, FaBell} from 'react-icons/fa';
import { IoMdArrowDropdown } from "react-icons/io";
export default function(){
    return(
        <header className='shadow'>
        <div className='headerCont leftHeader'>
          <div className='iconHeader' id='facebook'><FaFacebook/></div>
          <div className='iconHeader'><FaSearch/></div>
        </div>
        <div className='headerCont rightHeader'>
          <div className='iconHeader' id='plus'>+</div>
          <div className='iconHeader'><FaFacebookMessenger/></div>
          <div className='iconHeader' id='bell'><FaBell/><span className='notificationNumber'>2</span></div>
          <div className='iconHeader'><IoMdArrowDropdown/></div>
        </div>
      </header>
    );
}