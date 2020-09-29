const insertion =(cards) => {
  let k;
  for(let i=0; i<cards.length;i++){
    k = i;
    for( let j = i-1; j>=0; j--){
      if(cards[j] > cards[k]){
        [card[j],cards[k]] = [cards[k],cards[j]]
        k--;
      }
      else {
        break;
      }
    }
  }
}