import Image from "next/image";

type PetImgComponentProps = {
  petImg: string;
};

const PetImgComponent = ({ petImg }: PetImgComponentProps) => {
  return (
    <>
      <Image
        objectFit={"cover"}
        src={petImg}
        blurDataURL={petImg}
        layout="fill"
        placeholder="blur"
      />
    </>
  );
};

export default PetImgComponent;
