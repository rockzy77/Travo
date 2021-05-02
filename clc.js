$(document).ready(function () {

    let culture = [
        ['https://www.planetware.com/photos-large/PER/egypt-pyramids-world-heritage.jpg', 'Pyramids of Giza', 'Egypt', 'One of the most iconic sites in the world, the Pyramids of Giza, just outside Cairo, are a surreal sight rising from the barren desert landscape.'],
        ['https://www.planetware.com/photos-large/PER/myanmar-bagan-world-heritage.jpg', 'Bagan', 'Myanmar', 'Thousands of ancient temples and stupas stretch endlessly across the landscape at Bagan, where the silhouette of the temple spires against the sky in the early morning or late day is a magical sight.'],
        ['https://www.planetware.com/photos-large/PER/cambodia-angkor-wat-world-heritage.jpg', 'Angkor Wat', 'Combodia', 'In a unique jungle setting, not far from the city of Siem Reap, Angkor Wat is known for being the world\'s largest religious monument, but it is more than sheer size that makes the Angkor complex so interesting'],
        ['https://www.planetware.com/photos-large/PER/china-great-wall-world-heritage.jpg', 'Great Wall of China', 'China', 'Stretching almost 6,000 kilometers as it snakes its way through forests and mountains, the Great Wall of China is one of those undeniable bucket list sites that have long inspired great adventures.'],
        ['https://www.planetware.com/photos-large/PER/italy-roman-colosseum-world-heritage.jpg', 'Roman Colosseum', 'Italy', 'One of the most recognizable structures in the world, the Roman Colosseum is the largest building remaining from Roman times.'],

    ];
    

        for (i = 0; i < culture.length; i++) {
            var mname = culture[i][1];
            var place = culture[i][2];
            var des = culture[i][3];
            var images = culture[i][0];
                
                    $(` <div class="card-body">
                    <div class="card" style="background: linear-gradient(rgba(0, 0, 0, 0.432), rgba(0, 0, 0, 0.432)), url(${images});background-position: center;background-size: cover;"></div>
                    <p class="cardhead">${mname},<br><span>${place}</span></p> 
                    <p class="carddes">${des}</p> 
                </div>`).appendTo('#cards');
            
        }
  

});