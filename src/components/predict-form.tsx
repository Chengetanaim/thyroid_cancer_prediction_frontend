import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { ChartLine } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function PredictForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="p-8 rounded-xl bg-amber-300 text-black hover:bg-opacity-35">
          <ChartLine />
          PREDICT NOW
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-gray-200">
        <DialogHeader>
          <DialogTitle>Thyroid Cancer Prediction</DialogTitle>
          <DialogDescription>
            Predict Risk of Malignant Thyroid Nodules
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Family History
            </Label>
            <Select>
              <SelectTrigger className="w-[400px]">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Family History</SelectLabel>
                  <SelectItem value="apple">
                    Yes, I have relatives who previously had it
                  </SelectItem>
                  <SelectItem value="banana">
                    No, I do not know any relatives who've had it
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Radiation Exposure
            </Label>
            <Select>
              <SelectTrigger className="w-[400px]">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Radiation Exposure</SelectLabel>
                  <SelectItem value="apple">Yes</SelectItem>
                  <SelectItem value="banana">No</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Iodine Deficiency
            </Label>
            <Select>
              <SelectTrigger className="w-[400px]">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Iodine Deficiency</SelectLabel>
                  <SelectItem value="apple">Yes</SelectItem>
                  <SelectItem value="banana">No</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Smoking
            </Label>
            <Select>
              <SelectTrigger className="w-[400px]">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Are you a smoker?</SelectLabel>
                  <SelectItem value="apple">Yes</SelectItem>
                  <SelectItem value="banana">No</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Nodule Size
            </Label>
            <Input
              id="username"
              value="@peduarte"
              className="col-span-3 w-[400px]"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-amber-300 text-black rounded-xl hover:bg-black hover:text-white"
          >
            Predict
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
