import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function DiagnosisForm() {
  return (
    <div className="mx-auto max-w-md space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Patient Diagnosis</h1>
        <p className="text-gray-500 dark:text-gray-400">Upload your patient's diagnosis, disease, and medication.</p>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="patient-name">Patient Name</Label>
            <Input id="patient-name" placeholder="Enter patient name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="patient-age">Patient Age</Label>
            <Input id="patient-age" placeholder="Enter patient age" required type="number" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="diagnosis">Aadhar Number</Label>
          <Input id="aadharNumber" placeholder="Enter Patient's Aadhar Number" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="disease">Disease</Label>
          <Input id="disease" placeholder="Enter disease" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="medication">Medication</Label>
          <Input id="medication" placeholder="Enter , seperated Medications" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="pdf-upload">Upload PDF (Optional)</Label>
          <Input accept="application/pdf" id="pdf-upload" type="file" />
        </div>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}
