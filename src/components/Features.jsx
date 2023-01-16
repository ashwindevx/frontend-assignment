import SelectIcon from "../../public/images/icons/select.svg";
import SearchIcon from "../../public/images/icons/search.svg";
import StandOutIcon from "../../public/images/icons/stand-out.svg";

const Features = () => {
  return (
    <div className="bg-primary relative -top-28 bg-opacity-[0.035]">
      <div className="w-layout flex justify-between mx-auto py-16">
        {featuresList.map((list) => {
          const { id, icon, heading, description } = list;
          return (
            <div
              key={id}
              className="flex flex-col items-center basis-1/3 text-center max-w-[352px]"
            >
              <div>
                <img src={icon} alt={heading} className="mb-6" />
              </div>
              <h5 className="galanoMedium mb-2 text-dark text-xl">{heading}</h5>
              <p className="galanoRegular text-base text-medium">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;

let featuresList = [
  {
    id: 1,
    icon: SearchIcon,
    heading: "Search",
    description:
      "Simply add a keyword or a term related to your business in the slogan maker search box. Wait for the magic to happen.",
  },
  {
    id: 2,
    icon: SelectIcon,
    heading: "Select",
    description:
      "Choose from thousands of options generated by the slogan maker that fit your needs.",
  },
  {
    id: 3,
    icon: StandOutIcon,
    heading: "Stand out",
    description: "Congrats on your new slogan. It's time to win the world!",
  },
];
