import Database from 'better-sqlite3';

const db = new Database('quotes.db');
// db.pragma('journal_mode = WAL');

export function getAllQuotes() {
  return db.prepare('SELECT * FROM quotes').all();
}

 // where genre = \'motivational\'

export function getRandomQuote() {
  return db.prepare('SELECT id, quote, author, genre FROM quotes ORDER BY RANDOM() LIMIT 1').get();
}

export function addQuote(quote, author, genre) {
  const stmt = db.prepare("INSERT INTO quotes (quote, author, genre) VALUES (?, ?, ?)");
  const info = stmt.run(quote, author, genre);
  return { id: info.lastInsertRowid, quote, author, genre };
}

export function getAuthorQuotes(author) {
    return db.prepare("SELECT * FROM quotes WHERE author LIKE ?").all(`%${author}%`);
}



// function getAuthorQuotes(author = null) {
//   if (author) {
//     return db.prepare("SELECT * FROM quotes WHERE author = ? ORDER BY RANDOM() LIMIT 1").get(author);
//   } else {
//     return db.prepare("SELECT * FROM quotes ORDER BY RANDOM() LIMIT 1").get();
//   }
// }