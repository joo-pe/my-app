import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="책1" numOfPage={300} />
            <Book name="책2" numOfPage={400} />
            <Book name="책3" numOfPage={500} />
        </div>
    );
}

export default Library;
