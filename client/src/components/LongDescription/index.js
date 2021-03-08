import React from 'react';
import './styles.css';

function LongDescription(props) {
    let firstPart = props.description.slice(0, 800);
    let secondPart = props.description.slice(800);

    function handleSeeMore(event) {
        event.preventDefault();
        document.querySelector(`#more-${props.id}`).classList.add("hidden");
        document.querySelector(`#second-${props.id}`).classList.remove("hidden");
        document.querySelector(`#less-${props.id}`).classList.remove("hidden");
    }

    function handleShowLess(event) {
        event.preventDefault();
        document.querySelector(`#more-${props.id}`).classList.remove("hidden");
        document.querySelector(`#second-${props.id}`).classList.add("hidden");
        document.querySelector(`#less-${props.id}`).classList.add("hidden");
    }

    return (
        <div>
            <p>{firstPart}<span className="more" id={`more-${props.id}`} onClick={handleSeeMore}> ...See More</span><span className="second hidden" id={`second-${props.id}`}>{secondPart}</span> <span className="less hidden" id={`less-${props.id}`} onClick={handleShowLess}>...Show Less</span></p>
        </div>
    )
}

export default LongDescription;