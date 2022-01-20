// import React from "react";

// interface refType {
//     ref:React.RefObject<HTMLDivElement>
// }
// export default function Footer((props,ref:refType)) {
//     return(
//         <div className="footer" ref={props.ref}>
//             footer
//         </div>
//     )
// }

import React from "react";

const Footer = React.forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
    return (
        <div className="footer" ref={ref}>
            footer
        </div>
    )
});

export default Footer;