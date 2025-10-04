import HomeFeirantes from "./HomeFeirantes";
import HomeFeiras from "./HomeFeiras";
import './css/Home.css'

export default function Home() {
    return (
        <>
            <div id="container-home">
                <HomeFeiras />
                <HomeFeirantes />
            </div>
        </>
    )
}