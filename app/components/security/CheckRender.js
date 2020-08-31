
const CheckRender = ({ allowed, children }) =>  allowed ? children : (null) ;

CheckRender.defaultProps = { allowed: false };

export default CheckRender;