import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return <div>hello</div>;
}

export default App;

async function getDB(name: string, version = undefined) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(name, version);
    request.onerror = (e) => {
      reject(e);
    };
    request.onsuccess = (e) => {
      resolve(e.target.result);
    };
  });
}

const db = await getDB("myDB");
console.log(db);
