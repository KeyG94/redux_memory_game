import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleIDs, flipCard, selectMatchedIDs, resetCards} from '../../board/boardSlice';

let cardLogo = "https://scontent.ftrd1-1.fna.fbcdn.net/v/t1.6435-9/245701859_10159350429736257_5456058273209449770_n.jpg?_nc_cat=100&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=drASpl38hzwAX_HKiu9&_nc_ht=scontent.ftrd1-1.fna&oh=6a6ed272171626816440506d8077f101&oe=61A67185";


export const Card = ({id, contents}) => {
  //selected data and dispatch variables below
  const visibleIDs = useSelector(selectVisibleIDs);
  const matchedIDs = useSelector(selectMatchedIDs);
  const dispatch = useDispatch();

  const tryAgainHandler = () => {
    //action dispatch below
    dispatch(resetCards());
  };
  
  // flip card action
  const flipHandler = (id) => {
    //action dispatch below
    dispatch(flipCard(id));
  };

  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  
  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );

  // 1st if statement
  // implement card id array membership check
  if (visibleIDs.includes(id) || matchedIDs.includes(id)){
    cardText = contents;
    click = () => {};
  }

  // 2nd if statement
  // implement card id array membership check
  if (matchedIDs.includes(id)) {
    cardStyle = 'matched';
  }

  // 3rd if statement
  // implement number of flipped cards check
  if (visibleIDs.length === 2 && !matchedIDs.includes(id)) {
    cardStyle = 'no-match'
    click = tryAgainHandler;
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};





