import "./PostC.css" // import customized css style Rendering 

// Example of JSX and Conditional Rendering
// In React, it use className instead of class in CSS/JavaScript
export default function Post({title, author, content, following }) {
    return (
        <div className="card"> 
            <h1> {title} </h1>
            <h3>By: {author} </h3>
            <button> { following? "Unfollow" : "Follow" } </button>
            <p> {content} </p>
        </div>
    );
}