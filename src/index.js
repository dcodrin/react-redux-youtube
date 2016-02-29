import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from "youtube-api-search";
import _ from "lodash";

import VideoDetail from "./components/VideoDetail.jsx"
import VideoList from "./components/VideoList.jsx";
import SearchBar from "./components/SearchBar.jsx";

//YouTube Key
const API_KEY = "AIzaSyBueuzFCt46YCTrv6HYBTSXsYOUTCHd5qk";

//const is es6 syntax. this is a variable declaration and assignment, that cannot be modified, it is constant.

//This is an example functional component. It has no state.
//const App = () => {
//    return (
//        <div>
//            <SearchBar />
//        </div>
//    );
//
//};

//This is the same as above but converted to a class based component

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        //Default videos that will be shown based on this
        this.videoSearch("surfBoards")
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: {term}}, (videos) => {
            this.setState({videos: videos, selectedVideo: videos[0]}); //This es6 syntax is the same as {videos: videos} it only works when the key value pairs are the same.
        });
    }

    render() {

        //Using debounce to throttle our search query.
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar  onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}


// <App /> is an instance of the App class
ReactDOM.render(<App/>, document.getElementById("app"));
