const loadPost = async ( ) => {
    const res = await fetch ('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    // console.log(data);
    const reTroLetestPost = data;
    // console.log(reTroLetestPost);
    displaylatestPost(reTroLetestPost);

}

const displaylatestPost = (reTroLetestPost) => {
    // console.log(reTroLetestPost);

    // step 1 : Link ID
    const reTroPost = document.getElementById('letestPost');

    reTroLetestPost.forEach ( letestPost => {
        console.log(letestPost);

        //  Step 2 : creat a new post div
        const postCard = document.createElement('div');
        postCard.classList = ` grid lg:grid-cols-3 gap-6 `;

        //  Step 3 : set inner Html of post
        postCard.innerHTML = ` 
        <div class="">
                    <div class="card w-96 bg-base-100 shadow-xl border-slate-500">
                        <div class="card-body ">
                          <div class="container bg-[#12132D0D] rounded-2xl">
                            <span><img src="${letestPost.cover_image }" alt=""></span>
                          </div>
                          <div class="flex text-[#12132D99]">
                            <span><img src="./images/date icon.png" alt=""></span>
                            <p class="ml-4">${letestPost.author?.posted_date || 'No publish date'}</p>
                          </div>
                          <h2 class="font-extrabold text-xl text-[#12132D]"> ${ letestPost.title} </h2>
                          <p class="text-[#12132D99]">  ${letestPost.description} </p>
                          <div class="flex">
                            <span><img class ="rounded-full h-16 " src="${ letestPost.profile_image}" alt=""></span>
                            <div class="ml-4">
                                <h3 class="font-bold text-[#12132D] text-base"> ${letestPost.author.name} </h3>
                                <p class="#12132D99"> ${letestPost.author?.designation || 'Unknown' } </p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
        
        `;

         // step 4 : set append child off post
         reTroPost.appendChild(postCard);
    } )

}



loadPost ();