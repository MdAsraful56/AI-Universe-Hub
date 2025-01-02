const allData = async(seeMoreBtn) => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    // console.log(data);
    displayAllData(data, seeMoreBtn);
}

const displayAllData = (data, seeMoreBtn) => {
    // console.log(data.data.tools);
    const section = document.getElementById('section')

    for (const element of data.data.tools) {
        console.log(element);

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
                    <i class="fa-solid fa-arrow-right mt-4 items-center" style="color: #bb0c38;"></i>
                </div>
            </div>
        </div>
        `;

        section.append(div);
    }

}


allData();