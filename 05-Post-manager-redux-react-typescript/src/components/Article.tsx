import React, {Dispatch, useCallback} from 'react';
import {useDispatch} from "react-redux";

type articleProps = {
  article: IArticle
  removeArticle: (article: IArticle) => void
}
const Article: React.FC<articleProps> = ({article, removeArticle}) => {

  const dispatch: Dispatch<any> = useDispatch()

  const deleteArticle = useCallback(
      (article: IArticle) => dispatch(removeArticle(article)),
      [dispatch, removeArticle]
  )

  return (
      <div className="Article">
        <div>
          <h1>{article.title}</h1>
          <p>{article.body}</p>
        </div>
        <button onClick={() => deleteArticle(article)}>Delete</button>
      </div>
  );
};

export default Article;
