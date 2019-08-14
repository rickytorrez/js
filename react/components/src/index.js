import React from 'react';
import ReactDOM from 'react-dom';
// faker import
import faker from 'faker';
// comment detail import
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:15PM" 
                blogPost="Interesting read"
                image= { faker.image.avatar() } 
            />
            <CommentDetail 
                author="Alex" 
                timeAgo="Yesterday at 7:32AM"
                blogPost="Great content, thank you!"
                image= { faker.image.avatar() } 
            /> 
            <CommentDetail 
                author="Jane" 
                timeAgo="Sunday at 10:30AM"
                blogPost="Where can we find more information?"
                image= { faker.image.avatar() } 
            /> 
        </div>
    );
};

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);