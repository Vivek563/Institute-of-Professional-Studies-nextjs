import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function AccordionNav() {
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1">
				{/* <AccordionTrigger>Home</AccordionTrigger> */}
				<div className="py-3 font-medium">Home</div>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>About</AccordionTrigger>
				<AccordionContent>About UOA</AccordionContent>
				<AccordionContent>About IPS</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Center</AccordionTrigger>
				<AccordionContent>Centre of Computer Education</AccordionContent>
				<AccordionContent>Centre of Fashion && Design Technology</AccordionContent>
				<AccordionContent>Centre of Food Technology</AccordionContent>
				<AccordionContent>Centre of Media Studies</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-4">
				<AccordionTrigger>Student</AccordionTrigger>
				<AccordionContent>Syllabus</AccordionContent>
				<AccordionContent>Library</AccordionContent>
				<AccordionContent>Admit Card</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-5">
				<div className="py-3 font-medium">Gallery</div>
			</AccordionItem>
			<AccordionItem value="item-6">
				<div className="py-3 font-medium">Admission</div>
			</AccordionItem>
			<AccordionItem value="item-7">
				<div className="py-3 font-medium">Contact Us</div>
			</AccordionItem>
		</Accordion>
	);
}
