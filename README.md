# 📜 Quotes API with GraphQL

This is a **GraphQL API** built with **Node.js, Apollo Server, and SQLite**. It allows users to **fetch random quotes, get quotes by author, and add new quotes**.

---

## 🚀 Features
- Fetch all quotes 📖
- Get a random quote 🎲
- Retrieve quotes by author ✍️
- Add a new quote ➕

---

## 🛠️ Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/thebalayogesh/quotes-api-graphql.git
cd quotes-api-graphql
npm install
npm run start
```

Folder Structure
```sh
📁 quotes-api-graphql
├── 📜 index.js       # Apollo Server setup
├── 📜 _db.js        # SQLite database functions
├── 📜 schema.js     # GraphQL type definitions
├── 📜 quotes.db     # SQLite database (not included in Git)
├── 📜 package.json  # Dependencies and scripts
└── 📜 README.md     # Documentation
```

GraphQL Queries & Mutations
Get All Quote
```sh
query {
  quotes {
    id
    quote
    author
    genre
  }
}
```

Get a Random Quote
```sh
query {
  randomQuote {
    id
    quote
    author
    genre
  }
}
```

Get a Author Quote
```sh
query {
  authorQuotes(author: "abdul kalam") {
    id
    quote
    author
    genre
  }
}
```

Add a New Quote With Mutation
```sh
mutation {
  addQuote(quote: "Success is not final, failure is not fatal.", 
           author: "Winston Churchill", 
           genre: "motivational") {
    id
    quote
    author
    genre
  }
}
```








