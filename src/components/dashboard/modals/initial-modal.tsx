"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InputText from "../../ui/inputText";
import UploadFile from "@/components/upload";
import { useState } from "react";

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
        <Button variant={buttonType ?? "primary"}>{title} </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border shadow">
        <DialogHeader>
          <DialogTitle className="font-bold text-xl text-center"> {label}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;
