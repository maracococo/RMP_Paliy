// Общие типы приложения «Новости»

export type Article = {
  key: string;
  name: string;
  anons: string;
  full: string;
  img: string;
};

// Статья без ключа - то, что вводится в форме (ключ добавляется в addArticle)
export type NewArticle = Omit<Article, "key">;

