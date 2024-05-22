const region = document.getElementById('region');
const share = document.getElementById('btnShare');

const content = document.querySelector('.content');
const climate = document.getElementById('imgClimate');
const place = document.getElementById('place');
const degress = document.getElementById('degress');
const wind = document.getElementById('wind');

function loadData(data) {
    console.log(data)
    content.style.display = 'flex';
    climate.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
    degress.innerHTML = `Temperatura: ${Math.floor(data.main.temp)} C`;
    place.innerHTML = `${data.name}, ${data.sys.country}`;
    wind.innerHTML = `Vento: ${data.wind.speed} km/h`;
};

async function getDataApi() {
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=f56798495a16c23974ec0f0ef1a35c00}`;

    try {
        await fetch(url)
                .then((res) => res.json())
                .then((data) => {
            
                    if (data?.cod && data.cod === "404") {
                        return alert(`Não Encontrado!!!`);
                    };

                    loadData(data);
                }
            );
    } catch (error) {
        alert(error);
    };
};  

share.addEventListener('click', (target) => {
    console.log(target)
    if (!region.value) {
        return console.error("Input not be empty");
    };

    getDataApi();
});