import * as React from "react";
import colleges from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectCollege() {
  return (
    <Select>
      <SelectTrigger className="outline-[#3D408A] focus:outline-[#3D408A]">
        <SelectValue
          placeholder="Select College"
          className="focus:outline-[#3D408A] outline-[#3D408A]"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {colleges.map((clg) => (
            <SelectItem
              key={clg.id}
              value={clg.name}
              className="focus:outline-none"
            >
              {clg.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
