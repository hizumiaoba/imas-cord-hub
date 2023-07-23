import { GridComponent } from '../GridComponent';
export default function Home() {

  

  return (
    <>
      <h1>Discord Server List</h1>

      <p>
        List up all registered Discord servers.
      </p>

      <div>
        <GridComponent type="server" />
      </div>
    </>
  )
}