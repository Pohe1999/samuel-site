import { FaInstagram, FaFacebookF, FaTiktok, FaTwitter } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";

const Social = () => {

    return(
        <div name="social" className=''>
            {/* Social icons */}
            <div className='hidden sm:flex fixed flex-col top-[35%] left-0'>
                <ul>
                <li className='w-[250px] h-[55px] flex justify-between items-center ml-[-200px] hover:ml-[-180px] duration-300 bg-blue-600 rounded-lg'>
                    <a className='flex justify-end w-full text-white font-semibold' href="https://www.facebook.com/samuelhernandez2021/?locale=es_LA" target='_blank'><FaFacebookF className="text-4xl me-2" /></a>
                </li>
                <li className='w-[250px] h-[55px] flex justify-between items-center text-center  ml-[-200px] hover:ml-[-180px] duration-300 rounded-lg border-2 border-slate-100 bg-white'>
                    <a className='flex justify-end w-full text-black pe-2' href="https://x.com/hrnndzsamuel?s=21&t=LmBZZvLda0Lr5wQIwnX91Q" target='_blank'><FaSquareXTwitter className="text-4xl" /></a>
                </li>
                <li className='w-[250px] h-[55px] flex justify-between items-center text-center  ml-[-200px] hover:ml-[-180px] duration-300 background rounded-lg'>
                    <a className='flex justify-end w-full text-gray-100 pe-2' href="https://www.instagram.com/hrnndzsamuel/" target='_blank'><FaInstagram className="text-4xl" /></a>
                </li>
                <li className='w-[250px] h-[55px] flex justify-between items-center text-center  ml-[-200px] hover:ml-[-180px] duration-300 bg-black rounded-lg'>
                    <a className='flex justify-end w-full text-gray-100 pe-2' href="https://www.tiktok.com/@samuelhernandez2024?_t=8qz9TJQk1MU&_r=1" target='_blank'><FaTiktok className="text-4xl" /></a>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Social