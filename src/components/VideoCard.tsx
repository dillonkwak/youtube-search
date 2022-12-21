export default function VideoCard({ video }) {
  return (
    <div>
      <h1>{video.title} </h1>
      <img src={video.image} width="150" />
      <p>{video.description}</p>
    </div>
  );
}
