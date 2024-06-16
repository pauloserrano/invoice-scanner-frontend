interface FileInputProps {
  [prop: string]: any
}

export const FileInput = ({ ...otherProps }: FileInputProps = {}) => {
  return (
    <input 
      type='file'
      className="flex items-center justify-center p-4 border border-dashed border-white/50 rounded-lg cursor-pointer"
      {...otherProps}
    />
  )
}
