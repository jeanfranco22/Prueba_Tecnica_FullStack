interface InputComponentProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent = ({
  type = "text",
  placeholder,
  value,
  onChange,
}: InputComponentProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border p-2 rounded"
    />
  );
};

export default InputComponent;
