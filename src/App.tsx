//Accordion
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Components/ui/accordion"
//DropdownMenu
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./Components/ui/dropdown-menu"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./Components/ui/carousel"

function App(){
  return( 
    <>
      <div className="min-h-screen bg-[#dcda76] px-10 py-8">
        <div className="flex gap-3.5 justify-center " >
        <div className="flex justify-center gap-6 text-3xl font-medium mb-10">
          <a href="/about"   className="hover:text-blue-600">About</a>
          <a href="/gallery" className="hover:text-blue-600">Gallery</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
          <a href="/intouch" className="hover:text-blue-600">Stay in touch</a>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-4xl pl-10 flex h-10">
            <img src="/src/assets/material-symbols_person.png" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-[20px] bg-[#5b989ff4]">
            <DropdownMenuLabel  className="text-[20px]">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem  className="text-[20px]">Profile</DropdownMenuItem>
            <DropdownMenuItem className="text-[20px]">Billing</DropdownMenuItem>
            <DropdownMenuItem className="text-[20px]">Team</DropdownMenuItem>
            <DropdownMenuItem className="text-[20px]">Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>

        <Carousel className="flex justify-center items-center">
  <CarouselContent className="flex text-center items-center">
     <CarouselItem className="basis-1/3"><img src="/src/assets/handice.png"/>Vanilla</CarouselItem>
    <CarouselItem className="basis-1/3"><img src="/src/assets/shopicecream.jpg" className="rounded-xl"/></CarouselItem>
    <CarouselItem className="basis-1/3"><img src="/src/assets/handice.png"/>Strawberry</CarouselItem>
    <CarouselItem className="basis-1/3"><img src="/src/assets/handice.png"/>Chocolate Chip</CarouselItem>
    <CarouselItem className="basis-1/3"><img src="/src/assets/handice.png"/>Mango</CarouselItem>
    <CarouselItem className="basis-1/3"><img src="/src/assets/handice.png"/>Raspberry</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

                <Accordion type="single" collapsible className="mb-12">
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex justify-center">Quote for life. 
            </AccordionTrigger>
            <AccordionContent className="flex justify-center">
              Eat more ICE CREAM!!
            </AccordionContent>
          </AccordionItem>
        </Accordion>


      </div>
    </>
  )
}
export default App; 
