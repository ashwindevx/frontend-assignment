const SlogansLists = () => {
  return (
    <div className="mt-8 grid grid-cols-2 gap-y-5 gap-x-8 parent">
      {slogans.map((list) => {
        const { id, slogan } = list;
        return (
          <div
            key={id}
            className="rounded-[4px] bg-light cursor-pointer relative"
          >
            <p className="font-galano text-base text-dark font-normal px-4 py-3">
              {slogan}
            </p>
            <p class="absolute hidden w-fit -left-[120px] top-[11px] font-galano text-white bg-medium px-2 py-1 text-sm rounded-[4px]">
              Click to copy
            </p>
            <p class="absolute hidden w-fit -left-[120px] top-[11px] font-galano text-white bg-medium px-2 py-1 text-sm rounded-[4px]">
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
    slogan: "Review the facts cool is the best",
  },
  {
    id: 2,
    slogan: "Review the facts cool is the best",
  },
  {
    id: 3,
    slogan: "Review the facts cool is the best",
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
    slogan: "Review the facts cool is the best",
  },
  {
    id: 7,
    slogan: "Review the facts cool is the best",
  },
  {
    id: 8,
    slogan: "Review the facts cool is the best",
  },
  {
    id: 9,
    slogan: "Review the facts cool is the best",
  },
  {
    id: 10,
    slogan: "Review the facts cool is the best",
  },
  {
    id: 11,
    slogan: "Review the facts cool is the best",
  },
  {
    id: 12,
    slogan: "Review the facts cool is the best",
  },
  {
    id: 13,
    slogan: "Review the facts cool is the best",
  },
  {
    id: 14,
    slogan: "Review the facts cool is the best",
  },
  {
    id: 15,
    slogan: "Review the facts cool is the best",
  },
  {
    id: 16,
    slogan: "Review the facts cool is the best",
  },
  {
    id: 17,
    slogan: "Review the facts cool is the best",
  },
  {
    id: 18,
    slogan: "Review the facts cool is the best",
  },
];
