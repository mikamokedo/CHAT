import React from 'react';
import './message.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './message/Message';

const Messages = ({messages,name}) =>{
    const mapMessage = () =>{
        let xhtml = null;
        if(messages){
            xhtml = messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)
        }
       
        return xhtml;

    }
    console.log(messages,name);
    return(
        <ScrollToBottom className="messages">
            {mapMessage()}
            
      </ScrollToBottom>
    )
}

export default Messages;