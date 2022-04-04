import React from 'react';

const Blogs = () => {
    return (
        <div>
           <h3>What is Context API?</h3>
           <p><span style={{color:'red'}} >Answer:</span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" <br />
            or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            <h3>What is Semantic Tag?</h3>
            <p><span style={{color:'red'}}>Answer:</span> Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the  tag <br />
             is immediately recognized by the browser as some type of coding language.</p>

        </div>
    );
};

export default Blogs;