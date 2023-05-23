import Base64Decoder from "@/components/converters/Base64Decoder";

export const metadata = {
  title: 'Base64 Decoder',
  description: 'Base64 Decoder',
};

export default function atob() {
  return (
    <>
      <Base64Decoder />
    </>
  )
}