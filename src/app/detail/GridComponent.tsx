import Link from 'next/link';
import sharedStyle from '@/app/css/shared.module.css';
import { fansiteType } from '../interfaces/fansite.interface';
import { serverType } from '../interfaces/server.interface';
import { baseApiUrl, selectIpColor } from '../utils';
import { dummyFansite, dummyServer } from '../interfaces/dummy';
import style from '@/app/css/about.module.css';

export const GridComponent = async ({ type, arr }: { type: 'server' | 'fansite', arr: Array<any> }) => {

  return (
    <div className={`${sharedStyle.section} ${sharedStyle.sectionTitle}`}>
      <h2>{type} list</h2>

      <p>List up all {type}.</p>

      <div className={`${sharedStyle.grid}`}>
        {arr.map((item: any) => {
          if (type === 'server') {
            return createServerElement(type, item);
          } else if (type === 'fansite') {
            return createFansiteElement(type, item);
          } else {
            return <></>;
          }
        })}
      </div>
    </div>
  )
};

const btnStyle = {
  background: "#56AEFF",
  width: "90%",
}

const createServerElement = (tyoe: string, item: serverType) => {
  return (
    <div key={item.id} className={sharedStyle.card}>
      <h3>
        Title: {item.name}
      </h3>
      <p>{item.description}</p>
      <div className={sharedStyle.ip}>
        <span style={{ background: `${selectIpColor(item.ip)}` }}>{item.ip}</span>
      </div>
      <div className={sharedStyle.waifu}>
        {item.waifu?.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
      <div>
        <Link href={item.invite}>
          <button type="button" style={btnStyle}>
            <span>Join!</span>
          </button>
        </Link>
      </div>
    </div>
  )
};

const createFansiteElement = (tyoe: string, item: fansiteType) => {
  return (
    <div key={item.id} className={sharedStyle.card}>
      <h3>
        Title: {item.name}
      </h3>
      <p>{item.description}</p>
      <div className={sharedStyle.waifu}>
        <span>{item.waifu}</span>
      </div>
      <div>
        <Link href={item.link}>
          <button type="button" style={btnStyle}>
            <span>Visit!</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
