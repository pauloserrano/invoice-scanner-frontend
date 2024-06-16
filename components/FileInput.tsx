interface FileInputProps {
  id?: string
  name?: string
}

export const FileInput = ({ id, name }: FileInputProps = {}) => {
  return (
    <input 
      type='file' 
      id={id} 
      name={name} 
      className="flex items-center justify-center p-4 border border-dashed border-white/50 rounded-lg cursor-pointer"
    />
  )
}
