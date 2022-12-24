import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "박민준",
        comment: "안녕하세요 곰돌이입니다.",
    },
    {
        name: "박예준",
        comment: "안녕하세요 까가입니다.",
    },
    {
        name: "박하준",
        comment: "안녕하세요 막내입니다.",
    },

]

function CommentList(props) {
    return (
        <div>
            {
                comments.map((comment) => {
                    return (
                        <Comment name={comment.name} comment={comment.comment} />
                    );
                })
            }
        </div>
    );
}

export default CommentList;