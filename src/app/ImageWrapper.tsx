import Image, { type ImageProps } from "next/image";

export default function ImageWrapper(
  props: ImageProps
) {

  return (
    <>
      <Image {...props} />
    </>
  );
}
