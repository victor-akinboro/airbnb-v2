import Image from "next/image";

function LargeCard({ title, img, description, buttonText }) {
  return (
    <div className="relative py-16 cursor-pointer">
      <div className="h-96 relative overflow-hidden rounded-xl min-w-[300px]">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl w-64 mb-3">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-8">{buttonText}</button>
      </div>
    </div>
  );
}

export default LargeCard;
