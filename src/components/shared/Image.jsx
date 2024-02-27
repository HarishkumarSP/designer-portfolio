const Image = ({ src, alt, width, height, ...rest }) => {
  return <img src={src} alt={alt} {...{ width, height }} {...rest} />;
};

export default Image;
