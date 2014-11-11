/**
 * Created by phillipwright on 11/9/14.
 */
$(document).ready(function(){
    var source   = $('#ajaxTemplate').html();
    var template = Handlebars.compile(source);
    var html    = template(country);
    $('#countries').html(html);
});

var country = {
    items: [
        {CountryCode: "BY", CountryName: "Belarus", Population: 9685000, English: false},
        {CountryCode: "BZ", CountryName: "Belize", Population: 314522, English: false},
        {CountryCode: "CA", CountryName: "Canada", Population: 33679000, English: true},
        {CountryCode: "CC", CountryName: "Cocos [Keeling] Islands", Population: 628, English: true},
        {CountryCode: "CD", CountryName: "Democratic Republic of the Congo", Population: 70916439, English: true},
        {CountryCode: "CF", CountryName: "Central African Republic", Population: 4844, English: false},
        {CountryCode: "CG", CountryName: "Republic of the Congo", Population: 3039126, English: false},
        {CountryCode: "CH", CountryName: "Switzerland", Population: 7581000, English: false}
    ]
};



    Handlebars.registerHelper('popColor', function(population){
        if(population >= 100000 && population <= 5000000){
            return "perfect";

        }
        if(population >= 5000000 ) {
            return "tooHigh";
        }


    });

Handlebars.registerHelper('addCheck', function(english){
    if(english == true ) {
        return "fa-check";

    }
    else{
        return " ";
    }
 });
