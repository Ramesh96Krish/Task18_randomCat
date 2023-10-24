async function getCatDetails(){
    try{
        let response = await fetch('https://cataas.com/c');
        let blob =  await response.blob();
        let imgUrl =  URL.createObjectURL(blob);
        const img = new Image();
        img.src = imgUrl;
        document.getElementById('container').appendChild(img);
    }catch(error){
        console.log('Error ',error);
    }

}