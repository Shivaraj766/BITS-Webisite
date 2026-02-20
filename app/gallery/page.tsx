import Image from "next/image";

const memories = [
  { src: "/FIRSTIMG.jpg", title: "Campus View 1" },
  { src: "/SECONDIMG.jpg", title: "Campus View 2" },
  { src: "/THIRDIMG.jpg", title: "Campus View 3" },
  { src: "/FOURTHIMG.jpg", title: "Campus View 4" },
  {src:"/BUS.jpg", title:"College Bus"},
  {src:"/EVENT1.jpg", title:"Event 1"},
    {src:"/EVENT2.jpg", title:"Event 2"},
    {src:"/EVENT3.jpg", title:"Event 3"},
    {src:"/EVENT4.jpg", title:"Event 4"},
    {src:"/EVENT5.jpg", title:"Event 5"},
    {src:"/EVENT6.jpg", title:"Event 6"},
    {src:"/EVENT7.jpg", title:"Event 7"},
    {src:"/EVENT8.jpg", title:"Event 8"},
    {src:"/EVENT9.jpg", title:"Event 9"},
    {src:"/EVENT10.jpg", title:"Event 10"},
    {src:"/EVENT11.jpg", title:"Event 11"},
    {src:"/EVENT12.jpg", title:"Event 12"},
    {src:"/EVENT13.jpg", title:"Event 13"},
    {src:"/EVENT14.jpg", title:"Event 14"},
    {  src:"/EVENT15.jpg", title:"Event 15"},
    {src:"/EVENT16.jpg", title:"Event 16"},
    {src:"/EVENT17.jpg", title:"Event 17"},
    { src:"/EVENT18.jpg", title:"Event 18"},
    {src:"/EVENT19.jpg", title:"Event 19"},
    {src:"/EVENT20.jpg", title:"Event 20"},
    {src:"/EVENT21.jpg", title:"Event 21"},
    {src:"/EVENT22.jpg", title:"Event 22"},
    {src:"/EVENT23.jpg", title:"Event 23"},
    {src:"/EVENT24.jpg", title:"Event 24"},
    {src:"/EVENT25.jpg", title:"Event 25"},
    {src:"/EVENT26.jpg", title:"Event 26"},
    {src:"/EVENT27.jpg", title:"Event 27"},
    {src:"/EVENT28.jpg", title:"Event 28"},
    {src:"/EVENT29.jpg", title:"Event 29"},
    {src:"/EVENT30.jpg", title:"Event 30"},
    {src:"/EVENT31.jpg", title:"Event 31"},
    {src:"/EVENT32.jpg", title:"Event 32"},
    {src:"/EVENT33.jpg", title:"Event 33"},
    {src:"/EVENT34.jpg", title:"Event 34"},
    {src:"/EVENT35.jpg", title:"Event 35"},
    {src:"/EVENT36.jpg", title:"Event 36"},
    {src:"/EVENT37.jpg", title:"Event 37"},
    {src:"/EVENT38.jpg", title:"Event 38"},
    {src:"/EVENT39.jpg", title:"Event 39"},
    {src:"/EVENT40.jpg", title:"Event 40"},
    {src:"/EVENT41.jpg", title:"Event 41"},
    {src:"/EVENT42.jpg", title:"Event 42"},




];

export default function GalleryPage() {
  return (
    <section className="py-16 bg-gray-50 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="section-title">College Memories Gallery</h1>
          <p className="section-subtitle">
            Moments, memories, and snapshots from BITS Adoni campus life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((item) => (
            <div
              key={item.src}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold text-[#0d1b4b]">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}