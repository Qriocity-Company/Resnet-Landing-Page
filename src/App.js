import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-[#08081B] transition-all duration-300 text-white flex flex-col items-center py-12 ">
      <header className="w-full px-2 md:px-96 flex justify-between items-center mb-10">
        <div className="text-2xl font-bold flex items-center">
          <span className="text-red-700">Res</span>Net Solutions
        </div>
        <button className="bg-transparent border border-red-700 text-white font-bold px-4 py-2 rounded-md hover:bg-red-500 transition-all duration-300 hover:text-white">
          Book my Free Strategy Call
        </button>
      </header>
      <div className="max-w-3xl mx-5 bg-gradient-to-r from-[#182442] via-[#0F172A] to-[#182442] border-t border-r border-l border-gray-500 rounded-2xl p-8 md:p-20 text-center">
        <h1 className="text-4xl font-bold mb-4 leading-snug">
          Scale to <span className="text-red-700">5 lakhs</span> monthly in 90 days with our guaranteed client acquisition system
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          Get High-Ticket Clients by building autopilot lead generation ecosystems
        </p>
        <button className="bg-gradient-to-r from-red-500 to-purple-500 px-6 py-3 text-white rounded-md font-medium hover:opacity-90">
          Get High Ticket Clients
        </button>
      </div>
      <div className=" text-white py-16 px-8">
      <h2 className="text-center text-3xl font-bold mb-12">Client Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-b from-[#1E293B] to-transparent border-t border-l border-r border-opacity-70  border-[#D14257] p-6 rounded-lg shadow-lg ">
        <div className="flex gap-2">
          <img 
          className="rounded-full object-cover object-top h-20 w-20"
          src="https://s3-alpha-sig.figma.com/img/3bb3/d662/1d0feb8a9ea48ff4a09b3a8b55452b73?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bVyLsnYJTVsphcAY6bR9lgZpdJ9tgsAEYcdc9gXp-LlZSvzaDu1G74coBK7bc9KtkQmEL8sqYpgT0A4HN8n0yAaWhR7f5PjYNRIWfJgdsZ1g1tQKve2Q-rSAmlACKEHq-5FzirqHt~FAHMCaiT~SDrNjASy5u0IYM4OIx~nJQTcgCibZb1ulfRb8vqsNfx4Me-3B7zvUHomz-YzzHj2SlcK~sk5MtygiVDmbdVeECBx1ATvFrTiKwepakJaaU~9VScpboJQnmM-O7pTog0ire09w9nm9~4Xs00Kv7Wn3DjvSWu-bwhaYS~KA4NvLiYb3XFe~eSmd52fRwlx0ouNjdQ__"/>
          <div className="my-auto">
          <h3 className="text-lg font-bold text-red-500">Senthil</h3>
          <p className="text-sm text-gray-400 mb-4">FIITR APP</p>
          </div>
          </div>
          <p className="text-2xl font-bold mb-4">Lydia scaled to <p className="text-red-500 text-5xl w-full">5 Lakh</p> monthly revenue in just 8 weeks.</p>
          <button className="mt-4 px-4 py-2 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-[#0F172A]">
            See Profile
          </button>
        </div>
        <div className="bg-gradient-to-b from-[#1E293B] to-transparent border-t border-l border-r border-opacity-70 border-[#D14257] p-6 rounded-lg shadow-lg ">
          <div className="flex gap-2">
          <img 
          className="rounded-full object-cover object-top h-20 w-20"
          src="https://s3-alpha-sig.figma.com/img/a9b4/fd2d/11bb711e00277de1c1fab55ec3887e57?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jw2BkuXljO~65lDqQooVzQiJARg3FMkWqaJPuNA0p7n8YZ2JNjvkdE~6mRK1sYdwxTCWxJFBPTdyoTpATy71o37flQQJVC5BrX8DOwMMuY8q2w-o9TTZVK3PqK1h8yKJtZTcTKD~78yaCk0P8T5TVSlnU9sK3s5nsw1dGCOu4ry9CO0Vrem0PmobRJhaFDE9bBQ1qAOaDEVgXsLIGmf0h43Z8cKOMZBo5EU4o-XMvGXS3AyaL~sYuhSeZT4rYyQ2o-NucVMz0e1fBa49UPTnKbCRIF8hvvlXWx75cpaqMSCxjTMYkzU0wNke5RXyJzzrGs5Dz4XRdcteNbnqWZnN~Q__"/>
          <div className="my-auto">
          <h3 className="text-lg font-bold text-red-500">Lydia</h3>
          <p className="text-sm text-gray-400 mb-4">Thrive Academy</p>
          </div>
          </div>
          <p className="text-2xl font-bold mb-4">Senthil signed <p className="text-red-500 text-5xl">10 high</p> ticket clients in one month.</p>
          <button className="mt-4 px-4 py-2 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-[#0F172A]">
            See Profile
          </button>
        </div>
        <div className="bg-gradient-to-b from-[#1E293B] to-transparent border-t border-l border-r border-opacity-70 border-[#D14257] p-6 rounded-lg shadow-lg ">
        <div className="flex gap-2">
          <img 
          className="rounded-full object-cover object-top h-20 w-20"
          src="https://s3-alpha-sig.figma.com/img/d5f4/a6fc/bf5bf467145774ae2d546f51a8bb4a39?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pRGPTRLoWuMR-tnnL~-V5cVJ8GZf1f7u1e081ATLEcKIagzxhjXRGSS8RIRVTx9eHz9Sr8C-VihVUf~~FLu6~bxnxxAEbIwolo1UXnN5Etr6g8s8ffPpl3rqKM~zLiq-dJyHHBc8H9kdE5XMi-IgIRVGoBZj0aibPzs-hcvPTBxMqHaVcqX4b4Pe9Osmo29O8CwRvTFenJAln9iDNWZK5HyCLaZov-eGXEylSD6OpMl-PZe8J-xGxBPhPbyRYjeXjoEa1Hap98XGmw3sYXNCEWIYHLKJYFuaQvwEsTZ~ZsG~HxYioe55wRj1XOcerkqRWqreXBBv3jph5-h0eaLVGw__"/>
          <div className="my-auto">
          <h3 className="text-lg font-bold text-red-500">Dr. Sai</h3>
          <p className="text-sm text-gray-400 mb-4">Doctor</p>
          </div>
          </div>

          <p className="text-2xl font-bold mb-4">Dr. Sai <p className="text-red-500 text-5xl w-full">Doubled</p> his patient visits in 6 weeks.</p>
          
          <button className="mt-4 px-4 py-2 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-[#0F172A]">
            See Profile
          </button>
        </div>
      </div>
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-red-500 to-purple-500 px-6 py-3 text-white rounded-full font-medium hover:opacity-90">
          Scale my Revenue
        </button>
      </div>
    </div>

    {/* MEET THE FOUNDER */}

    <div className="bg-[#0F172A] text-white z-0 px-6 md:px-96 flex flex-col md:flex-row items-center justify-center">
  <div className="md:w-1/2 w-full mb-8 md:mb-0 z-20 md:pr-8">
    <h2 className="text-3xl md:text-5xl my-4 font-bold mb-4 text-center md:text-left">
      Meet the Founder
    </h2>
    {/* Purple Background Glow */}
    
    <p className="text-gray-400 border-l-2 border-red-400 pl-4 text-justify">
      Hi, I’m Kesaven – an engineer turned entrepreneur and my journey began with a bold choice in 2020 - declining a secure MNC role to pursue my entrepreneurial vision. That decision led me to build a ₹20 lakh MRR edtech company and a ₹5 lakh MRR marketing agency, mastering the art of scalable business growth.
    </p>
    <p className="text-gray-400 border-l-2 border-red-400 pl-4 text-justify">
      Over the last 5 years, I’ve tested countless strategies, worked with diverse niches, and helped clients scale their businesses successfully. I’ve learned that success is about strategy, not just hard work.
    </p>
    <p className="text-gray-400 mb-4 border-l-2 border-red-400 pl-4 text-justify">
      My proven systems are designed to help business owners attract high-ticket clients while building multiple lead generation funnels for long-term, predictable growth.
    </p>
    <div className="flex justify-center md:justify-start">
      <button className="bg-gradient-to-r from-red-500 to-purple-500 px-6 py-3 text-white rounded-md font-medium hover:opacity-90">
        Let’s create something extraordinary
      </button>
    </div>
  </div>
  <div className="md:w-1/2 w-full flex justify-center">
    <div className="relative z-20 w-[300px] h-[300px] md:w-[600px] md:h-[600px] overflow-hidden">
      <img
        src="https://s3-alpha-sig.figma.com/img/07ce/6768/9e6084c4fe1685454598bf1d1ef4b7c3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CcCBKLbsPeHDcV3UQqR0BqHIl2eKEmXUcdayIdQRcYTUDg0M35OhZ1GKddxUCPSxYrinF1dzFqgO21xiid~aTE1pXDHC3UHoUaSLMkjXjXiqoH2Naq88gBpkS8g6543R3lsyfRY~xR6piKPN8n6rCd2He6ZKJTCf9W6Tr8pvMBpOCkOMLelhXJ9UbGlVdNIqkyTmA7CuiPUlUjHwXsCiizyVZU~-waLVVLJWmysx6cg9O0xKi8a47qndEk7hER8ea3cH6f2rsyEB9XEo5W4Xtn2TPqRkgBUUy8w5fhWYwXOUM3J3AM1jjQAZYiZmXxoLiaGPOV-88G609QJYYxObdg__"
        alt="Founder"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>



    {/* LET ME TELL YOU */}

    <div className=" text-white py-16 my-16 px-8 flex flex-col items-center">
  <button className="bg-transparent text-gray-400 border border-gray-400 rounded-full px-4 py-2 mb-8 hover:text-white hover:border-white transition">
    But Wait...
  </button>
  <div className="max-w-4xl">
    {/* First Section */}
    <h2 className="md:text-3xl text-2xl font-bold mb-6 text-center">Let Me Ask You Something First</h2>
    <div className="flex relative">
      {/* Progress Line */}
      <div className="absolute md:left-12 left-12 top-2 lg:h-[252px] h-[341px] w-[2px] bg-red-500"></div>
      <ul className="text-left space-y-8 pl-10">
        <li className="flex items-start">
          <div>
          <span className="h-4 w-4 rounded-full bg-red-500 inline-block mt-1 mr-4"></span>
          </div>
          <div>
          Imagine waking up every day to messages from clients ready to pay you <span className="text-red-500 mx-1">high-ticket prices</span>.
          </div>
        </li>
        <li className="flex items-start">
          <div>
          <span className="h-4 w-4 rounded-full bg-red-500 inline-block mt-1 mr-4"></span>
          </div>
          <div>
          Not because you chased them, but because they’re sold on your expertise.
          </div>
        </li>
        <li className="flex items-start">
          <div>
          <span className="h-4 w-4 rounded-full bg-red-500 inline-block mt-1 mr-4"></span>
          </div>
          <div>
          Sounds like a dream? It’s not. It’s <span className="text-red-500 mx-1">100% possible</span> with the right system in place.
          </div>
        </li>
        <li className="flex items-start">
          <div>
          <span className="h-4 w-4 rounded-full bg-red-500 inline-block mt-1 mr-4"></span>
          </div>
          <div>
          Now, here’s the reality: Most service <span className="text-red-500 mx-1">providers, coaches, and entrepreneurs</span> have the skills to deliver amazing results.
          </div>
        </li>
        <li className="flex items-start">
          <div>
          <span className="h-4 w-4 rounded-full border-red-800 bg-red-200 bg-opacity-40 border inline-block mt-1 mr-4"></span>
          </div>
          <div>
          The problem? They don’t have a <span className="text-red-500 mx-1">predictable system</span> to get consistent leads or high-paying clients.
          </div>
        </li>
      </ul>
    </div>

    {/* Second Section */}
    <h2 className="md:text-3xl text-2xl font-bold mt-16 mb-6 text-center">Its No Secret</h2>
    <div className="flex relative">
      {/* Progress Line */}
      <div className="absolute left-12 top-2 sm:h-[270px] md:h-[295px] h-[412px] w-[2px] bg-green-500"></div>
      <ul className="text-left space-y-8 pl-10">
        <li className="flex items-start">
          <div>
          <span className="h-4 w-4 rounded-full bg-green-500 inline-block mt-1 mr-4"></span>
          </div>
          <div>
          I know what it feels like to put in so much effort and still see no results.
          </div>
        </li>
        <li className="flex">
          <div>
          <span className="h-4 w-4 rounded-full bg-green-500 inline-block mt-1 mr-4"></span>
          </div>
          <div>My clients came to me after running ads that didn’t convert, posting endless content with no engagement, and trying everything they could think of only to feel frustrated and stuck.</div>
        </li>
        <li className="flex items-start">
          <div>
          <span className="h-4 w-4 rounded-full bg-green-500 inline-block mt-1 mr-4"></span>
          </div>
          <div>
          But everything changed when my clients started using a simple, <span className="text-green-500 mx-1">proven system to generate leads</span> and attract high-ticket clients effortlessly.
          </div>  
        </li>
        <li className="flex items-start">
          <div>
          <span className="h-4 w-4 rounded-full bg-green-500 inline-block mt-1 mr-4"></span>
          </div>
          <div>
          Now, here’s the reality: Most service <span className="text-green-500 mx-1">providers, coaches, and entrepreneurs</span> have the skills to deliver amazing results.
          </div>
        </li>
        <li className="flex items-start">
          <div>
          <span className="h-4 w-4 rounded-full border-green-400 bg-red-200 bg-opacity-40 border inline-block mt-1 mr-4"></span>
          </div>
          <div>
          My approach is simple: I’ll help you create <span className="text-green-500 mx-1">multiple lead generation funnels</span> to attract high-ticket clients and grow your revenue consistently
          without spending all day on social media or wasting money on ads.
          </div>
        </li>
      </ul>
    </div>

    {/* CTA Section */}
    <div className="mt-16 text-center">
      <p className="text-lg font-bold mb-6">And that’s why I am inviting you to</p>
      <button className="bg-gradient-to-r from-red-500 to-purple-500 px-6 py-3 text-white rounded-md font-medium hover:opacity-90">
        Book my free strategy call
      </button>
    </div>
  </div>
</div>



{/* What Will Change */}

<div className="  text-white px-6 md:px-16 flex flex-col items-center">
  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
    What will change after you attend the Strategy Call?
  </h2>
  <p className="text-lg text-gray-400 mb-8 text-center">You will go from...</p>
  
  <div className=" w-full max-w-4xl">
    <div className="grid grid-cols-1 md:grid-cols-2  rounded-lg overflow-hidden">
      {/* Old Self Column */}
      <div className="bg-gradient-to-r from-sky-950 border-t border-l border-b border-gray-500 p-6">
        <h3 className="text-center font-bold text-lg mb-4">Old Self</h3>
        <ul className="space-y-4 ">
          <li className="flex  items-start">
            Struggling to find consistent clients.
          </li>
          <li className="flex items-start">
            Feeling stuck with low or inconsistent income.
          </li>
          <li className="flex items-start">
            Spending hours on social media with no results.
          </li>
          <li className="flex items-start">
            Relying on one source of leads.
          </li>
          <li className="flex items-start">
            Feeling overwhelmed and burnt out.
          </li>
        </ul>
      </div>

      {/* New Self Column */}
      <div className="border-t border-r  border-b border-gray-500 bg-gradient-to-r from-transparent to-pink-950 bg-opacity-80 p-6">
        <h3 className="text-center font-bold text-lg mb-4">New Self</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            Attracting high-ticket clients effortlessly.
          </li>
          <li className="flex items-start">
            Predictable 5-lakh monthly revenue.
          </li>
          <li className="flex items-start">
            Generating leads without wasting time online.
          </li>
          <li className="flex items-start">
            Building multiple reliable lead generation funnels.
          </li>
          <li className="flex items-start">
            Grow your business smarter, not harder, with a stress-free approach.
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="mt-8">
    <button className="bg-gradient-to-r from-red-500 to-purple-500 px-6 py-3 text-white rounded-md font-medium hover:opacity-90">
      Change all these now
    </button>
  </div>
</div>


{/* WHO IS IT FOR */}

<div className=" text-white py-16 px-6 md:px-16 flex flex-col items-center">
  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Who Is This For?</h2>
  
  <div className="w-full max-w-4xl space-y-6">
    {/* Card 1 */}
    <div className="flex items-center border border-purple-800 rounded-lg overflow-hidden p-4">
      <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
        <img src="https://s3-alpha-sig.figma.com/img/7599/7808/78c60bfce8c881359fb467ec58686196?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jF5ScdhFKifr-epJA7EFndcjm1Pn6NO4aI7lRrvrwcChhjCKQ9nK4sGCjIbn4O9Ufoj3tIF2sF0OahVHlZgH3oDruHhvZCXgPaWANKSAmphjusq2wH7fnimK-plicF04ajxrbzR1lhAlDP8jlPPc6CGcUr72ZRnexZTWJ3i~I3iMTNg1BZH-HZZVoioRtLOoJRcje~RQJE2mWZqZ0DqcvkxJPDqFIyyiKFMJRmux64q-dm0y56E4qpv-92qmnqfX5YEsGGVggSqh3QAxZLVHatTmcsoVNZec93C6Y-WsnYSdFsvDybq-c6o6qk6636WrnxZ7Z3sd9sdoAPNkryT8zg__" alt="Entrepreneurs" className="w-full h-full object-cover" />
      </div>
      <div className="ml-4">
        <h3 className="font-bold text-lg md:text-xl">Entrepreneurs</h3>
        <p className="text-gray-400 text-sm md:text-base">
          Entrepreneurs struggling to grow their revenue and looking for proven strategies to attract the right clients without wasting time or money.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex items-center border border-purple-800 rounded-lg overflow-hidden p-4">
      <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
        <img src="https://s3-alpha-sig.figma.com/img/b07a/4313/2731795a559c21db1c72b7c2e4650e67?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qod9Jk8zgpeMPE408NrYlg66uoQ13Gg2tzxQoWejjvR7lg8GuPPg4NfAMQXQCLrnpOEHhd5lvk813tbsYuIjIjRCuuD-2yeonYXpzfsNIpdFxcM8lSHAvHbyjMNdHfUhfqe7CEaeC7rB1nI2RtpTxVa0cRBtJyRD~8kR7a5BJhjniE9vE8leMnMIB2p8aWMylqy1vz-gE2OZ1eprRMK3MKmDFc0sCA4VNVR1aub~TiEiNc~P2JCKPekt09C~yt1GL7FcxDnu3tgSFFEZ5IgsX7L6kcfG1H9xiverDzbCPAPL5pNcB88h22AC6wcUTp7kdhowqdRajwEvUI6EoH4ZPg__" alt="Coaches and Consultants" className="w-full h-full object-cover" />
      </div>
      <div className="ml-4">
        <h3 className="font-bold text-lg md:text-xl">Coaches and Consultants</h3>
        <p className="text-gray-400 text-sm md:text-base">
          Coaches and consultants ready to position themselves as experts, attract premium clients, and grow their business without stress.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex items-center border border-purple-800 rounded-lg overflow-hidden p-4">
      <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
        <img src="https://s3-alpha-sig.figma.com/img/78be/fcc2/9bdc378674af53cb12670e34ac3dc195?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kuYtjQ7UXW7~-r~lvLVirHsevgp1inB-7XeKa-mS9FIn0KNO7oBKXfpZPVwugUBhMImgCIz2LF0O6U32Qrj8DM86Ht31eVZSk2UP03lvSRfwvBgyQDW39IuVt48fPNEJAqqUEaLkbW1PVjp3RVmVHrXHdJMCG~IxTJptMA2XI8Hrpeb22A7iM1WALhJp7PNpx~BDtJzR43ffN7~6XGDmRlh3NoqhKwdi~sD1L9CKIJ76o4Tk4YzdTjRiDouuJTrBHnUu1R4fmUu-BOAdUgcoFGSrZXr-EEW1BnlDITB8FDU1pqBcMT4m0PDmLmKFgUv9OxNq1evdcjTjhu4l9BJwHg__" alt="Small Business Owners" className="w-full h-full object-cover" />
      </div>
      <div className="ml-4">
        <h3 className="font-bold text-lg md:text-xl">Small Business Owners</h3>
        <p className="text-gray-400 text-sm md:text-base">
          Small business owners looking to transition from inconsistent income to a thriving business with multiple reliable client acquisition systems.
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="flex items-center border border-purple-800 rounded-lg overflow-hidden p-4">
      <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
        <img src="https://s3-alpha-sig.figma.com/img/d8df/07f7/4738c7452526676bdd5b876a1b698dd9?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fbWP6cEh2qzlT1VWX5mB--jSmCDIfQ4PgWwgPoF1GA6VM2q~7B8Nh~vxE2g6sD61I-wzdr6vH~aahnUPQp~lrFt3jZc-pRiyJyS7KLDTBkiyFb9jfGmQwu2LiiI-IdsbfjQguah2zxfw7Yutnil3lpQc2d3hEAdcw9C9pbL06TfbRnPAtEY8dZcPgd6wg2N2xeRButt5~tb~JSQ~3KJ04T~OlMw4So8muvFrxCNj0S6hedo0FScES-Fo4NmtNkiLw2uGFXBTL1stvPd7bauX8uRhTRU4ZdsgeMbBRVVcfIXoRE3cuUjMGMAzYpi5iyeOtzBC2ZqdYbflEB2RQ1Y9zg__" alt="Content Creators" className="w-full h-full object-cover" />
      </div>
      <div className="ml-4">
        <h3 className="font-bold text-lg md:text-xl">Content Creators</h3>
        <p className="text-gray-400 text-sm md:text-base">
          Content creators who are ready to monetize their expertise and attract high-paying clients without relying solely on social media.
        </p>
      </div>
    </div>
  </div>

  <div className="mt-8">
    <button className="bg-gradient-to-r from-red-500 to-purple-500 px-6 py-3 text-white rounded-full font-medium hover:opacity-90">
      Scale my Revenue
    </button>
  </div>
</div>


    {/* OTHERS VS RESNET */}
    <div className="w-full text-white py-16 px-6 md:px-16 flex flex-col items-center">
  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
    Other Agencies - ResNet Solutions
  </h2>

  {/* Table */}
  <div className="w-full max-w-5xl overflow-hidden rounded-lg border border-gray-600">
    <table className="w-full text-left border-collapse">
      {/* Table Header */}
      <thead>
        <tr>
          <th className="bg-[#0F172A] text-white px-4 py-3 border border-gray-600"> </th>
          <th className="bg-[#1E293B] text-white px-4 py-3 border border-gray-600 text-center">Other Agencies</th>
          <th className="bg-pink-500 bg-opacity-80 text-white px-4 py-3 border border-gray-600 text-center">ResNet Solutions</th>
        </tr>
      </thead>
      {/* Table Body */}
      <tbody>
        <tr>
          <td className="px-4 py-3 border border-gray-600">Time</td>
          <td className="px-4 py-3 border border-gray-600 text-center">Time-Consuming Process</td>
          <td className="px-4 py-3 border border-gray-600 bg-pink-500 text-center">MAP - 45+ years of research</td>
        </tr>
        <tr>
          <td className="px-4 py-3 border border-gray-600">Growth</td>
          <td className="px-4 py-3 border border-gray-600 text-center">Slow Growth</td>
          <td className="px-4 py-3 border border-gray-600 bg-pink-500 text-center">Scale to 5 lakhs/month in 90 days.</td>
        </tr>
        <tr>
          <td className="px-4 py-3 border border-gray-600">Methods</td>
          <td className="px-4 py-3 border border-gray-600 text-center">Generic Methods</td>
          <td className="px-4 py-3 border border-gray-600 bg-pink-500 text-center">Tailored for high-ticket clients.</td>
        </tr>
        <tr>
          <td className="px-4 py-3 border border-gray-600">Lead Source</td>
          <td className="px-4 py-3 border border-gray-600 text-center">One Lead Source</td>
          <td className="px-4 py-3 border border-gray-600 bg-pink-500 text-center">Multiple lead funnels for stability.</td>
        </tr>
        <tr>
          <td className="px-4 py-3 border border-gray-600">Accountability</td>
          <td className="px-4 py-3 border border-gray-600 text-center">No Accountability</td>
          <td className="px-4 py-3 border border-gray-600 bg-pink-500 text-center">Results guaranteed, or you don’t pay.</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Call-to-Action */}
  <div className="mt-8">
    <button className="bg-gradient-to-r from-red-500 to-purple-500 px-6 py-3 text-white rounded-full font-medium hover:opacity-90">
      Book my free strategy call
    </button>
  </div>
</div>


{/* STEPS */}

<div className=" text-white py-16 px-6 md:px-16 flex flex-col items-center">
  <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center">
    {/* Step 1 */}
    <div className="relative align-middle  bg-gray-200 text-black rounded-lg shadow-md px-6 py-8 w-full md:w-1/3 mb-8 md:mb-0 text-center">
      <div className="absolute align-middle -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-full font-bold text-sm">
        Step 1
      </div>
      <p className="font-semibold text-2xl">
        Book a free 30-minute Strategy Call with us.
      </p>
    </div>

    {/* Arrow 1 */}
    <div className="hidden md:flex justify-center items-center mx-4">
      <span className="text-red-500 text-3xl">&rarr;</span>
    </div>

    {/* Step 2 */}
    <div className="relative bg-gray-200 text-black rounded-lg shadow-md px-6 py-8 w-full md:w-1/3 mb-8 md:mb-0 text-center">
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-full font-bold text-sm">
        Step 2
      </div>
      <p className="font-semibold text-2xl">
        Learn how we can help you achieve consistent revenue and high-ticket clients.
      </p>
    </div>

    {/* Arrow 2 */}
    <div className="hidden md:flex justify-center items-center mx-4">
      <span className="text-red-500 text-3xl">&rarr;</span>
    </div>

    {/* Step 3 */}
    <div className="relative align-middle bg-gray-200 text-black rounded-lg shadow-md px-6 py-8 w-full md:w-1/3 text-center">
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-full font-bold text-sm">
        Step 3
      </div>
      <p className="font-semibold text-xl">
        If you’re ready, work with us or receive a <span className="font-bold">10-page guide</span> packed with 5 years of proven strategies to attract high-ticket clients and scale revenue—a lifetime asset for your business.
      </p>
    </div>
  </div>

  {/* Call-to-Action */}
  <div className="mt-12">
    <button className="bg-gradient-to-r from-red-500 to-purple-500 px-6 py-3 text-white rounded-full font-medium hover:opacity-90">
      Book my free strategy call
    </button>
  </div>
</div>



      {/* FAQ SECTIoN */}
      <div className="w-full text-white py-16 px-6 md:px-16 flex flex-col items-center">
  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
    Frequently Asked Questions
  </h2>

  <div className="w-full max-w-4xl space-y-4">
    {/* FAQ 1 */}
    <div
      className={`bg-white text-black rounded-lg px-6 py-4 cursor-pointer border transition-all duration-300 ${
        activeIndex === 0 ? "border-red-500" : "border-gray-300"
      }`}
      onClick={() => toggleFaq(0)}
    >
      <div className="flex justify-between items-center">
        <div className="font-bold text-lg flex items-center">
          <span className="text-gray-400 text-2xl mr-4">01</span>
          What are the fees associated with your services?
        </div>
        <span className="text-red-500 text-xl font-bold">
          {activeIndex === 0 ? "×" : "+"}
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          activeIndex === 0 ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 mt-4">
          We charge a percentage of your ad spend as a management fee, with no
          setup fees.
        </p>
      </div>
    </div>

    {/* FAQ 2 */}
    <div
      className={`bg-white text-black rounded-lg px-6 py-4 cursor-pointer border transition-all duration-600 ${
        activeIndex === 1 ? "border-red-500" : "border-gray-300"
      }`}
      onClick={() => toggleFaq(1)}
    >
      <div className="flex justify-between items-center">
        <div className="font-bold text-lg flex items-center">
          <span className="text-gray-400 text-2xl mr-4">02</span>
          How quickly can I expect results?
        </div>
        <span className="text-red-500 text-xl font-bold">
          {activeIndex === 1 ? "×" : "+"}
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          activeIndex === 1 ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 mt-4">
          Results vary based on your business and strategy, but clients
          typically see progress within the first 30 days.
        </p>
      </div>
    </div>

    {/* FAQ 3 */}
    <div
      className={`bg-white text-black rounded-lg px-6 py-4 cursor-pointer border transition-all duration-300 ${
        activeIndex === 2 ? "border-red-500" : "border-gray-300"
      }`}
      onClick={() => toggleFaq(2)}
    >
      <div className="flex justify-between items-center">
        <div className="font-bold text-lg flex items-center">
          <span className="text-gray-400 text-2xl mr-4">03</span>
          What payment methods do you accept?
        </div>
        <span className="text-red-500 text-xl font-bold">
          {activeIndex === 2 ? "×" : "+"}
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          activeIndex === 2 ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 mt-4">
          We accept credit cards, PayPal, and direct bank transfers.
        </p>
      </div>
    </div>
  </div>
</div>



    </div>
  );
}

export default App;
