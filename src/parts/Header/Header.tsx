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
                {
                    HEADER.links.map((link) => {
                        return (
                            <Button variant='Link' content={link.page.categoryTitle} />
                        );
                    })
                }
            </nav>
            <div className={SCSS.Container_Inner__center}>
                <Image src={HEADER.logo.url} alt={HEADER.logo.alt} width={172} height={64}/>
            </div>
            <div className={SCSS.Container_Inner__right}>
                {
                    HEADER.socialMedia.map((link) => {
                        return (
                            <Button variant='Link' content={`@${link.socialMediaLabel}`} />);
                    })
                }
                <Button variant='Primary' content={HEADER.mainButtonText}/>
            </div>
        </header>
    );
};

export default Header;