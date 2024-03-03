const loadRetro = async ( ) => {
    const res = await fetch ('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    // console.log(data);
    const reTro = data.posts;
    console.log(reTro);
    displayRetro (reTro);

}

const displayRetro = (reTro) => {
        // console.log(reTro);

        // step 1 : Link ID
        const reTroDiscuss = document.getElementById('discussContainer');

        reTro.forEach ( reTroAll => {
            // console.log(reTroAll);

            // step 2 : Creat a new div
            const discussCard = document.createElement('div');
            discussCard.classList = ` grid lg:col-span-2  `;

            // step 3 : set inner html
            discussCard.innerHTML = ` 
            <div class="card w-full bg-base-100 shadow-xl bg-[#12132D0D]">
                            <div class="card-body">
                              <div class="grid lg:grid-cols-5 gap-4">
                                <div> 
                                    <div class="indicator">
                                        <span class="indicator-item badge badge-secondary bg-red-800 "></span> 
                                        <div class="grid w-32 h-32 bg-base-300 place-items-center rounded-xl"><img src="./images/joinforum.png" alt=""></div>
                                    </div>
                                </div>
                                <div class="grid lg:col-span-4">
                                    <div class="flex text-[#12132DCC]">
                                        <h3># Music</h3>
                                        <h3 class="ml-10"> Author : Awlad Hossian</h3>
                                    </div>
                                    <h1 class="text-[#12132D] font-bold text-xl">10 Kids Unaware of Their Halloween Costume</h1>
                                    <p class="text-[#12132D99]">It’s one thing to subject yourself to ha Halloween costume mishap because, hey that’s your prerogative</p>
                                    <br>
                                    <hr style="border-top: dashed 1px;" />
                                    <br>
                                    <div class="text-[#12132D99] flex lg:justify-between items-center">
                                        <div class="flex gap-8">
                                            <div class="flex">
                                                <span class="flex"><img src="./images/Masseg icon.png" alt=""></span>
                                                <p class="ml-4">560</p>
                                            </div>
                                            <div class="flex">
                                                <span class="flex mr-4"><img src="./images/Group 16.png" alt=""></span>
                                                <p class="">1,568</p>
                                            </div>
                                            <div class="flex">
                                                <span class="flex mr-4"><img src="./images/Time.png" alt=""></span>
                                                <p class="">5 min</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button class="btn rounded-full"><img src="./images/Mail icon.png" alt=""></button>
                                        </div>
                                    </div>
    
                                </div>
                                
                              </div>
                              
                            </div>
                        </div>
            `;

            // step 4 : set append child
            reTroDiscuss.appendChild(discussCard);


        })
}

loadRetro ();