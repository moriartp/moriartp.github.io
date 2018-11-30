    var donut = donutChart()
        .width(window.innerWidth)
        .height(window.innerHeight*0.67)
        .cornerRadius(3) // sets how rounded the corners are on each slice
        .padAngle(0.015) // effectively dictates the gap between slices
        .variable('Probability')
        .category('Skill');

    d3four.tsv('data/fte.csv', function(error, data) {
        if (error) throw error;
        d3four.select('#chart')
            .datum(data) // bind data to the div
            .call(donut); // draw chart in div
    });