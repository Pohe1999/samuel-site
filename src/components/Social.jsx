import { FaInstagram, FaFacebookF, FaWikipediaW, FaTwitter } from "react-icons/fa"
import SendMessage from "./SendMessage"

const Social = () => {

    return(
        <div name="social" className=''>

            {/* Social icons */}
            <div className=' sm:flex fixed flex-col top-[35%] left-0'>
                <ul>
                <li className='w-[250px] h-[55px] flex justify-between items-center ml-[-200px] hover:ml-[-180px] duration-300 bg-blue-600 rounded-lg'>
                    <a className='flex justify-end w-full text-white font-semibold' href="https://www.facebook.com/samuelhernandez2021/?locale=es_LA" target='_blank'><FaFacebookF className="text-4xl me-2" /></a>
                </li>
                <li className='w-[250px] h-[55px] flex justify-between items-center text-center  ml-[-200px] hover:ml-[-180px] duration-300 background rounded-lg'>
                    <a className='flex justify-end w-full text-gray-100 pe-2' href="https://www.instagram.com/hrnndzsamuel/" target='_blank'><FaInstagram className="text-4xl" /></a>
                </li>
                <li className='w-[250px] h-[55px] flex justify-between items-center ml-[-200px] hover:ml-[-180px] duration-300 bg-green-500 text-white rounded-lg'>
                    <p>WhatsApp</p><SendMessage  />
                </li>
                <li className='w-[250px] h-[55px] flex justify-between items-center text-center  ml-[-200px] hover:ml-[-180px] duration-300 rounded-lg border-2 border-black'>
                    <a className='flex justify-end w-full text-black pe-2' href="https://es.wikipedia.org/wiki/Samuel_Hern%C3%A1ndez_Cruz" target='_blank'><FaWikipediaW className="text-4xl" /></a>
                </li>
                </ul>
            </div>
    </div>
    )
}

export default Social
