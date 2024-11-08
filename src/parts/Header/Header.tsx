import React from 'react';
import SCSS from './Header.module.scss';
import Button from '../Button/Button';
import Image from 'next/image'
import Logo from '../../public/Logo.svg'
import payload from 'payload'
import { CollectionAfterChangeHook } from 'payload'

const Header = () => {

    return (
        <header className={SCSS.Container}>
            <nav className={SCSS.Container_Inner__left}>
                {/*TODO: Map categories link*/}
                <Button variant='Link' content='Me Contrate'/>
                <Button variant='Link' content='Me Contrate'/>
                <Button variant='Link' content='Me Contrate'/>
            </nav>
            <div className={SCSS.Container_Inner__center}>
                <Image src={Logo} alt="s" width={172} height={64} />
            </div>
            <div className={SCSS.Container_Inner__right}>
                <Button variant='Link' content='@twitter/x'/>
                <Button variant='Link' content='@linkedin'/>
                <Button variant='Link' content='@instagram'/>
                <Button variant='Primary' content='Hire me'/>
            </div>
        </header>
    );
};

export default Header;