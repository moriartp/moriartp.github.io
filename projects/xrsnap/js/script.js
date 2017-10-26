

// HARDWARE TABLE
d3.csv('assets/inventory.csv', function (error,data) {
  console.log(data);

  function tabulate(data, columns) {
        var table = d3.select('#table-container').append('table')
        var thead = table.append('thead')
        var tbody = table.append('tbody');

        // append the header row
        thead.append('tr')
          .selectAll('th')
          .data(columns).enter()
          .append('th')
            .text(function (column) { return column; });

        // create a row for each object in the data
        var rows = tbody.selectAll('tr')
          .data(data)
          .enter()
          .append('tr')
          .attr("class","rowA");

        // create a cell in each row for each column
        var cells = rows.selectAll('td')
          .data(function (row) {
            return columns.map(function (column) {
              return {column: column, value: row[column]};
            });
          })
          .enter()
          .append('td')
            .text(function (d) { return d.value; });

      return table;
    }

    // render the table(s)
    tabulate(data, ['Type','Name', 'Description']); // 2 column table

});


// SOFTWARE TABLE
d3.csv('assets/software.csv', function (error,data) {
  console.log(data);

  function tabulate(data, columns) {
        var table = d3.select('#table-container2').append('table')
        var thead = table.append('thead')
        var tbody = table.append('tbody');

        // append the header row
        thead.append('tr')
          .selectAll('th')
          .data(columns).enter()
          .append('th')
            .text(function (column) { return column; });

        // create a row for each object in the data
        var rows = tbody.selectAll('tr')
          .data(data)
          .enter()
          .append('tr')
          .attr("class","rowA");

        // create a cell in each row for each column
        var cells = rows.selectAll('td')
          .data(function (row) {
            return columns.map(function (column) {
              return {column: column, value: row[column]};
            });
          })
          .enter()
          .append('td')
            .text(function (d) { return d.value; });

      return table;
    }

    // render the table(s)
    tabulate(data, ['Type','Name', 'Description']); // 2 column table

});
