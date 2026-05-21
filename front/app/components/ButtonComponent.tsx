interface ButtonComponentProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonComponent = ({
  children,
  type = "button",
  onClick,
  disabled = false,
}: ButtonComponentProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
