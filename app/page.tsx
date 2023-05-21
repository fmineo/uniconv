import ConvertitoreMigliaKilometri from "@/components/converters/ConvertitoreMigliaKilometri";

export const metadata = {
  title: 'Convertitore da Miglia a Chilometri',
  description: 'Convertitore da Miglia a Chilometri',
};

export default function Home() {
  
  return (
    <>
      <ConvertitoreMigliaKilometri />
    </>
  )
}
