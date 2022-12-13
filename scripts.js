//Header Starts
class MyHeader extends HTMLElement{
  connectedCallback(){
    this.innerHTML=`
    <ul>
    <li><a href="index.html">Question 1</a></li>
    <li><a href="question2.html">Question 2</a></li>
    <li><a href="question3.html">Question 3</a></li>
    <li><a href="question4.html">Question 4</a></li>
  </ul>`
  }
}
customElements.define('my-header',MyHeader)
//Header Ended

///////////   Question 4 scripts starts  ////////////
    const tvShows = [{
        title: 'Planet Earth II', score: 9.5,
        year: 2016, numRatings: 5000
    }, {
        title: 'Planet Earth', score: 9.4,
        year: 2006, numRatings: 5000
    }, {
        title: 'Breaking Bad', score: 9.4,
        year: 2008, numRatings: 6000
    }, {
        title: 'Band Of Brothers', score: 9.4,
        year: 2001, numRatings: 4900
    }, {
        title: 'Chernobyl', score: 9.3,
        year: 2019, numRatings: 4900
    }, {
        title: 'Jingle All The Way', score: 7.1,
        year: 1996, numRatings: 5000
    }, {
        title: 'The Wire', score: 9.3,
        year: 2002, numRatings: 6000
    }];
    //Rendering Unsorted Array on page mount/load
    const buildTable = (data) => {
        let table = document.getElementById('myTable')
        if(table){ 

        for (let i = 0; i < data.length; i++) {
            let row = `<tr>
							<td>${data[i].title}</td>
							<td>${data[i].score}</td>
							<td>${data[i].numRatings}</td>
					  </tr>`
            table.innerHTML += row
        }}
       
    };
    buildTable(tvShows);
    //Sorting based on scores and Rating if scores are equal
    const doSort = (a, b) => {
        if (a.score < b.score) {
            return 1;
        } else if (a.score > b.score) {
            return -1;
        }
        else if (a.score == b.score) {
            return b.numRatings - a.numRatings
        }
    };
    //Rendering Sorted Scores
    const getSortedShows = () => {
        let table = document.getElementById('myTable')
        table.innerHTML = "";
        let highestShows = tvShows.sort(doSort);
        for (let i = 0; i < highestShows.length; i++) {
            let row = `<tr>
							<td>${highestShows[i].title}</td>
							<td>${highestShows[i].score}</td>
							<td>${highestShows[i].numRatings}</td>
					  </tr>`
            table.innerHTML += row
        }
    };
    //Finding Highest Scoring show,if more than one have highest score, get the one with higher rating
    const highest = (a, b) => {
        if (a.score > b.score) {
            return a
        } else if (a.score == b.score) {
            return a.numRatings > b.numRatings ? a : b
        } else {
            return b
        }
    };
    //Rendering Highest Scoring show from "highest" function defined above
    getHighestShow = () => {
        let table = document.getElementById('myTable')
        table.innerHTML = "";
        let x = tvShows.reduce(highest, {});
        let row = `<tr>
							<td>${x.title}</td>
							<td>${x.score}</td>
							<td>${x.numRatings}</td>
					  </tr>`
        table.innerHTML += row
    };
    //Function to get second highest and render.
    const getSecondHighest = () => {
        let highestScored = tvShows.reduce(highest, {});
        let sortedShows = tvShows.sort(doSort);
        let filteredArray = sortedShows.filter((item) => item.score < highestScored.score);
        //Now rendering it.
        let table = document.getElementById('myTable')
        table.innerHTML = "";
        let row = `<tr>
							<td>${filteredArray[0].title}</td>
							<td>${filteredArray[0].score}</td>
							<td>${filteredArray[0].numRatings}</td>
					  </tr>`
        table.innerHTML += row
    };
///////////   Question 4 scripts ends  ////////////
