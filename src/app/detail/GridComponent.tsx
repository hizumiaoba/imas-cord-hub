import Link from 'next/link';
import pageStyle from '@/app/page.module.css';
import { fansiteType } from '../interfaces/fansite.interface';
import { serverType } from '../interfaces/server.interface';
import { baseApiUrl } from '../utils';
export const GridComponent = async ({ type }: { type: 'server' | 'fansite' }) => {

  // const data = await fetch(`${baseApiUrl}/${type}`).then(res => res.json());
  const data = await fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json());

  return (
    <>
      <h1>{type} list</h1>

      <p>List up all {type}</p>

      <div>
        {data.map((item: any) => (
          <div key={item.id}>
            <h2>
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </>
  )
};

const createServerElement = (tyoe: string, item: serverType) => {
  return (
    <div key={item.id} className={pageStyle.card}>
            <h3>Title: {item.name}</h3>
            <p>
              {item.description}
            </p>
            <div>
              {/* ip tag */}
              <p>IP: {item.ip}</p>
            </div>
            <div>
              <Link href={item.invite}>
                <button type="button" style={{ background: "#56AEFF" }}>
                  <span>Join!</span>
                </button>
              </Link>
            </div>
          </div>
  )
};

const createFansiteElement = (tyoe: string, item: fansiteType) => {

};
