import React from 'react'

export default function Text({ addText, addBracket }) {
    let text = 'I love JavaScript';
    if (addText) {
        text = addText(text, 'hello');
    }
    if (addBracket) {
        text = addBracket(text);
    }

    return (
        <div>
            {text}
        </div>
    )
}
