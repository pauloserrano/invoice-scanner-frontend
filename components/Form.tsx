"use client"

import { FormEvent } from "react"
import { FileInput, Button } from "@/components"

export const Form = async () => {

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      const body = {}
      
      const res = await fetch('/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })

      const data = await res.json()
      console.log(data)
      
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-[500px]"
    >
      <FileInput />
      <Button label="Submit" type="submit">Submit</Button>
    </form>
  )
}
