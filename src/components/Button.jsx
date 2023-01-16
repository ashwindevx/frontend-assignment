const Button = ({ className, children, link }) => {
  return (
    <a href={link} className={`cursor-pointer rounded ${className}`}>
      {children}
    </a>
  );
};

export default Button;
