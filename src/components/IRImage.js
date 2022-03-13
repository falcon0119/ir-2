import PropTypes from "prop-types"

const IRImage = ({src, href, width, height}) =>  {
    return <a href={href}><img src = {src} width={width} height={height} /></a>
}

IRImage.propTypes = {
    src : PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
}

IRImage.defaultProps = {
    src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png",
}

export default IRImage;