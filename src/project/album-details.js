import React from "react";
import { useParams } from "react-router-dom";
import { albumDetails, albumImageUrl } from "./napster-service";
import { useState, useEffect } from "react";
import * as client from "./likes/client";
import { useSelector } from "react-redux";

function AlbumDetails() {
  const { currentUser } = useSelector((state) => state.user);
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);
  const fetchAlbum = async () => {
    const response = await albumDetails(albumId);
    setAlbum(response.albums[0]);
  };

  const likeAlbum = async () => {
    const response = await client.createUserLikesAlbum(albumId, album.name);
    console.log(response);
  };

  useEffect(() => {
    fetchAlbum();
  }, []);
  return (
    <div>
      {JSON.stringify(currentUser)}

      {album && (
        <>
          {currentUser && <button onClick={likeAlbum}>Like</button>}
          <h1>{album.name}</h1>
          }
          <img src={albumImageUrl(album)} />
          <pre>{JSON.stringify(album, null, 2)}</pre>
        </>
      )}
    </div>
  );
}

export default AlbumDetails;
