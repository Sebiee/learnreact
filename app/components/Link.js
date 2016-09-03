import React, { PropTypes } from 'react';

const Link = ({ active, children, onClick }) => {
    if(active) {
        return <span>{children}</span>;
    }

    return (
        <a href="#"
            onClick={e => {
                e.preventDefault(); // Prevent a link from opening the url.
                onClick();
            }}
        >
            {children}
        </a>
        );
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;
