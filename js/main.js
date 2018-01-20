$(document).ready(function(){
    var portfolio_count = $(".portfolio #portfolio_item").length;
    var portfolio_1 = "Сайт для ресторана";
    var portfolio_2 = "Сайт для развлечений";
    var portfolio_3 = "Сайт для путешествий";

    for(var i = 0; i < portfolio_count; i++)
    {
        work_id(i+1);
    }

    function work_id (i)
    {
        $("#work_" + i).click(function(){
            $(".modal-title").html('Работа ' + i);
            $(".modal img").attr("src","img/portfolio/" + i + ".png");
            $(".modal img").attr("alt","Работа" + i);
            
            if (i == 1)
            {
                $('#site-title').html(portfolio_1);
            } else if (i == 2)
            {
                $('#site-title').html(portfolio_2);
            } else 
            {
                $('#site-title').html(portfolio_3);
            }
        });
    }
});