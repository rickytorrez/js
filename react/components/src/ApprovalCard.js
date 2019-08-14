import React from 'react';

// pass props to get the properties from the CommentDetail component and use them on the ApprovalCard
const ApprovalCard = (props) => {
    return (
        <div className="ui card">
            <div className="content">{ props.children }</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );

};

export default ApprovalCard;