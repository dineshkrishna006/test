import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Signup() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="College Name">Mobile Number</Label>
      <Input type="email" id="email" placeholder="Mobile number"className="outline-[#3D408A]" />
    </div>
  )
}
