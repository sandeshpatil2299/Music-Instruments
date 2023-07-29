const drumKits= ["tom", "cymbal", "hihats", "snare", "bass"];

const contentDiv= document.querySelector(".content");

drumKits.forEach((element) =>
{
   const btnEl= document.createElement("button");
   btnEl.classList.add("btn");
   btnEl.innerText= element;
   btnEl.style.backgroundImage= "url(images/" + element + ".png";
   contentDiv.appendChild(btnEl);

   const audioEl= document.createElement("audio");
   audioEl.src= "music/" + element + ".wav";
   btnEl.appendChild(audioEl);

   btnEl.addEventListener("click", () =>
   {
      audioEl.play();
   })

   window.addEventListener("keydown", (event) =>
   {
      if(event.key === element.slice(0, 1))
      {
         audioEl.play();
         btnEl.style.transform= "scale(0.9)";
      }
      
      setTimeout(() =>
      {
         btnEl.style.transform= "scale(1)";
      }, 100);
   })
})