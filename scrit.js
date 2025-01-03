const allData = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    // console.log(data);
    displayAllData(data);
}


const displayAllData = (data) => {
    // console.log(data.data.tools);
    const section = document.getElementById('section')

    for (const element of data.data.tools) {
        // console.log(element);

        // console.log(element.length);

        const div = document.createElement('div');
        div.classList.add('card', 'bg-base-100', 'w-96', 'shadow-xl');

        div.innerHTML = `
        <img class="rounded-xl" src="${element.image}" alt="Image Not Found"/>
        <div class="card-body text-left">
            <h2 class="card-title">Features</h2>
            <ol type="1">
                <li>1.${element.features[0]}</li>
                <li>2.${element.features[1]}</li>
                <li>3.${element.features[2]}</li>
            </ol>
            <hr class="text-black mt-2 mb-2">
            <div class="flex justify-between">
                <div>
                    <h2 class="text-xl font-semibold">${element.name}</h2>
                    <h4 class="text-sm mt-1">${element.published_in}</h4>
                </div>
                <div>
                    <button onclick="displayDetails('${element.id}')" id="${element.id}" ><i class="fa-solid fa-arrow-right mt-4 items-center" style="color: #bb0c38;"></i></button>
                </div>
            </div>
        </div>
        `;

        section.append(div);
    }

}

const displayDetails = async(id) => {
    // console.log("click", id);
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const data = await res.json();
    // console.log(data);
    showDetails(data);

}

const showDetails = (details) => {

    const firstDiv = document.getElementById('firstDiv');

    firstDiv.innerHTML = `
    <h2 class="text-xl text-left font-semibold">${details.data.description}</h2>
    <div class="flex flex-row gap-3 justify-around">
        <div class="">
            <h5 class="bg-white text-[#03A30A] font-semibold p-2 rounded-md text-base">${details.data.pricing[0].price} <br> ${details.data.pricing[0].plan}</h5>
        </div>
        <div class="">
            <h5 class="bg-white text-[#F28927] font-semibold p-2 rounded-md text-base">${details.data.pricing[1].price} <br> ${details.data.pricing[1].plan}</h5>
        </div>
        <div class="">
            <h5 class="bg-white text-[#EB5757] font-semibold p-2 rounded-md text-base">Contact <br> ${details.data.pricing[2].plan}</h5>
        </div>
    </div>
    <div class="flex flex-row justify-between">
        <div class="text-left">
            <h3 class="text-lg font-semibold">Features</h3>
            <ul>
                <li>1.${details.data.features[1].feature_name}</li>
                <li>2.${details.data.features[2].feature_name}</li>
                <li>3.${details.data.features[3].feature_name}</li>
            </ul>
        </div>
        <div class="text-left">
            <h3 class="text-lg font-semibold">Integrations</h3>
            <ul>
                <li>1.${details.data.integrations[0]}</li>
                <li>2.${details.data.integrations[1]}</li>
                <li>3.${details.data.integrations[2]}</li>
            </ul>
        </div>
    </div>
    `;


    const secondDiv = document.getElementById('secondDiv');

    secondDiv.innerHTML = `
    <img src="${details.data.image_link[0]}"/>
    <h3 class="font-semibold text-lg text-left">${details.data.accuracy.description}</h3>
    <p class="text-sm text-[#585858] ">${details.data.description}</p>
    `;



    // console.log(details);
    displayDetailsData.showModal();
}



allData();