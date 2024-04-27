var MyFirstComponent = function()
{
    return (
        <section>
            <h1>HI!! IM ASHLEY NICOLE DOMINGUEZ</h1> 
            <a href="">visit facebook</a>
          <ul>
              <li>webdesign</li>
              <li>webprogramming</li>
              <li>multimedia</li>
          </ul>
        </section>
    )
}
var MyName = function(props) {
return(
   <section> 
   <h1>{props.fullName}</h1>
   <h6>{props.Role}</h6>
</section>)
}
var MyBooks = function(props) {
    return (
        <section>
        <h1>Fictonal Books</h1>
        <h2>Seven-Minute Semblance</h2>
        <img src="https://teenfic.net/cover/seven-minute-semblance-godsforrent-fimbulwinter-56379506.jpg" alt="smug si ed" type="img-card"></img>
        <h3>title {props.Title}</h3>
        <i>Author: Headphonesandluck</i>
        <h3>Date published:{props.datePub}</h3>
    </section>
    )
}

//rendering react dom or root
        ReactDOM.render (
            //WHAT WE WANT TO SHOW
    <section>
        <MyName fullName = "ASHLEY NICOLE DOMINGUEZ" Role = "student"/>
        <MyBooks Title = "GODSFORRENT & FIMBULWINTER" datePub = "Date published: December, 08, 2018"/>
        <MyBooks Title = " Seven-Minute Semblance in Quarantine" datePub = "Date published: May, 08, 2020"/>
        <MyBooks Title = "GENIUSFORSALE & VORSTELLUNGEN" datePub = "Date published: March, 08, 2022"/>
        <MyBooks Title = " MASTERMINDSFORHIRE & RAGNAROK" datePub = "Date published: January, 08, 2024"/>
        <MyBooks Title = "Gods For Rent" datePub = "Date published: December, 08, 2018"/>
    </section>,
            //WHERE DO WE SHOW THE RENDERED CODE
            document.getElementById("root")
        )