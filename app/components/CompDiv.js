import React from 'react';

const compdiv = (props) => (
    <div>
        {props.children}
    </div>
);

compdiv.propTypes = {
    // compl: React.PropTypes.bool.isRequired,
    children: React.PropTypes.element
};

export default compdiv;
