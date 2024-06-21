interface ModalInputProps {
  label: string
  placeholder?: string
  type?: string
  name: string
  value: string
  disabled?: boolean
  required?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const ModalInput = ({ disabled, label, name, type, required, value, placeholder, onChange }: ModalInputProps) => {
  return (
    <div className="w-full relative">
      <input
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full p-4 font-light bg-white text-black border-2 rounded-md outline-none transition
        ${disabled && "disabled:opacity-70 disabled:cursor-not-allowed"}
        `}
        required={required}
      />
      <label className={`absolute text-md font-light pointer-events-none duration-150`}>
        {label}
      </label>
    </div>
  )
}
