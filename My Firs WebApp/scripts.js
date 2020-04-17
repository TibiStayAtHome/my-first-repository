let photo1 = {
    photo: 'images/img1.jpg',
    title: 'Winter',
    description: 'Winter is the coldest season of the year in polar and temperate zones.'
};
let photo2 = {
    photo: 'images/img2.jpg',
    title: 'Wave',
    description: 'Waves can only exist in fields when there is a force that tends to restore the field to equilibrium'
};
let photo3 = {
    photo: 'images/img3.jpg',
    title: 'Forest',
    description: 'In the forest I breathe in every way that it is possible to expand: in lungs, in brain in soul.'
};
let photo4 = {
    photo: 'images/img4.jpg',
    title: 'Sunshine',
    description: 'Sunshine is the light that comes from the sun. On a clear, cloudless spring day, you can go outside and enjoy the sunshine.'
};
let photo5 = {
    photo: 'images/img5.jpg',
    title: 'Trees',
    description: 'In botany, a tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves in most species.'
};
let photo6 = {
    photo: 'images/img6.jpg',
    title: 'Autumn',
    description: 'The autumn was the time of hugs, of evenings with warm drinks and warmer smiles.'
};
let photo7 = {
    photo: 'images/img7.jpg',
    title: 'Road',
    description: 'The road was a smooth black river, the sort wheels float so effortlessly along.'
};

let imagesData = [photo1, photo2, photo3, photo4, photo5, photo6, photo7];
let currentPhoto = 0;



$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#photo-title').text(imagesData[currentPhoto].title);
$('#photo-description').text(imagesData[currentPhoto].description);



$("#nav-forward").click(() => {
    if (currentPhoto < imagesData.length) {
    $('#photo').attr('src', imagesData[currentPhoto].photo); 
    $('#photo-title').text(imagesData[currentPhoto].title);
    $('#photo-description').text(imagesData[currentPhoto].description);
    currentPhoto++;
    }

    else if (currentPhoto === 7) {
    currentPhoto = 0;      
    $('#photo').attr('src', imagesData[currentPhoto].photo); 
    $('#photo-title').text(imagesData[currentPhoto].title);
    $('#photo-description').text(imagesData[currentPhoto].description);
    }
    });

    $("#nav-back").click(() => {
        if (currentPhoto === 0) {
         currentPhoto = 6;   
        $('#photo').attr('src', imagesData[currentPhoto].photo); 
        $('#photo-title').text(imagesData[currentPhoto].title);
        $('#photo-description').text(imagesData[currentPhoto].description);
        }
        else if (0 <= imagesData.length) {
        $('#photo').attr('src', imagesData[currentPhoto].photo); 
        $('#photo-title').text(imagesData[currentPhoto].title);
        $('#photo-description').text(imagesData[currentPhoto].description);
         currentPhoto--;
        }
        });

        
        let i = 0;  
        imagesData.forEach(photo => {
                $('.thumbnails').append(
                    '<div class="childDIV" id="childID-' + i + '"><h2> '+ photo.title + '</h2> <img " src="' + photo.photo + '" data-number="' + i + '"id="thumbnails-img"></div>'        
                    ) 
                 i++;
                 
                });     

                
                $(".childDIV").on( "click",function (event) {
                    currentPhoto = $(event.target).attr("data-number");
                    $('#photo').attr('src', imagesData[currentPhoto].photo);
                    $('#photo-title').text(imagesData[currentPhoto].title);
                    $('#photo-description').text(imagesData[currentPhoto].description);
                });


                
                   
                    
    

        
