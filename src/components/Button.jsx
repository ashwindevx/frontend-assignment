const Button = ({ className, children, link }) => {
  return (
    <a
      href={link}
      className={`font-galano font-normal cursor-pointer rounded ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;
