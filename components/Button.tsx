interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
  title: string;
}

const Button = ({ onClick, disabled, title }: ButtonProps) => {
  return (
    <button
      className="bg-blue-500 text-white shadow-md p-2 rounded-lg disabled:bg-gray-500 my-6 w-full md:w-fit"
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
