import React from 'react';

const Blogs = () => {
    return (
        <div>
           <h3>What is Context API?</h3>
           <p><span style={{color:'red'}} >Answer:</span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" <br />
            or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>

        </div>
    );
};

export default Blogs;