import { baseApiUrl } from '../utils';
export const GridComponent = async ({ type }: { type: 'server' | 'fansite' }) => {

  const data = await fetch(`${baseApiUrl}/${type}`).then(res => res.json());

  return (
    <>
      <h1>{type} list</h1>

      <p>List up all {type}</p>

      <div>
        {data.map((item: any) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.url}</p>
            <p>{item.createdAt}</p>
            <p>{item.updatedAt}</p>
          </div>
        ))}
      </div>
    </>
  )
};
