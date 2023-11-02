export default function page({ params }: { params: { id: number } }) {
  return (
    <div>
      <h1>blog id : {params.id}</h1>
    </div>
  );
}
