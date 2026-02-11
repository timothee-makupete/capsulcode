import { Mail, Phone } from "lucide-react";
import { Link } from "../components/Link";

const StickyContacts =()=>{
    return(
        <>
        {/* sticky contact icons */}
        <div className="group fixed right-0 shadow w-[40px] hover:w-[150px] transition-all p-2 top-[40vh] z-50 bg-cyan-600 hover:bg-cyan-500 rounded-l-xl"
          >
            <div className="flex flex-nowrap truncate ">
              <p>
                <Mail className="h-6 w-6 " />
              </p>
              <p className="hidden group-hover:inline-block">
                <Link
                  href="mailto:capsulcodetechnologies@gmail.com"
                  className="text-white ml-2"
                >
                  Email us
                </Link>
              </p>
            </div>
          </div>
    
          <div className="group fixed right-0 shadow w-[40px] hover:w-[150px] transition-all p-2 top-[47vh] z-50 bg-cyan-600 hover:bg-cyan-500 rounded-l-xl">
            <Link
              href="tel:+265992685747"
              className="text-white flex flex-nowrap truncate"
            >
              <p>
                <Phone className="h-6 w-6" />
              </p>
              <p className="hidden group-hover:inline-block ml-2 ">Call us</p>
            </Link>
          </div>
          
          <div className="group fixed right-0 shadow w-[40px] hover:w-[150px] transition-all p-2 top-[54vh] z-50 bg-cyan-600 hover:bg-cyan-500 rounded-l-xl">
            <Link
              href="tel:+265991608070"
              className="text-white flex flex-nowrap truncate"
            >
              <p>
                <Phone className="h-6 w-6" />
              </p>
              <p className="hidden group-hover:inline-block ml-2 ">Call us</p>
            </Link>
          </div>
        </>
    )
}

export default StickyContacts;

