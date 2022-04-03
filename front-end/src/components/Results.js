import React, { useEffect, useState } from "react";
import "./Results.css";
import { LoremPicsum } from "react-lorem-picsum";
import Pagination from "./Pagination";
import Result from "./Result";

function Results() {
    

    // fetch random results (limit of 200 requests per day so don't leave this code on...)
    /*
    fetch('https://my.api.mockaroo.com/reverse_image.json?key=093a4150')
    .then(response => response.json())
    .then(function (result) {
        for (var i = 0; i < result.length; i++) {
        results.push(result[i])
        }
    })
    .catch(error => console.log('error', error));
    
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
      fetch('https://my.api.mockaroo.com/reverse_image.json?key=093a4150')
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error('something went wrong while requesting posts');
        })
        .then((results) => setResults(results))
        .catch((error) => setError(error.message));
    }, []);

    if (error) return <h1>{error}</h1>;
    
    */
    const results = [{
        "source": "Alphazap",
        "date": "01/21/2022",
        "link": "soup.io"
      }, {
        "source": "Namfix",
        "date": "02/16/2022",
        "link": "feedburner.com"
      }, {
        "source": "Holdlamis",
        "date": "05/15/2021",
        "link": "ucoz.com"
      }, {
        "source": "Namfix",
        "date": "03/22/2021",
        "link": "patch.com"
      }, {
        "source": "Subin",
        "date": "12/04/2021",
        "link": "narod.ru"
      }, {
        "source": "Viva",
        "date": "06/30/2021",
        "link": "blogspot.com"
      }, {
        "source": "Cardify",
        "date": "08/07/2021",
        "link": "mozilla.org"
      }, {
        "source": "Temp",
        "date": "02/25/2022",
        "link": "un.org"
      }, {
        "source": "Sonair",
        "date": "03/20/2021",
        "link": "google.com"
      }, {
        "source": "Temp",
        "date": "03/17/2021",
        "link": "webeden.co.uk"
      }
    ];
    
    return (
        <div className="container">
            <div className="original">
                <h2>Original Image</h2>
                <LoremPicsum width={175} height={175} />
            </div>

            <div className="result-container">
              {results.length > 0 ? (
                <>
                  <Pagination
                    data={results}
                    RenderComponent={Result}
                    title={results.length + " Matches Found"}
                    pageLimit={5}
                    dataLimit={2}
                  />
                </>
              ) : (
              <h1>No Posts to display</h1>
              )}
            </div>

            <button className="download">Download Results</button>
        </div>
    )
}

export default Results;