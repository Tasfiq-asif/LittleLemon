import PropTypes from "prop-types";

const CustomButton = ({
  children,
  variant = "primary",
  onClick,
  className = "",
}) => {
  CustomButton.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["primary", "outline"]),
    onClick: PropTypes.func,
    className: PropTypes.string,
  };
  const baseStyles =
    "px-8 py-3 font-semibold rounded-full transition-all duration-200";

  const variants = {
    primary:
      "bg-yellow-400 hover:bg-yellow-500 text-gray-900 transform hover:scale-105",
    outline:
      "border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
