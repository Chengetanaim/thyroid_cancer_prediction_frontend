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

export function PredictForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="p-8 rounded-xl bg-amber-300 text-black hover:bg-opacity-35">
          <ChartLine />
          PREDICT NOW
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-200">
        <DialogHeader>
          <DialogTitle>Thyroid Cancer Prediction</DialogTitle>
          <DialogDescription>
            Predict Risk of Malignant Thyroid Nodules Based on Clinical,
            Biochemical, Ultrasound with or without Cytologic Features
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Predict</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
