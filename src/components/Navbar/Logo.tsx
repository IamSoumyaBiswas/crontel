import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link
            href="/"
            className="text-primary lg:text-xl md:text-base text-xl lg:font-bold font-medium"
            title="Crontel - Leading IT Services Company"
            aria-description='IT service based'
            aria-label="Crontel Logo - Navigate to Home"
        >
            <span>Crontel</span>
        </Link>
    );
};

export default Logo;

