import PropTypes from "prop-types"

const IRImage = ({ src, href, width, height }) => {
    return <a href={href}><img src={src} width={width} height={height} style={{padding:12}}/></a>
}

IRImage.propTypes = {
    src: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
}

IRImage.defaultProps = {
    width: 480,
    height: 270,
}

export default IRImage;