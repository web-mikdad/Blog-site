

import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
export function SearchBar() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="rounded-full" variant="outline">
            <Search/></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] ">
          <DialogHeader>
            <DialogTitle>Search in Blog</DialogTitle>
            </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3 ">
              <Input id="username-1" name="username"placeholder="Search hear..." />
            </div>
          </div>
          <DialogFooter className="mr-auto">
            <DialogClose asChild>
              <Button className="bg-white text-black align-center" variant="outline">Cancel</Button>
            </DialogClose>
            <Button className="bg-black text-white align-center" type="submit">Search</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
