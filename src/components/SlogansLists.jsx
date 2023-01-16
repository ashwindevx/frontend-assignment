const SlogansLists = () => {
  return (
    <div className="mt-8 grid grid-cols-2 gap-y-5 gap-x-8 parent">
      {slogans.map((list) => {
        const { id, slogan } = list;
        return (
          <div
            key={id}
            className="rounded-[4px] h-[60px] flex items-center bg-light cursor-pointer relative"
          >
            <p className="galanoRegular text-base text-dark px-4">{slogan}</p>
            <p class="absolute hidden w-fit -left-[120px] top-4 galanoRegular text-white bg-medium px-2 py-1 text-sm rounded-[4px]">
              Click to copy
            </p>
            <p class="absolute hidden w-fit -left-[120px] top-4 galanoRegular text-white bg-medium px-2 py-1 text-sm rounded-[4px]">
              Copied!
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SlogansLists;

let slogans = [
  {
    id: 1,
    slogan: "There is no Sore it will Not Heal, No cool it will not Subdue.",
  },
  {
    id: 2,
    slogan: "coziness building for tomorrow",
  },
  {
    id: 3,
    slogan: "There is no Sore it will Not Heal, No cool it will not Subdue.",
  },
  {
    id: 4,
    slogan: "Review the facts cool is the best",
  },
  {
    id: 5,
    slogan: "Review the facts cool is the best",
  },
  {
    id: 6,
    slogan: "coziness building for tomorrow",
  },
  {
    id: 7,
    slogan: "There is no Sore it will Not Heal, No cool it will not Subdue.",
  },
  {
    id: 8,
    slogan: "coziness building for tomorrow",
  },
  {
    id: 9,
    slogan: "There is no Sore it will Not Heal, No cool it will not Subdue.",
  },
  {
    id: 10,
    slogan: "coziness building for tomorrow",
  },
  {
    id: 11,
    slogan: "There is no Sore it will Not Heal, No cool it will not Subdue.",
  },
  {
    id: 12,
    slogan: "coziness building for tomorrow",
  },
  {
    id: 13,
    slogan: "There is no Sore it will Not Heal, No cool it will not Subdue.",
  },
  {
    id: 14,
    slogan: "coziness building for tomorrow",
  },
  {
    id: 15,
    slogan: "There is no Sore it will Not Heal, No cool it will not Subdue.",
  },
  {
    id: 16,
    slogan: "coziness building for tomorrow",
  },
  {
    id: 17,
    slogan: "There is no Sore it will Not Heal, No cool it will not Subdue.",
  },
  {
    id: 18,
    slogan: "coziness building for tomorrow",
  },
];
