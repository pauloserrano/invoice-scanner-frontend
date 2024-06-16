"use client"

import { ChangeEvent, FormEvent, useState } from "react"
import { FileInput, Button } from "@/components"

export const Form = () => {
  const [file, setFile] = useState<File>()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    if (!file) {
      // TODO Add Toast
      return
    }
    
    try {
      const formData = new FormData()
      formData.append('file', file)

      const res = await fetch(process.env.NEXT_PUBLIC_DB_BASE_URL + '/invoice/upload', {
        method: 'POST',
        //headers: { 'Content-Type': 'multipart/form-data' },
        body: formData
      })

      const data = await res.json()
      console.log(data)
      
    } catch (error) {
      console.error(error)
    }
  }
  
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return
    }

    console.log(e.target.files)
    setFile(e.target.files[0])
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-[500px]"
    >
      <FileInput 
        name="file"
        accept=".jpg, .jpeg, .png, .pdf"
        onChange={handleChange}
      />
      <Button label="Submit" type="submit">Submit</Button>
    </form>
  )
}
