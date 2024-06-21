"use client"

import { useState } from "react"
import { Invoice, UploadForm, EditForm } from "@/components"

export const FormContainer = () => {
  const [invoice, setInvoice] = useState({} as Invoice)

  return (
    <>
      <UploadForm
        setInvoice={setInvoice}
      />

      <EditForm 
        invoice={invoice}
        setInvoice={setInvoice}
      />
    </>
  )
}
