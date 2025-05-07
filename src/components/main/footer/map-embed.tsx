export default function Map() {
  const lat = 35.76764734535941; // عرض جغرافیایی (مثلاً تهران)
  const lng = 50.06351515804299; // طول جغرافیایی
  const zoom = 15;

  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.001}%2C${lat - 0.001}%2C${lng + 0.001}%2C${lat + 0.001}&layer=mapnik&marker=${lat}%2C${lng}&zoom=${zoom}`;

  return (
    <div className="w-full aspect-video rounded overflow-hidden">
      <iframe title="لوکیشن"
        src={mapUrl}
        className="w-full h-full"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}