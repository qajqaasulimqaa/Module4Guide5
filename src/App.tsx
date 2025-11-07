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
//Importing images from Assets
import hand from "./assets/hand_1-removebg-preview.png"; 
import icecreamstore from "./assets/shopicecream.jpg"; 
import icon from "./assets/material-symbols_person.png"; 

function App(){
  return( 
    <>
      <div className="h-screen bg-[#dcda76] px-10 py-8">
        <div className="flex gap-3.5 justify-center " >
        <div className="flex justify-center gap-6 text-3xl font-medium mb-10">
          <a href="/about"   className="hover:text-blue-600" style={{ fontFamily: 'Chetta_Visto' }}>About</a>
          <a href="/gallery" className="hover:text-blue-600"style={{ fontFamily: 'Chetta_Visto' }}>Gallery</a>
          <a href="/contact" className="hover:text-blue-600"style={{ fontFamily: 'Chetta_Visto' }}>Contact</a>
          <a href="/intouch" className="hover:text-blue-600"style={{ fontFamily: 'Chetta_Visto' }}>Stay in touch</a>
        </div>

<DropdownMenu>
<DropdownMenuTrigger className="text-4xl pl-10 flex h-10"><img src={icon} />
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

     <Carousel className="relative flex justify-center items-center">
  <CarouselContent className="flex text-center items-center">
     <CarouselItem className="basis-1/3"><img src={hand}/>  
  <span className="text-5xl font-medium text-gray-700" style={{ fontFamily: 'Chetta_Visto' }}>
  Raspberry
</span>
     </CarouselItem>
    <CarouselItem className="basis-1/3"><img src={icecreamstore} className="rounded-xl"/></CarouselItem>
    <CarouselItem className="basis-1/3"><img src={hand}/>  
    <span className="text-5xl font-medium text-gray-700" style={{ fontFamily: 'Chetta_Visto' }}> 
    Mango</span>
      </CarouselItem>
    <CarouselItem className="basis-1/3"><img src={hand}/>
      <span className="text-5xl font-medium text-gray-700" style={{ fontFamily: 'Chetta_Visto' }}>Chocolate Chip</span>
    </CarouselItem>
    <CarouselItem className="basis-1/3"><img src={hand}/>
      <span className="text-5xl font-medium text-gray-700" style={{ fontFamily: 'Chetta_Visto' }}>Mango</span>
    </CarouselItem>
    <CarouselItem className="basis-1/3">
    <img src={hand}/>
    <span className="text-5xl font-medium text-gray-700" style={{ fontFamily: 'Chetta_Visto' }}>Raspberry</span>
    </CarouselItem>
  </CarouselContent>

  <CarouselPrevious className="left-4 bg-white/80 backdrop-blur p-2 rounded-full shadow-lg" />
  <CarouselNext className="right-4 bg-white/80 backdrop-blur p-2 rounded-full shadow-lg" />
</Carousel>

 <Accordion type="single" collapsible className="mb-12">
  <AccordionItem value="item-1">
    <AccordionTrigger className="flex justify-center text-2xl font-medium" style={{ fontFamily: 'Chetta_Visto' }}>Quote for life. 
       </AccordionTrigger>
       <AccordionContent className="flex justify-center text-2xl font-medium" style={{ fontFamily: 'Chetta_Visto' }}>Eat more ICE CREAM!!
        </AccordionContent>
   </AccordionItem>
</Accordion>
      </div>
    </>
  )
}
export default App; 
