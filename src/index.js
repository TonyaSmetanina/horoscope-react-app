import React from "react";
import ReactDOM from "react-dom";

// const div = document.createElement("div");
// const divReact = React.createElement("h1", null, "Hello world");

//Components always return
function Horoscope () {
return (
    <table className="table table-success table-striped-columns table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Horoscope</th>
        <th scope="col">Date</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Aries (Ram)</td>
      <td>March 21–April 19</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td> Taurus (Bull)</td>
      <td>April 20–May 20</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Gemini (Twins)</td>
      <td>May 21–June 21</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Cancer (Crab)</td>
      <td>June 22–July 22</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Leo (Lion)</td>
      <td>July 23–August 22</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Virgo (Virgin)</td>
      <td>August 23–September 22</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Libra (Balance)</td>
      <td>September 23–October 23</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Scorpius (Scorpion)</td>
      <td>October 24–November 21</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>Sagittarius (Archer)</td>
      <td>November 22–December 21</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>Capricornus (Goat)</td>
      <td>December 22–January 19</td>
    </tr>
    <tr>
      <th scope="row">11</th>
      <td>Aquarius (Water Bearer)</td>
      <td>January 20–February 18</td>
    </tr>
    <tr>
      <th scope="row">12</th>
      <td>Pisces (Fish)</td>
      <td>February 19–March 20</td>
    </tr>

  </tbody>

  </table>
)
}


ReactDOM.render(<Horoscope></Horoscope>, document.querySelector("#one"));