import { notFound } from 'next/navigation';

interface AAAA {
  params: {
    id: string;
  };
}

const Page = ({ params }: AAAA): React.ReactNode => {
  const { id } = params;
  if (id.length >= 2) return notFound();
  return <div> pageddddd:{id} </div>;
};

export default Page;
