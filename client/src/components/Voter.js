import React from 'react';

export default function Voter({...props}) {
    return (
        <div className='ui buttons padding-top-less'>
            <button className='ui button' onClick={() => props.downVote(props.item.id)}>DownVote-</button>
            <div className='or' data-text={props.item.voteScore}></div>
            <button className='ui positive button' onClick={() => props.upVote(props.item.id)}>UpVote</button>
        </div>
    )
}