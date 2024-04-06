import "./ImageComponent.css";

export const ImageComponent = ({ data }) => {
  const imagePath = data?.thumbnail?.path;
  const imageExtension = data?.thumbnail?.extension;

  const imageUrl = `${imagePath}.${imageExtension}`;
  return (
    <>
      <img src={imageUrl} alt={data?.name} />
    </>
  );
};