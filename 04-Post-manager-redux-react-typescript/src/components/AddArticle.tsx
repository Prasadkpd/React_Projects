import * as React from "react";
import {FormEvent, useState} from "react";

type addArticleProps = {
  saveArticle: (article: IArticle | any) => void
}

const AddArticle: React.FC<addArticleProps> = ({saveArticle}) => {

  const [article, setArticle] = useState<IArticle | {}>()

  const handleArticleData = (e: FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewArticle = (e: FormEvent) => {
    e.preventDefault()
    saveArticle(article)
  }

  return (
      <form onSubmit={addNewArticle} className={"Add-article"}>
        <input type="text" id="title" placeholder="Title" onChange={handleArticleData}/>
        <input type="text" id="body" placeholder="Description" onChange={handleArticleData}/>
        <button disabled={article === undefined ? true : false}>
          Add article
        </button>
      </form>
  );
};

export default AddArticle;
