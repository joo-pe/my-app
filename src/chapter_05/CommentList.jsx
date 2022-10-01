import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment name={"서태지"} comment={"안녕하세요.쭌쭌이파더입니다."}/>
            <Comment name={"유재석"} comment={"안녕하세요.박아가입니다."}/>
        </div>
    );
}

export default CommentList;