import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { useEffect, useState } from "react";

const CommentArea = (props) => {
  const [arrayOfComments, setArrayOfComments] = useState([]);

  const fetchingComments = async () => {
    console.log("fetching");

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${props.bookId}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0NzljZTFjMjUwNDAwMTUxYWI2NGUiLCJpYXQiOjE3NDczMTEyODcsImV4cCI6MTc0ODUyMDg4N30._DZV1gVqDRIqvSd0DKY6yrH7gf8IOmEaFxuIk_XOT-M",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setArrayOfComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingComments();
  }, [props.bookId]);

  return (
    <>
      <CommentsList arrayOfComments={arrayOfComments} />
      <AddComment bookId={props.bookId} />
    </>
  );
};

export default CommentArea;
