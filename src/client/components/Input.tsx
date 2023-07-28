'use client';

interface InputProps {
  placeHolder: string;
  type?: "text" | "password";
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  placeHolder,
  type = "text",
  name,
  onChange,
}: InputProps) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  }

  return (
    <label className="w-full">
      <input
        className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-background text-base"
        type={type}
        placeholder={placeHolder}
        onChange={handleChange}
        name={name}
      />
    </label>
  )
}
