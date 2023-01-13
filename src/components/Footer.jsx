import Logo from "../../public/images/logo/logo-white.svg";
import Flag from "../../public/images/icons/flag.svg";

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="w-layout mx-auto pt-16 pb-6">
        <div className="flex justify-between items-start">
          <div className="basis-1/4 cursor-pointer">
            <img src={Logo} alt="myDukaan Logo" />
          </div>
          <div className="flex justify-between items-start basis-3/4">
            <div className="flex flex-col">
              <a
                href="#"
                className="font-galano text-lg font-normal text-white mb-[14px]"
              >
                Contact
              </a>
              <a
                href="#"
                className="font-galano text-lg font-normal text-white mb-[14px]"
              >
                FAQ's
              </a>
            </div>
            <div className="flex flex-col">
              <a
                href="#"
                className="font-galano text-lg font-normal text-white mb-[14px]"
              >
                Tutorials
              </a>
              <a
                href="#"
                className="font-galano text-lg font-normal text-white mb-[14px]"
              >
                Blog
              </a>
            </div>
            <div className="flex flex-col">
              <a
                href="#"
                className="font-galano text-lg font-normal text-white mb-[14px]"
              >
                Privacy
              </a>
              <a
                href="#"
                className="font-galano text-lg font-normal text-white mb-[14px]"
              >
                Banned Items
              </a>
            </div>
            <div className="flex flex-col">
              <a
                href="#"
                className="font-galano text-lg font-normal text-white mb-[14px]"
              >
                About
              </a>
              <a
                href="#"
                className="font-galano flex items-center text-lg font-normal text-white mb-[14px]"
              >
                Jobs{" "}
                <div className="inline-flex px-1.5 py-0.5 ml-1 rounded-full text-sm font-normal leading-4 bg-white text-dark">
                  3
                </div>
              </a>
            </div>
            <div className="flex flex-col">
              <a
                href="#"
                className="font-galano text-lg font-normal text-white mb-[14px]"
              >
                Facebook
              </a>
              <a
                href="#"
                className="font-galano text-lg font-normal text-white mb-[14px]"
              >
                Twitter
              </a>
              <a
                href="#"
                className="font-galano text-lg font-normal text-white mb-[14px]"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white bg-opacity-20 my-6"></div>
        <div className="flex justify-between items-center">
          <p className="text-white font-galano 2020, All rights reserved.lano font-normal text-sm">
            Dukaan 2020, All rights reserved.
          </p>
          <div>
            <span className="flex text-white text-sm font-normal font-galano">
              Made in{" "}
              <img src={Flag} alt="Indian Flag" className="ml-2 rounded-md" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
