import React from 'react';

export default function Footer() {
    return (
        <footer className='blue-grey darken-2'>
            <div className='footer-copyright'>
                <div className='container grey-text'>
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className='grey-text text-lighten-4 right'
                        href='https://github.com/antonoptimus/react-shop'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}
