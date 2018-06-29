google.charts.load('current', {'packages':['sankey']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');
    data.addColumn({type:'string', role:'tooltip'});
    data.addRows([
        [ "BPIL", "Teaching", 1, "hui"],
        [ "BPIL", "Experiments", 1, "blyatb"],
        [ "Adlan", "Student supervision", 1, "pizda"],
        [ "Joseph", "Student supervision", 1, "mudak"]
    ]);
    var colors = ['#a6cee3', '#b2df8a', '#cab2d6', '#fdbf6f', '#cab2d6', '#cab2d6', '#cab2d6'];
    /*
    pairingOrder  = BPIL = '#a6cee3' - blue
                    Teaching = '#b2df8a' - green
                    Experiments = '#cab2d6' - purple
                    Adlan = '#fdbf6f' - orange
                    Student Supervision = '#cab2d6' - purple
                    Jseph = '#cab2d6' - purple

      The Order of the pairs in data.addRows dictates color pairs
    */

    // Sets chart options.
    var options = {
        width: 600,
        sankey: {
            node: {
                colors: colors
            },
            link: {
                colorMode: 'gradient'
            }
        }
    };

    // Instantiates and draws our chart, passing in some options.
    var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
    chart.draw(data, options);
}