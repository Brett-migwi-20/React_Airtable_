import Head from 'next/head'
import Nav from '../Components/Nav/Nav'
import MainTable from '../Components/TableCon/MainTable'
import table from "./API/AirtableApi"
export default function Home() {
  return (
    <div>
      <Head>
        <title>React Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="description" content="Code card Genmerator , code in png , code in jpg " /> 
      </Head>
     
    <main>
    <div className="main-containe">
      {/* Nav bar component */}
       <Nav tableName={table}/>
       <MainTable tableName={table}/>
    </div>
    </main>
    </div>
  )
}

console.log(process.env.NODE_ENV)