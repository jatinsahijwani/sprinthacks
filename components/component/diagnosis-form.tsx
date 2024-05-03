import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function DiagnosisForm() {
  return (
    <div className="space-y-6 w-[47vw] border border-gray-600 rounded-xl">
    <div className="space-y-2 text-center m-6">
      <h1 className="text-3xl font-bold text-blue-400" >Patient Diagnosis</h1>
      <p className="text-gray-500 dark:text-gray-400">Upload your patient's diagnosis, disease, and medication.</p>
    </div>
    <form className=" grid grid-cols-2 gap-4 m-[5vh]">
      <div className="gap-4">
        <div className=" w-[45vh]">
          <Label htmlFor="patient-name">Patient Name</Label>
          <Input id="patient-name" placeholder="Enter patient name" required />
        </div>
        <div className=" w-[45vh] mt-3">
          <Label htmlFor="patient-age">Patient Age</Label>
          <Input id="patient-age" placeholder="Enter patient age" required type="number" />
        </div>
      </div>
      <div className=" w-[45vh]">
        <Label htmlFor="diagnosis">Aadhar Number</Label>
        <Input id="aadharNumber" placeholder="Enter Patient's Aadhar Number" required />
      </div>
      <div className=" w-[45vh]">
        <Label htmlFor="disease">Disease</Label>
        <Input id="disease" placeholder="Enter disease" required />
      </div>
      <div className="w-[45vh]">
        <Label htmlFor="medication">Medication</Label>
        <Input id="medication" placeholder="Enter, seperated Medications" required />
      </div>
      <div className="w-[45vh]">
        <Label htmlFor="pdf-upload">Upload PDF (Optional)</Label>
        <Input accept="application/pdf" id="pdf-upload" type="file" />
      </div>

      <div className="w-[10vw] mt-[4vh] rounded-xxl">
      <Button className=" bg-green-500" type="submit">
        Submit
      </Button >

      </div>
      
    </form>
    <div className="text-center m-6">
      </div>
  </div>
  
  )
}
