import React from 'react';
import Filter from './Filter';
import SongItem from './SongItem';

const SongList = props => {
    console.log(props)
    return (
        <div className="half songlist">
            <h2>Song List</h2>
            <Filter />
            <table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Artists</td>
                            <td>Play?</td>
                            <td>Queue?</td>
                            <td>Favorite</td>
                            <td>Likes</td>
                        </tr>
                    </thead>
                    <tbody>
                        {props.songs.map(song => 
                            <SongItem key={song.id} {...song}
                            />
                            )}
                    </tbody>
            </table>
        </div>
    )
}

export default SongList;