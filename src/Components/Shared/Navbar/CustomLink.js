// imports
import React from "react";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

// Custom link component
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link className={match ? 'bg-primary px-3 py-1 rounded text-white shadow' : 'bg-secondary px-3 py-1 rounded text-white shadow'}
                // style={{ textDecoration: match ? "underline" : "none", color: match ? "blue" : 'white' }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;