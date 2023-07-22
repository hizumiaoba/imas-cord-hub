export const NameComponent = async ({ title, arr }: { title: string, arr: Array<string> }) => {
  return (
    <>
      <h2>{title}</h2>

      <p>Thank you for your huge support!</p>

      <ul>
        {arr.map((name, index) => {
          return (
            <li key={index}>
              {name}
            </li>
          )
        })}
      </ul>
    </>
  )
};
