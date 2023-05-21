import Base64Encoder from "@/components/converters/Base64Encoder";

export const metadata = {
  title: 'Base64 Encoder',
  description: 'Base64 Encoder',
};

export default function btoa() {
  return (
    <>
      <Base64Encoder />
    </>
  )
}