const sec = document.querySelector('.second');
const hour = document.querySelector('.hour');
const min = document.querySelector('.minute');

function GetTime() 
{
    const now = new Date();

    const Gsec = now.getSeconds();
    const Gmin = now.getMinutes();
    const Ghour = now.getHours();

    const Sdegree = (Gsec / 60) * 360;
    const Mdegree = (Gmin / 60) * 360;
    const Hdegree = (Ghour / 12) * 360;

    sec.style.transform = `rotate(${Sdegree}deg)`;
    hour.style.transform = `rotate(${Hdegree}deg)`;
    min.style.transform = `rotate(${Mdegree}deg)`;

}


setInterval(GetTime, 1000);
