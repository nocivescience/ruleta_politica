(function() {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.btn');
    const indexEl=document.querySelector('.index')
    let deg = 0;
    startButton.addEventListener('click', () => {
      startButton.style.pointerEvents = 'none';
      deg = Math.floor(5000 + Math.random() * 5000);
      wheel.style.transition = 'all 10s ease-out';
      indexEl.style.transition='all 10s linear';
      wheel.style.transform = `rotate(${deg}deg)`;
      indexEl.style.transform='rotate(360deg)';
      wheel.classList.add('blur');
    });
    wheel.addEventListener('transitionend', () => {
      wheel.classList.remove('blur');
      startButton.style.pointerEvents = 'auto';
      wheel.style.transition = 'none';
      const actualDeg = deg % 360;
      console.log(actualDeg)
      wheel.style.transform = `rotate(${actualDeg}deg)`;
    });
    indexEl.addEventListener('transitionend',()=>{
        startButton.style.pointerEvents='auto';
        indexEl.style.transition='none';
        indexEl.style.transform='rotate(0deg)';
    })
  })();
  