import Button from "./Button";
import Cross from "../../public/images/icons/cross.svg";
import Arrow from "../../public/images/icons/arrow.svg";
import SlogansLists from "./SlogansLists";

const Slogan = () => {
  return (
    <div className="relative top-[-194px] w-full">
      <div className="w-layout mx-auto bg-white rounded-lg py-16 custom-shadow">
        <div className="w-[736px] mx-auto">
          <h2 className="font-galano tracking-tight font-semibold text-4xl text-dark mb-4">
            Free slogan maker
          </h2>
          <p className="text-medium mb-12 font-galano font-normal text-xl">
            Simply enter a term that describes your business, and get up to
            1,000 relevant slogans for free.
          </p>
          <form className="flex flex-col w-fit">
            <label className="font-galano mb-2 text-dark font-normal text-base">
              Word for your slogan
            </label>
            <div className="rounded mb-12 relative border border-[##D9D9D9] w-[352px]">
              <input
                type="text"
                defaultValue="cozy"
                className="p-3 rounded w-full font-galano text-dark"
              />
              <button className="absolute right-3 top-4">
                <img src={Cross} alt="cross icon" />
              </button>
            </div>
            <Button
              className={`bg-primary text-white w-fit px-6 py-3 text-lg cursor-pointer`}
              link="#"
              children="Generate slogans"
            />
          </form>
          <div className="w-full h-[1px] bg-[#d9d9d9] my-12"></div>
          <div className="flex justify-between items-center">
            <h3 className="font-galano text-xl text-dark font-medium">
              We have generated 1,023 slogans for "cozy"
            </h3>
            <Button
              className={`text-primary text-sm border border-primary px-6 py-2 rounded-[4px]`}
              link="#"
              children="Download all"
            />
          </div>
          <SlogansLists />
          <div className="w-full h-[1px] bg-[#d9d9d9] mt-12 mb-6"></div>
          <div className="flex justify-between items-center">
            <div className="flex-grow-2 w-8"></div>
            <div className="flex items-center flex-grow-2">
              <p className="cursor-pointer relative flex items-center justify-center h-6 w-6 mx-2.5 rounded-full font-galano text-sm font-normal leading-4 bg-primary text-white">
                1
              </p>
              <p className="cursor-pointer font-galano mx-2.5 text-primary">
                2
              </p>
              <p className="cursor-pointer font-galano mx-2.5 text-primary">
                3
              </p>
              <p className="cursor-pointer font-galano mx-2.5 text-primary">
                ...
              </p>
              <p className="cursor-pointer font-galano mx-2.5 text-primary">
                21
              </p>
            </div>
            <div className="text-primary cursor-pointer flex-grow-2 flex items-center font-normal text-sm font-galano">
              Next
              <img src={Arrow} alt="arrow" className="ml-[2px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
