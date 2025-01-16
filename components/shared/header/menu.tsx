import { Button } from "@/components/ui/button"
import Link from "next/link";
import { EllipsisVertical, ShoppingCart } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import UserButton from "./user-button";

const Menu = () => {
    return ( <div className='flex justify-end gap-3'>
        <nav className="hidden md:flex w-full max-w-xs gap-1">
            <Button asChild variant='ghost' className='mr-2'>
                <Link href='/cart'>
                    <ShoppingCart /> Cart
                </Link>
            </Button>
            <UserButton />
        </nav>
        <nav className='md:hidden focus-visible:ring-0 focus-visible:ring-offset-0'>
            <Sheet>
                <SheetTrigger className='align-middle'>
                    <EllipsisVertical />
                </SheetTrigger>
                <SheetContent className='flex flex-col items-start'>
                    <SheetTitle>Menu</SheetTitle>
                    <Button asChild variant='ghost'>
                        <Link href='/cart'>
                            <ShoppingCart /> Cart
                        </Link>
                    </Button>
                    <UserButton />
                    <SheetDescription></SheetDescription>
                </SheetContent>
            </Sheet>
        </nav>
    </div> );
}
 
export default Menu;
