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
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

const InitialModal = () => {
  const [server, setServer] = useState({ name: "", image: "" });

  const handleSubmit = () => {};

  return (
    <Dialog open>
      <DialogTrigger asChild>
        <Button variant="outline">Create Server</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border shadow">
        <DialogHeader>
          <DialogTitle className="font-bold text-xl">Create Server</DialogTitle>
          <DialogDescription>
            Give your Server a personality with a name and an image. You can
            always change it later.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-1 ">
          <div className="flex flex-col gap-1">
            <InputText
              label="Server Name"
              name="name"
              placeholder="Enter Server Name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <UploadFile
              onChange={(img) => setServer({ ...server, image: img })}
              img={server.image}
            />
          </div>
        </form>

        <DialogFooter>
          <Button disabled={server.name.trim().length == 0 || server.image.trim().length == 0} onClick={handleSubmit} variant="primary">
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InitialModal;
