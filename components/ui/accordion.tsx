import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";

import { cn } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "lucide-react";

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col gap-3", className)}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("overflow-hidden", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex cursor-pointer">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger cursor-pointer flex flex-1 items-center justify-between gap-4 rounded-[4px] bg-[#F5F5F5] px-4 py-4 text-left font-poppins text-[13px] font-semibold text-[#1A1A1A] transition-colors outline-none hover:bg-[#EDEDED] focus-visible:ring-2 focus-visible:ring-ring/50 aria-disabled:pointer-events-none aria-disabled:opacity-50 lg:px-6 lg:py-5 lg:text-[15px] **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-[#1A1A1A] lg:**:data-[slot=accordion-trigger-icon]:size-5",
          className,
        )}
        {...props}
      >
        {children}
        <PlusIcon
          data-slot="accordion-trigger-icon"
          strokeWidth={1.5}
          className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
        />
        <MinusIcon
          data-slot="accordion-trigger-icon"
          strokeWidth={1.5}
          className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:block"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          "h-(--accordion-panel-height) px-4 pt-4 pb-2 font-poppins text-[12px] leading-[1.8] font-normal text-[#4A4A4A] data-ending-style:h-0 data-starting-style:h-0 lg:px-6 lg:pt-5 lg:text-[13px] [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
