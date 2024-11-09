import React from 'react';
import SCSS from './Header.module.scss';
import Button from '../Button/Button';
import Image from 'next/image'
import Logo from '../../public/Logo.svg'
import config from '@payload-config'
import {getPayloadHMR} from '@payloadcms/next/utilities'

export async function Header() {

    const PAYLOAD = await getPayloadHMR({config})
    const HEADER = await PAYLOAD.findGlobal({
        slug: 'header'
    })

    return (
        <header className={SCSS.Container}>
            <nav className={SCSS.Container_Inner__left}>
                {/*TODO: Map categories link*/}
                <Button variant='Link' content='Tech'/>
                <Button variant='Link' content='The Ruin of Men'/>
            </nav>
            <div className={SCSS.Container_Inner__center}>
                <Image src={HEADER.logo.url} alt="s" width={172} height={64} />
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