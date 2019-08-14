import React from 'react';
import ReactDOM from 'react-dom';
// faker import
import faker from 'faker';
// comment detail import
import CommentDetail from './CommentDetail';
// approval card import
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard >
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:15PM" 
                    blogPost="Interesting read"
                    image= { faker.image.avatar() } 
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Yesterday at 7:32AM"
                    blogPost="Great content, thank you!"
                    image= { faker.image.avatar() } 
                /> 
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Sunday at 10:30AM"
                    blogPost="Where can we find more information?"
                    image= { faker.image.avatar() } 
                /> 
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);