import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { TiThMenu } from "react-icons/ti";
import { AccordionNav } from "../atom/Accordion";

export function SheetBar() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<TiThMenu />
			</SheetTrigger>
			<SheetContent>
				<SheetHeader className="mt-5">
					<SheetTitle>Institute of Professional Studies</SheetTitle>
					<SheetDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit.</SheetDescription>
				</SheetHeader>
				<div className="grid gap-4 py-4">
					<AccordionNav />
				</div>
			</SheetContent>
		</Sheet>
	);
}
