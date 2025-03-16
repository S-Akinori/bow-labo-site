import React from 'react';
import Container from '@/components/container';

interface PageSectionProps {
    children: React.ReactNode;
}

const PageSection: React.FC<PageSectionProps & React.HTMLAttributes<HTMLDivElement>> = ({ children, className, style, ...props }) => {
    return (
        <div className={`py-8 ${className}`} style={style} {...props}>
            <Container>
                {children}
            </Container>
        </div>
    );
};

export default PageSection;
