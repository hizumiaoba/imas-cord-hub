import { useState } from 'react';
import { fansiteType } from '../interfaces/fansite.interface';
import { serverType } from '../interfaces/server.interface';

type modalProps = {
  id: number,
  type: 'server' | 'fansite',
}

const fetchServerDetails = async (id: number): Promise<fansiteType> => {
  const response = await fetch(``);
  const data = await response.json();
  return data;
}

const fetchFansiteDetails = async (id: number): Promise<fansiteType> => {
  const response = await fetch(``);
  const data = await response.json();
  return data;
}

const onExitClick = () => {
  console.log('Modal will close now.');
}

const attemptingChangeLocation = () => {
  console.log('Attempting to change location.');
  
}

export const ModalComponents = async ({ id, type }: modalProps) => {
  if(type === undefined) {
    return <div>Something went wrong.</div>
  }
  const isServer = type === 'server';
  const detail: serverType | fansiteType = isServer ? await fetchServerDetails(id) : await fetchFansiteDetails(id);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button type="button" onClick={onExitClick}>
        X
      </button>
      {isOpen && (
        <div>
          <h2>{detail.name}</h2>
          <p>{detail.description}</p>
          {'invite' in detail ? (
            <a href={detail.invite as string}><button type="button">Join!</button></a>
          ) : (
            <a href={detail.link as string}><button type="button">Visit!</button></a>
          )}
        </div>
      )}
    </>
  );
}
