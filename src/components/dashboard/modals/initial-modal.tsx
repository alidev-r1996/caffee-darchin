"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type modalFormProps = {
  title: string;
  label: string;
  description?: string;
  children: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
  buttonType?: "link" | "default" | "destructive" | "danger" | "outline" | "secondary" | "ghost" | "primary";
}

const FormModal = ({ title, label, description,children, open, onClose, buttonType  }: modalFormProps) => {

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button variant={buttonType ?? "primary"} className="text-xs md:text-sm">{title} </Button>
      </DialogTrigger>
      <DialogContent className="w-full !max-h-max overflow-y-auto border shadow mt-16">
        <DialogHeader>
          <DialogTitle className="font-bold text-xl text-center"> {label}</DialogTitle>
          <DialogDescription className="text-center my-4">
            {description}
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;
