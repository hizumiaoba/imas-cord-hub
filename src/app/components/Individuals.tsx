export const Individuals = (async ({id}: {id: number}) => {
  const dummy = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => res.json());

  return (
    <section>
      <h2>{dummy.title}</h2>
      <p>By {dummy.userId} task</p>
      <p>Task Num: {dummy.id}</p>
      <p>{dummy.completed ? "This has been completed" : "This has not completed yet."}</p>
    </section>
  );
});

export default Individuals;
