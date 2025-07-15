import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Checkbox id="terms" className="cursor-pointer" />
        <Label htmlFor="terms" className="cursor-pointer">
          Accept terms and conditions
        </Label>
      </div>
    </div>
  )
}
