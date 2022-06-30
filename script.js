const list = document.querySelector('ul');
list.innerHTML = '';
const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                  'GNF576746573fhdg4737dh4;Greenfield',
                  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                  'SYB4f65hf75f736463;Stalybridge',
                  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];
for(let stn of stations){
    const firstThree = stn.slice(0,3);
    const lastPart = stn.slice(stn.indexOf(';')+1);
    const Result = firstThree + ' '+ lastPart;
    const newList = document.createElement('li');
    newList.textContent = Result;
    list.appendChild(newList);
}