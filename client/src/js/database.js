import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Update jate database content');
  //connect to database
  const jateDatabase = await openDB('jate', 1);
  //specify database
  const jateRead = jateDb.transaction('jate', 'readwrite');
  //object store 
  const objectStore = jateRead.objectStore('jate');
  //add all content stored in DB
  const req = objStore.put({id: id, value: value});
  //add content
  const res = await req;
  console.log('Data request successful', res);
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async (value) => {
  console.error('Get jate database content');
  //connect to database
  const jateDatabase = await openDB('jate', 1);
  //specify database
  const jateRead = jateDb.transaction('jate', 'readwrite');
  //object store 
  const objectStore = jateRead.objectStore('jate');
  //require all content stored in DB
  const req = objStore.getAll();
  //fetch content
  const res = await req;
  console.log('Data request successful', res);
} 
initdb();
