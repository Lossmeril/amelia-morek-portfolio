interface FPCProps {
  imgSrc: string;
  title: string;
  type: string;
  year: string;
}

const FeaturedProjectCard: React.FC<FPCProps> = ({
  imgSrc,
  title,
  type,
  year,
}) => {
  return (
    <div
      className="overflow-hidden h-full w-full relative"
      style={{
        backgroundImage: "url(" + imgSrc + ")",
        backgroundSize: "cover",
      }}
    >
      <div className="centered-absolute z-10 text-white text-center">
        <h3 className="font-bold text-xl lowercase italic">{title}</h3>
        <p className="italic text-md">{type}</p>
        <p className="italic text-sm">{year}</p>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
