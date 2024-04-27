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
var MyName = function() {
return(
   <section> <h1>HI!! IM ASHLEY NICOLE DOMINGUEZ</h1>
</section>)
}
var MyBooks = function() {
    return (
        <section>
        <h1>Fictonal Books</h1>
        <h2>Seven-Minute Semblance</h2>
        <img src="https://teenfic.net/cover/seven-minute-semblance-godsforrent-fimbulwinter-56379506.jpg" alt="smug si ed" type="img-card"></img>
        <h3>fimbulwiwnter</h3>
        <i>Author: Headphonesandluck</i>
        <h3>Date published: December, 08, 2018</h3>
    </section>
    )
}

//rendering react dom or root
        ReactDOM.render (
            //WHAT WE WANT TO SHOW
        <section>
        <h1>LESSON2</h1>
        <MyFirstComponent/>
        <MyBooks title = "" />
        <MyBooks />
        <MyBooks />
        <MyBooks />
        <MyBooks />
        </section>,
            //WHERE DO WE SHOW THE RENDERED CODE
            document.getElementById("root")
        )