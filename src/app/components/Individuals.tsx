export const Individuals = async ({id}: {id: number}) => {

  const dummy = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json());

  return (
    <>
      <h2>Page at {id}!</h2>
      <h3>By {dummy.userId}</h3>
      <p>{dummy.title}</p>
      <p>{dummy.body}</p>
    </>
  );
};

export default Individuals;
