import React from 'react';
import { IChose } from './App';


interface IProps {
    userChosesHistory: IChose[];
    computerChosesHistory: IChose[];
    computerScore: number;
    userScore: number;
    onClearHistory(): void;
}

const Results: React.FC<IProps> = ({ userChosesHistory, computerChosesHistory, computerScore, userScore, onClearHistory }) => {
    return (
        <div className='results'>
            <div className="results__columns">
                <div className='results__user'>
                    <span>your score: {userScore}</span>
                    <div>{userChosesHistory.map((chose: IChose, i: number) => <div key={i}>{chose.emoji}</div>)}</div>
                </div>
                <div className='results__computer'>
                    <span>computer score: {computerScore}</span>
                    <div>{computerChosesHistory.map((chose: IChose, i: number) => <div key={i}>{chose.emoji}</div>)}</div>
                </div>
            </div>
            {userChosesHistory.length !== 0 || computerChosesHistory.length !== 0 ? <button className='button' onClick={onClearHistory}>clear history</button> : null}
        </div>
    )
}

export default Results
