import { useState } from "react";

function FeedbackForm(){
    const [text, setText] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        setIsSending(true);
        await sendMessage(text);
        setIsSending(false);
        setIsSent(true);
    }

    if(isSent){
        return <h1>Thanks for the feedback!</h1>
    }

    return(
        <form onSubmit={handleSubmit}>
            <p> How was your stay at The Four Seasons ? </p>
            <textarea 
                disabled={isSending} 
                value={text}
                onChange={e=> setText(e.target.value)} 
                />
            <br/>
            <button
                disabled={isSending}
                type="submit"
            >
                Send 
            </button>
            {isSending && <p> Sending... </p>}
        </form>
    );
}

function sendMessage(text){
    return new Promise(resolve => {
        setTimeout(resolve, 1000);
    });
}

export default FeedbackForm;