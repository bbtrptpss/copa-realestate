export default function VirtualTourSection() {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold-500 text-xs font-semibold tracking-[0.35em] uppercase mb-4">
            Virtual Tour
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            สำรวจ 360°
          </h2>
          <div className="w-12 h-0.5 bg-gold-500 mx-auto mb-6" />
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            ชมบรรยากาศจริงรอบทิศทาง สัมผัสประสบการณ์ก่อนตัดสินใจ
          </p>
        </div>

        {/* 360 Viewer */}
        <div className="relative w-full aspect-video border border-gray-200 shadow-lg overflow-hidden">
          <iframe
            src="https://storage.net-fs.com/hosting/7369256/18/"
            title="Copacabana Group — Virtual Tour 360°"
            allow="fullscreen; gyroscope; accelerometer"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
