import './styles.css'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react';
export default function MobileNavbar(){
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return(
        <nav>
            <FaBars/>
        </nav>
    )
}