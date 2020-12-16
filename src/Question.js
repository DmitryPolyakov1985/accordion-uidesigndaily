import React, {useState} from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';

const Question = ({title, answer}) => {
    const [isShow, setIsShow] = useState(false);

    return (
        <div className={isShow ? 'question backgr' : 'question'}>
            <div className="question-header">
                <button className='btn' onClick={e => setIsShow(!isShow)}>{isShow ? <BiMinus /> : <BiPlus />}</button>
                <h3>{title}</h3>
            </div>
            {isShow ? (
                <div className='question-body'>
                    <p>{answer}</p>
                    <button className='learn-more'>Learn more</button>
                </div>
            ) : ''}
        </div>
    )
}

export default Question
