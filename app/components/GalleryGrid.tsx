export default function GalleryGrid({ images = [] }: { images?: string[] }) {
  const imgs = images.length ? images : [
    '/images/placeholder1.svg',
    '/images/placeholder2.svg',
    '/images/placeholder3.svg',
    '/images/placeholder4.svg',
    '/images/placeholder5.svg',
  ];

  return (
    <div className="gallery-grid">
      {imgs.map((src, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <img key={i} src={src} alt={`Gallery ${i + 1}`} />
      ))}
    </div>
  );
}
