import PPG from "../../public/images/thumbnails/PPG.png";
import TCG from "../../public/images/thumbnails/TCG.png";
import DNG from "../../public/images/thumbnails/DNG.png";
import IG from "../../public/images/thumbnails/IG.png";

const Products = () => {
  return (
    <div className="w-layout mx-auto pb-20 -mt-10">
      <h1 className="font-galano tracking-tight font-semibold text-4xl text-dark mb-12">
        Try our other free products
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {productsList.map((list) => {
          const { id, thumbnail, heading, description } = list;
          return (
            <div key={id} className="w-[352px] cursor-pointer">
              <div>
                <img src={thumbnail} alt={heading} />
              </div>
              <h5 className="font-galano mb-1 font-medium text-dark mt-4 text-xl">
                {heading}
              </h5>
              <p className="font-galano font-normal text-base text-medium">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

let productsList = [
  {
    id: 1,
    thumbnail: PPG,
    heading: "Privacy Policy Generator",
    description:
      "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
  {
    id: 2,
    thumbnail: TCG,
    heading: "Terms & Conditions Generator",
    description:
      "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
  {
    id: 3,
    thumbnail: DNG,
    heading: "Domain Name Generator",
    description:
      "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
  {
    id: 4,
    thumbnail: IG,
    heading: "Invoice Generator",
    description:
      "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
];
