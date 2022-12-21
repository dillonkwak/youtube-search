import VideoCard from "../../components/VideoCard";

export default function SearchResults({
  searchPhrase,
}: {
  searchPhrase: string;
}) {
  const videos = [
    {
      title: "VOX BORDERS IS CANCELED",
      description:
        "Thanks for the wild ride, Vox. And thank you all for the support over these years.",
      image: "https://i.ytimg.com/vi/wILAAYhKQnY/maxresdefault.jpg",
    },
    {
      title: "How I Make My Maps",
      description: "My workflow, 8 years in the making.",
      image: "https://i.ytimg.com/vi/GsojLuJpe_0/maxresdefault.jpg",
    },
    {
      title: "The Life Where I Don't Travel",
      description:
        "This is the story of my summer and the reflections I've had.",
      image: "https://i.ytimg.com/vi/ABrzFmhHJIk/maxresdefault.jpg",
    },
  ];
  return (
    <div className="App">
      <h1>Search Results</h1>
      {videos
        .filter((video) =>
          searchPhrase ? video.title.toLowerCase().includes(searchPhrase) : true
        )
        .map((video) => (
          <VideoCard video={video} />
        ))}
    </div>
  );
}
/*searchPhrase ? asks "does the search phrase exist?" and if the search phrase exits, only include the video
that has the search phrase in the title. Otherwise return every video.  */
