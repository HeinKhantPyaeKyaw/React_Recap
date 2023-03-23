import "../styles/FavoriteSites.css"
function FavoriteSites(){
    return(
        <div className="FavoriteSites">
        <section>
        <h2>
            Favorite Sites
        </h2>
        <ul id="links">
            <li>
            <a href="https://www.youtube.com/">Site 1</a>
            </li>
            <li>
            <a href="https://vitejs.dev/guide/">Site 2</a>
            </li>
            <li>
            <a href="https://code.visualstudio.com/docs/terminal/basics">Site 3</a>
            </li>
            <li>
            <a href="https://cscms.sit.kmutt.ac.th/mod/assign/view.php?id=10640">Site 4</a>
            </li>
            <li>
            <a href="https://scrimba.com/learn/frontend">Site 5</a>
            </li>
        </ul>
        
        </section>
        </div>
    )
}
export default FavoriteSites;